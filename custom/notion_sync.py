#!/usr/bin/env python3
"""Create Jekyll posts for every new page in the Notion "Online posts" database.

Usage:
    python3 custom/notion_sync.py
    python3 custom/notion_sync.py --dry-run
    python3 custom/notion_sync.py --posts-dir /tmp/posts
    python3 custom/notion_sync.py '<database-url-or-id>'

Each database row is compared against _posts/: a row is skipped when its
Notion page id or its exact title already appears there. Every remaining row
gets the same front matter notion_post.py produces, with tags from the page's
"Interest:" line and the date set to today. custom/notion_post.py remains the
manual fallback for one-off imports.
"""

import argparse
import json
import re
import sys
import urllib.error
import urllib.request
from datetime import date
from pathlib import Path

HOST = "https://rainbow-scorpion-b48.notion.site"
DEFAULT_DATABASE_ID = "27233a0c-36ae-8023-a9f8-ebeb4c9c1bdd"
REPO_ROOT = Path(__file__).resolve().parent.parent
POSTS_DIR = REPO_ROOT / "_posts"
BATCH = 50
UUID = re.compile(r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}")


class SyncError(Exception):
    pass


def fail(message):
    print(f"error: {message}", file=sys.stderr)
    sys.exit(1)


def warn(message):
    print(f"warning: {message}", file=sys.stderr)


def compact_id(text):
    value = text.lower()
    match = UUID.search(value) or re.search(r"[0-9a-f]{32}", value)
    if not match:
        raise SyncError("no Notion page id found in the supplied database link")
    return match.group(0).replace("-", "")


def hyphenate(compact):
    return f"{compact[:8]}-{compact[8:12]}-{compact[12:16]}-{compact[16:20]}-{compact[20:]}"


def api(endpoint, payload):
    request = urllib.request.Request(
        f"{HOST}/api/v3/{endpoint}",
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json", "User-Agent": "Mozilla/5.0"},
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            data = json.load(response)
    except (urllib.error.URLError, json.JSONDecodeError, OSError) as exc:
        raise SyncError(f"could not reach Notion ({exc})") from exc
    if isinstance(data, dict) and data.get("isNotionError"):
        detail = data.get("debugMessage") or data.get("message") or "unknown error"
        raise SyncError(f"Notion rejected the request ({detail})")
    return data


def load_record_map(page_id):
    data = api("loadPageChunk", {
        "pageId": hyphenate(compact_id(page_id)),
        "limit": 200,
        "cursor": {"stack": []},
        "chunkNumber": 0,
        "verticalColumns": False,
    })
    return data.get("recordMap", {}) or {}


def block_value(entry):
    value = entry.get("value", {}) if isinstance(entry, dict) else {}
    if isinstance(value, dict) and "value" in value:
        value = value["value"]
    return value if isinstance(value, dict) else None


def plain_text(prop):
    out = ""
    for seg in prop or []:
        if seg and isinstance(seg[0], str):
            out += seg[0]
    return out


def fetch_blocks(ids, space_id):
    blocks = {}
    for start in range(0, len(ids), BATCH):
        payload = {
            "requests": [
                {"pointer": {"table": "block", "id": row_id, "spaceId": space_id}, "version": -1}
                for row_id in ids[start:start + BATCH]
            ]
        }
        data = api("syncRecordValuesMain", payload)
        blocks.update(data.get("recordMap", {}).get("block", {}) or {})
    return blocks


def load_database(database_id):
    record_map = load_record_map(database_id)
    views = [block_value(entry) for entry in record_map.get("collection_view", {}).values()]
    views = [view for view in views if view and view.get("page_sort")]
    if not views:
        raise SyncError(
            "could not find a database view with rows; pass the published database page "
            "URL (the page that lists the notes), not a single note"
        )
    view = max(views, key=lambda item: len(item["page_sort"]))
    space_id = view.get("space_id")
    if not space_id:
        for entry in record_map.get("block", {}).values():
            if isinstance(entry, dict) and entry.get("spaceId"):
                space_id = entry["spaceId"]
                break
    if not space_id:
        raise SyncError("could not determine the Notion space id for the database")

    row_ids = list(dict.fromkeys(view["page_sort"]))
    blocks = fetch_blocks(row_ids, space_id)

    rows = []
    unreadable = 0
    for row_id in row_ids:
        value = block_value(blocks.get(row_id))
        if not value or value.get("type") != "page":
            unreadable += 1
            continue
        title = plain_text(value.get("properties", {}).get("title", [])).strip()
        if not title:
            unreadable += 1
            continue
        rows.append({"id": row_id, "title": title, "created_time": value.get("created_time") or 0})

    name = ""
    for entry in record_map.get("collection", {}).values():
        collection = block_value(entry)
        if collection and collection.get("name"):
            name = plain_text(collection["name"]).strip()
            break
    return name, rows, unreadable


def find_title(blocks):
    for entry in blocks.values():
        value = block_value(entry)
        if value and value.get("type") == "page":
            title = plain_text(value.get("properties", {}).get("title", [])).strip()
            if title:
                return title
    raise SyncError("could not find the page title")


def find_toggle_id(blocks, name):
    for entry in blocks.values():
        value = block_value(entry)
        if value and value.get("type") == "toggle":
            title = plain_text(value.get("properties", {}).get("title", [])).strip()
            if title.lower() == name.lower():
                return value.get("id")
    return None


def find_interest(blocks):
    for entry in blocks.values():
        value = block_value(entry)
        if not value:
            continue
        text = plain_text(value.get("properties", {}).get("title", []))
        match = re.match(r"^\s*interest\s*:\s*(.+)$", text, re.IGNORECASE)
        if match:
            return match.group(1).strip()
    return None


def parse_tags(interest):
    parts = [p.strip() for p in interest.split(",") if p.strip()]
    return " ".join(p.replace(" ", "-") for p in parts)


def collect_tags(blocks):
    interest = find_interest(blocks)
    if interest is None:
        intro_id = find_toggle_id(blocks, "Intro")
        if intro_id:
            interest = find_interest(load_record_map(intro_id).get("block", {}))
    if interest is None:
        return ""
    return parse_tags(interest)


def slugify(text):
    slug = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return slug[:60].strip("-")


def derive_tag(title):
    notes = re.match(r"^\s*notes on\s+(.+)$", title, re.IGNORECASE)
    if notes:
        rest = notes.group(1)
        head = re.split(r"\(", rest, maxsplit=1)[0]
        author = re.split(r"&|,|\band\b|\bet al\.?", head, maxsplit=1, flags=re.IGNORECASE)[0]
        surname = re.sub(r"[^A-Za-z]", "", author)
        years = re.findall(r"\b(?:1[89]\d{2}|20\d{2})\b", rest)
        if surname:
            return surname + (years[0] if years else ""), (None if years else "no year in the title")
    slug = slugify(title)
    if slug:
        return slug, "title does not follow the 'Notes on Author (Year)' pattern"
    raise SyncError(f"could not derive a filename from the title: {title!r}")


def post_paths(posts_dir):
    for path in sorted(posts_dir.rglob("*.md")):
        parts = path.relative_to(posts_dir).parts
        if any(part.startswith("._") for part in parts):
            continue
        yield path


def post_text(path):
    return path.read_text(encoding="utf-8", errors="replace")


def page_ids_in(text):
    return set(re.findall(r"[0-9a-f]{32}", text.lower()))


def post_title(path):
    text = post_text(path)
    match = re.search(r"^title:\s*'(.*)'\s*$", text, re.MULTILINE)
    if match:
        return match.group(1).replace("''", "'").strip()
    match = re.search(r"^title:\s*(.+?)\s*$", text, re.MULTILINE)
    if match:
        return match.group(1).strip().strip("'\"")
    return None


def load_index(posts_dir):
    ids = set()
    titles = {}
    for path in post_paths(posts_dir):
        ids |= page_ids_in(post_text(path))
        title = post_title(path)
        if title and title not in titles:
            titles[title] = path
    return ids, titles


def taken_slugs(posts_dir):
    taken = set()
    for path in post_paths(posts_dir):
        match = re.match(r"^(\d{4})-\d{2}-\d{2}-(.+)\.md$", path.name)
        if match:
            taken.add((match.group(1), match.group(2)))
    return taken


def unique_path(posts_dir, tag, datestr, taken):
    year = datestr[:4]
    if (year, tag) not in taken:
        return posts_dir / f"{datestr}-{tag}.md", tag
    for letter in "bcdefghijklmnopqrstuvwxyz":
        candidate = f"{tag}{letter}"
        if (year, candidate) not in taken:
            return posts_dir / f"{datestr}-{candidate}.md", candidate
    raise SyncError(f"too many posts already exist for {tag} in {year}")


def render_post(title, datestr, tags, iframe):
    escaped_title = title.replace("'", "''")
    return (
        "---\n"
        "layout: post\n"
        f"title: '{escaped_title}'\n"
        f"date: {datestr}\n"
        "description: \n"
        f"tags: {tags}\n"
        "categories: notes\n"
        "external: true\n"
        "---\n"
        "\n"
        f"{iframe}\n"
    )


def display(path):
    try:
        return str(path.relative_to(REPO_ROOT))
    except ValueError:
        return str(path)


def main():
    parser = argparse.ArgumentParser(description="Create posts for new rows in the Notion notes database.")
    parser.add_argument("database", nargs="?", default=DEFAULT_DATABASE_ID,
                        help="published database URL or id (defaults to the Online posts database)")
    parser.add_argument("--dry-run", action="store_true", help="list what would be created without writing")
    parser.add_argument("--posts-dir", type=Path, default=POSTS_DIR, help="directory to write posts into")
    args = parser.parse_args()

    posts_dir = args.posts_dir.expanduser().resolve()
    if not args.dry_run and not posts_dir.is_dir():
        fail(f"posts directory does not exist: {posts_dir}")

    try:
        database_id = compact_id(args.database)
        name, rows, unreadable = load_database(database_id)
    except SyncError as exc:
        fail(str(exc))

    existing_ids, existing_titles = load_index(posts_dir)
    taken = taken_slugs(posts_dir)

    already = 0
    title_skips = []
    pending = []
    for row in rows:
        if row["id"].replace("-", "") in existing_ids:
            already += 1
            continue
        if row["title"] in existing_titles:
            already += 1
            title_skips.append(row)
            continue
        pending.append(row)

    summary = f"database: {name or '(unnamed)'}\nrows: {len(rows)} readable"
    if unreadable:
        summary += f", {unreadable} unreadable (skipped)"
    summary += f"\nalready posted: {already}\nnew: {len(pending)}"
    print(summary)

    for row in title_skips:
        warn(f"skipping {row['title']!r}: a post with this title already exists "
             f"({display(existing_titles[row['title']])})")

    if not pending:
        print("nothing to do")
        return 0

    pending.sort(key=lambda row: row["created_time"])
    datestr = date.today().isoformat()
    failures = 0
    created = 0

    for row in pending:
        try:
            blocks = load_record_map(row["id"]).get("block", {})
            title = find_title(blocks)
            tags = collect_tags(blocks)
            if not tags:
                warn(f"{title!r}: no 'Interest:' line found; using empty tags")
            try:
                tag, note = derive_tag(title)
            except SyncError as exc:
                warn(f"{title!r}: {exc}")
                failures += 1
                continue
            if note:
                warn(f"{title!r}: {note}")
            path, slug = unique_path(posts_dir, tag, datestr, taken)
            iframe = (
                f'<iframe src="{HOST}/ebd//{row["id"].replace("-", "")}" '
                'width="100%" height="600" frameborder="0" allowfullscreen />'
            )
            content = render_post(title, datestr, tags, iframe)
            if not args.dry_run:
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text(content, encoding="utf-8")
            taken.add((datestr[:4], slug))
            existing_ids.add(row["id"].replace("-", ""))
            existing_titles[title] = path
            created += 1
            print(("would create " if args.dry_run else "created ") + display(path))
            print(f"  title: {title}")
            print(f"  tags:  {tags or '(none)'}")
        except SyncError as exc:
            warn(f"{row['title']!r}: {exc}")
            failures += 1

    print(f"{'planned' if args.dry_run else 'created'}: {created}, failed: {failures}")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
