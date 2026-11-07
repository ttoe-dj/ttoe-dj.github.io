#!/usr/bin/env python3
"""Create a Jekyll post in _posts/ from a Notion iframe embed.

Usage:
    python3 custom/notion_post.py '<iframe src="https://.../notion.site/ebd//<id>" ... />'
    python3 custom/notion_post.py --force '<iframe ...>'   # override duplicate checks

Title comes from the Notion page; tags come from the "Interest:" line inside
the page's "Intro" toggle; the date is today's local date. A post is refused
when its Notion page id or its exact title already appears in _posts/.
"""

import json
import re
import sys
import urllib.error
import urllib.request
from datetime import date
from pathlib import Path

API = "https://rainbow-scorpion-b48.notion.site/api/v3/loadPageChunk"
POSTS_DIR = Path(__file__).resolve().parent.parent / "_posts"


def fail(message):
    print(f"error: {message}", file=sys.stderr)
    sys.exit(1)


def extract_page_id(text):
    match = re.search(r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", text.lower())
    if not match:
        match = re.search(r"[0-9a-f]{32}", text.lower())
    if not match:
        fail("no Notion page id found in the supplied link")
    compact = match.group(0).replace("-", "")
    return f"{compact[:8]}-{compact[8:12]}-{compact[12:16]}-{compact[16:20]}-{compact[20:]}"


def load_chunk(page_id):
    body = json.dumps({
        "pageId": page_id,
        "limit": 200,
        "cursor": {"stack": []},
        "chunkNumber": 0,
        "verticalColumns": False,
    }).encode()
    request = urllib.request.Request(
        API,
        data=body,
        headers={"Content-Type": "application/json", "User-Agent": "Mozilla/5.0"},
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            data = json.load(response)
    except (urllib.error.URLError, json.JSONDecodeError, OSError) as exc:
        fail(f"could not fetch page from Notion ({exc})")
    return data.get("recordMap", {}).get("block", {})


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


def find_title(blocks):
    for entry in blocks.values():
        value = block_value(entry)
        if value and value.get("type") == "page":
            title = plain_text(value.get("properties", {}).get("title", [])).strip()
            if title:
                return title
    fail("could not find the page title")


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


def derive_tag(title):
    match = re.match(r"^\s*notes on\s+(.+?)\s*\((\d{4})\)", title, re.IGNORECASE)
    if not match:
        fail(f"could not derive a filename from the title: {title!r}")
    author = re.split(r"&|,|\band\b|\bet al\.?", match.group(1), maxsplit=1, flags=re.IGNORECASE)[0]
    surname = re.sub(r"[^A-Za-z]", "", author)
    if not surname:
        fail(f"could not derive a filename from the title: {title!r}")
    return f"{surname}{match.group(2)}"


def post_paths():
    for path in sorted(POSTS_DIR.rglob("*.md")):
        parts = path.relative_to(POSTS_DIR).parts
        if any(part.startswith("._") for part in parts):
            continue
        yield path


def post_text(path):
    return path.read_text(encoding="utf-8", errors="replace")


def page_ids_in(text):
    return set(re.findall(r"[0-9a-f]{32}", text.lower()))


def find_page_id_posts(page_id):
    compact = page_id.replace("-", "").lower()
    return [path for path in post_paths() if compact in page_ids_in(post_text(path))]


def post_title(path):
    text = post_text(path)
    match = re.search(r"^title:\s*'(.*)'\s*$", text, re.MULTILINE)
    if match:
        return match.group(1).replace("''", "'").strip()
    match = re.search(r"^title:\s*(.+?)\s*$", text, re.MULTILINE)
    if match:
        return match.group(1).strip().strip("'\"")
    return None


def find_title_posts(title):
    return [path for path in post_paths() if post_title(path) == title]


def existing_slugs_by_year():
    taken = set()
    for path in post_paths():
        match = re.match(r"^(\d{4})-\d{2}-\d{2}-(.+)\.md$", path.name)
        if match:
            taken.add((match.group(1), match.group(2)))
    return taken


def unique_path(tag, datestr):
    year = datestr[:4]
    taken = existing_slugs_by_year()
    if (year, tag) not in taken:
        return POSTS_DIR / f"{datestr}-{tag}.md"
    for letter in "bcdefghijklmnopqrstuvwxyz":
        candidate = f"{tag}{letter}"
        if (year, candidate) not in taken:
            return POSTS_DIR / f"{datestr}-{candidate}.md"
    fail(f"too many posts already exist for {tag} in {year}")


def describe(paths):
    return "\n  ".join(str(path.relative_to(POSTS_DIR.parent)) for path in paths)


def main():
    arguments = [arg for arg in sys.argv[1:] if arg != "--force"]
    force = "--force" in sys.argv[1:]
    if len(arguments) != 1:
        fail("expected one argument: the Notion <iframe ...> or its URL (add --force to override duplicate checks)")

    iframe = arguments[0].strip()
    page_id = extract_page_id(iframe)

    if not force:
        duplicates = find_page_id_posts(page_id)
        if duplicates:
            fail(
                "this Notion page is already used by:\n  "
                + describe(duplicates)
                + "\n(use --force to create a post anyway)"
            )

    blocks = load_chunk(page_id)
    title = find_title(blocks)

    if not force:
        duplicates = find_title_posts(title)
        if duplicates:
            fail(
                "a post with the same title already exists:\n  "
                + describe(duplicates)
                + "\n(use --force to create a post anyway)"
            )

    interest = find_interest(blocks)
    if interest is None:
        intro_id = find_toggle_id(blocks, "Intro")
        if intro_id:
            interest = find_interest(load_chunk(intro_id))
    if interest is None:
        print("warning: no 'Interest:' line found; using empty tags", file=sys.stderr)
        tags = ""
    else:
        tags = parse_tags(interest)

    tag = derive_tag(title)
    datestr = date.today().isoformat()
    path = unique_path(tag, datestr)

    escaped_title = title.replace("'", "''")
    content = (
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
    path.write_text(content, encoding="utf-8")

    print(f"created {path.relative_to(POSTS_DIR.parent)}")
    print(f"title: {title}")
    print(f"tags:  {tags or '(none)'}")


if __name__ == "__main__":
    main()
