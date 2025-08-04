// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-clues",
          title: "Clues",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/clues/";
          },
        },{id: "nav-posts",
          title: "Posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/posts/index.html";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-works",
          title: "Works",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/works/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-testsell",
        
          title: "TestSell",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/TestSell/";
          
        },
      },{id: "post-fermion-requires-tetrad-rovelli-vidotto-2015",
        
          title: "Fermion requires tetrad? (Rovelli, Vidotto 2015)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Rovelli2015/";
          
        },
      },{id: "post-lorentzian-quantum-cosmology-feldbrugge-lehners-turok-2017",
        
          title: "Lorentzian quantum cosmology? (Feldbrugge, Lehners, Turok 2017)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Feldbrugge2017/";
          
        },
      },{id: "post-arrow-of-time-from-quantum-boundary-conditions-hartle-2013",
        
          title: "Arrow of time from quantum boundary conditions? (Hartle 2013)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Hartle2013/";
          
        },
      },{id: "post-prediction-market-which-approach-es-will-lead-to-a-viable-theory-of-quantum-gravity",
        
          title: "Prediction market - Which approach(es) will lead to a viable theory of quantum...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/QuantumGravityMarket/";
          
        },
      },{id: "post-does-decoherence-imply-branching-wallace-2012",
        
          title: "Does decoherence imply branching? (Wallace 2012)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Wallace2012/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
