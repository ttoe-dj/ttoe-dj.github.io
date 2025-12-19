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
  },{id: "nav-posts",
          title: "Posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/posts/index.html";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Drop me an email if you are interested in collaborating on any of these prjects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-works",
          title: "Works",
          description: "Recent works",
          section: "Navigation",
          handler: () => {
            window.location.href = "/works/";
          },
        },{id: "nav-clues",
          title: "Clues",
          description: "This page is under construction",
          section: "Navigation",
          handler: () => {
            window.location.href = "/clues/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-notes-on-agmon-amp-spangler-2020-a-multi-scale-approach-to-modeling-e-coli-chemotaxis",
        
          title: "Notes on Agmon &amp; Spangler (2020) “A Multi-Scale Approach to Modeling E. coli...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Agmon2020/";
          
        },
      },{id: "post-notes-on-beer-amp-williams-2015-information-processing-and-dynamics-in-minimally-cognitive-agents",
        
          title: "Notes on Beer &amp; Williams (2015) “Information processing and dynamics in minimally cognitive...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Beer2015/";
          
        },
      },{id: "post-notes-on-thompson-2025-quot-précis-of-the-blind-spot-why-science-cannot-ignore-human-experience",
        
          title: "Notes on Thompson (2025) &quot;Précis of The Blind Spot: Why Science Cannot Ignore...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Thompson2025/";
          
        },
      },{id: "post-notes-on-tegmark-2000-importance-of-quantum-decoherence-in-brain-processes",
        
          title: "Notes on Tegmark (2000) “Importance of quantum decoherence in brain processes”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Tegmark2000/";
          
        },
      },{id: "post-notes-on-squires-1987-many-views-of-one-world-an-interpretation-of-quantum-theory",
        
          title: "Notes on Squires (1987) “Many views of one world—an interpretation of quantum theory”...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Squires1987/";
          
        },
      },{id: "post-notes-on-anderson-et-al-1993-negotiating-the-tricky-border-between-quantum-and-classical",
        
          title: "Notes on Anderson et al. (1993) “Negotiating the Tricky Border Between Quantum and...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Anderson1993/";
          
        },
      },{id: "post-notes-on-zurek-1991-quot-decoherence-and-the-transition-from-quantum-to-classical",
        
          title: "Notes on Zurek (1991) &quot;Decoherence and the Transition from Quantum to Classical”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Zurek1991/";
          
        },
      },{id: "post-notes-on-page-2021-does-decoherence-make-observations-classical",
        
          title: "Notes on Page (2021) “Does Decoherence Make Observations Classical?”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Page2021/";
          
        },
      },{id: "post-zurek-at-his-best",
        
          title: "Zurek at his best",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Zurek_best/";
          
        },
      },{id: "post-notes-on-misner-thorne-amp-zurek-2009-john-wheeler-relativity-and-quantum-information",
        
          title: "Notes on Misner, Thorne &amp; Zurek (2009) “John Wheeler, relativity, and quantum information”...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Misner2009/";
          
        },
      },{id: "post-notes-on-lockwood-1996-quot-39-many-minds-39-interpretations-of-quantum-mechanics",
        
          title: "Notes on Lockwood (1996) &quot;&#39;Many Minds&#39; Interpretations of Quantum Mechanics”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Lockwood1996/";
          
        },
      },{id: "post-notes-on-evans-2025-quot-is-quantum-mechanics-merely-a-theory-for-us",
        
          title: "Notes on Evans (2025) &quot;Is Quantum Mechanics Merely a Theory for us?”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Evans2025/";
          
        },
      },{id: "post-notes-on-camilleri-2009-a-history-of-entanglement-decoherence-and-the-interpretation-problem",
        
          title: "Notes on Camilleri (2009) “A history of entanglement: Decoherence and the interpretation problem”...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Camilleri2009/";
          
        },
      },{id: "post-notes-on-albert-amp-loewer-1988-interpreting-the-many-worlds-interpretation",
        
          title: "Notes on Albert &amp; Loewer (1988) “Interpreting the many worlds interpretation”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Albert1988/";
          
        },
      },{id: "post-notes-on-loewer-1996-comment-on-lockwood",
        
          title: "Notes on Loewer (1996) “Comment on Lockwood”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Loewer1996/";
          
        },
      },{id: "post-notes-on-deutsch-1996-replies-comment-on-lockwood",
        
          title: "Notes on Deutsch (1996) “Replies: Comment on Lockwood”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Deutsch1996/";
          
        },
      },{id: "post-notes-on-brown-1996-mindful-of-quantum-possibilities",
        
          title: "Notes on Brown (1996) “Mindful of Quantum Possibilities”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Brown1996/";
          
        },
      },{id: "post-notes-on-butterfield-1996-whither-the-minds",
        
          title: "Notes on Butterfield (1996) “Whither the Minds?”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Butterfield1996/";
          
        },
      },{id: "post-notes-on-sakaguchi-1997-against-against-many-worlds-interpretations",
        
          title: "Notes on Sakaguchi (1997) “Against ‘Against Many-Worlds Interpretations’”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Sakaguchi1997/";
          
        },
      },{id: "post-notes-on-hemmo-amp-shenker-2022-the-preferred-basis-problem-in-the-many-worlds-interpretation-of-quantum-mechanics-why-decoherence-does-not-solve-it",
        
          title: "Notes on Hemmo &amp; Shenker (2022) “The preferred basis problem in the many-worlds...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Hemmo2022/";
          
        },
      },{id: "post-notes-on-beer-2000-dynamical-approaches-to-cognitive-science",
        
          title: "Notes on Beer (2000) “Dynamical approaches to cognitive science”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Beer2000/";
          
        },
      },{id: "post-notes-on-barvinsky-amp-kamenshchik-1995-preferred-basis-in-quantum-theory-and-the-problem-of-classicalization-of-the-quantum-universe",
        
          title: "Notes on Barvinsky &amp; Kamenshchik (1995) “Preferred basis in quantum theory and the...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Barvinsky1995/";
          
        },
      },{id: "post-notes-on-papineau-1996-quot-many-minds-are-no-worse-than-one-quot",
        
          title: "Notes on Papineau (1996) &quot;Many Minds are No Worse than One&quot;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Papineau1996/";
          
        },
      },{id: "post-notes-on-lockwood-2003-consciousness-and-the-quantum-world-putting-qualia-on-the-map",
        
          title: "Notes on Lockwood (2003) “Consciousness and the Quantum World: Putting Qualia on the...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Lockwood2003/";
          
        },
      },{id: "post-notes-on-hieronymi-2013-understanding-systems-science-a-visual-and-integrative-approach",
        
          title: "Notes on Hieronymi (2013) “Understanding Systems Science: A Visual and Integrative Approach”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Hieronymi2013/";
          
        },
      },{id: "post-notes-on-zeh-1981-2000-the-problem-of-conscious-observation-in-quantum-mechanical-description",
        
          title: "Notes on Zeh (1981/2000) “The Problem of Conscious Observation in Quantum Mechanical Description”...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Zeh1981/";
          
        },
      },{id: "post-notes-on-zeh-1970-quot-on-the-interpretation-of-measurement-in-quantum-theory",
        
          title: "Notes on Zeh (1970) &quot;On the Interpretation of Measurement in Quantum Theory”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Zeh1970/";
          
        },
      },{id: "post-notes-on-whitaker-2000-many-minds-and-single-mind-interpretations-of-quantum-theory",
        
          title: "Notes on Whitaker (2000) “Many Minds and Single Mind Interpretations of Quantum Theory”...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Whitaker2000/";
          
        },
      },{id: "post-notes-on-saunders-1996-comment-on-lockwood",
        
          title: "Notes on Saunders (1996) “Comment on Lockwood”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Saunders1996/";
          
        },
      },{id: "post-notes-on-barrett-2005-quot-the-preferred-basis-problem-and-the-quantum-mechanics-of-everything-section-1",
        
          title: "Notes on Barrett (2005) &quot;The Preferred-Basis Problem and the Quantum Mechanics of Everything”...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Barrett2005/";
          
        },
      },{id: "post-notes-on-kauffman-1980-systems-one-an-introduction-to-systems-thinking",
        
          title: "Notes on Kauffman (1980) “Systems One: An Introduction to Systems Thinking”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Kauffman1980/";
          
        },
      },{id: "post-notes-on-tappenden-2023-quot-a-set-theoretic-metaphysics-for-wavefunction",
        
          title: "Notes on Tappenden (2023) &quot;A Set-Theoretic Metaphysics for Wavefunction”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Tappenden2023/";
          
        },
      },{id: "post-prediction-markets",
        
          title: "Prediction Markets",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/PredictionMarkets/";
          
        },
      },{id: "post-notes-on-tappenden-2017-quot-objective-probability-and-the-mind-body-relation",
        
          title: "Notes on Tappenden (2017) &quot;Objective probability and the mind-body relation”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Tappenden2017/";
          
        },
      },{id: "post-notes-on-dawid-amp-friederich-2022-epistemic-separability-and-everettian-branches-a-critique-of-sebens-and-carroll",
        
          title: "Notes on Dawid &amp; Friederich (2022) “Epistemic Separability and Everettian Branches : A...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Dawid2022/";
          
        },
      },{id: "post-notes-on-mcqueen-amp-vaidman-2019-quot-in-defence-of-the-self-location-uncertainty-account-of-probability-in-the-many-worlds-interpretation-quot",
        
          title: "Notes on McQueen &amp; Vaidman (2019) &quot;In defence of the self-location uncertainty account...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/McQueen2019/";
          
        },
      },{id: "post-notes-on-vaidman-2025-probability-of-self-location-in-the-framework-of-the-many-worlds-interpretation",
        
          title: "Notes on Vaidman (2025) “Probability of Self-Location in the Framework of the Many-Worlds...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Vaidman2025/";
          
        },
      },{id: "post-notes-on-kent-2014-quot-does-it-make-sense-to-speak-of-self-locating-uncertainty-in-the-universal-wave-function-remarks-on-sebens-and-carroll",
        
          title: "Notes on Kent (2014) &quot;Does it Make Sense to Speak of Self-Locating Uncertainty...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Kent2014/";
          
        },
      },{id: "post-notes-on-sebens-amp-carroll-2018-self-locating-uncertainty-and-the-origin-of-probability-in-everettian-quantum-mechanics",
        
          title: "Notes on Sebens &amp; Carroll (2018) “Self-locating Uncertainty and the Origin of Probability...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Carroll2018/";
          
        },
      },{id: "post-notes-on-wallace-2010-quot-decoherence-and-ontology-or-how-i-learned-to-stop-worrying-and-love-fapp",
        
          title: "Notes on Wallace (2010) &quot;Decoherence and Ontology, or How I Learned To Stop...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Wallace2010/";
          
        },
      },{id: "post-notes-on-vaidman-1998-on-schizophrenic-experiences-of-the-neutron-or-why-we-should-believe-in-the-many-worlds-interpretation-of-quantum-theory",
        
          title: "Notes on Vaidman (1998) “On schizophrenic experiences of the neutron or why we...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Vaidman1998/";
          
        },
      },{id: "post-notes-on-page-1999-quot-can-quantum-cosmology-give-observational-consequences-of-many-worlds-quantum-theory",
        
          title: "Notes on Page (1999) &quot;Can Quantum Cosmology Give Observational Consequences of Many-Worlds Quantum...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Page2000/";
          
        },
      },{id: "post-notes-on-saunders-1993-quot-decoherence-relative-states-and-evolutionary-adaptation",
        
          title: "Notes on Saunders (1993) &quot;Decoherence, Relative States, and Evolutionary Adaptation”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Saunders1993/";
          
        },
      },{id: "post-notes-on-vaidman-2021-quot-many-worlds-interpretation-of-quantum-mechanics",
        
          title: "Notes on Vaidman (2021) &quot;Many-Worlds Interpretation of Quantum Mechanics”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Vaidman2021/";
          
        },
      },{id: "post-notes-on-sudarsky-2009-shortcomings-in-the-understanding-of-why-cosmological-perturbations-look-classical",
        
          title: "Notes on Sudarsky (2009) “Shortcomings in the Understanding of Why Cosmological Perturbations Look...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Sudarsky2009/";
          
        },
      },{id: "post-notes-on-clark-amp-toribio-1994-doing-without-representing",
        
          title: "Notes on Clark &amp; Toribio (1994) “Doing without representing?”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Clark1994/";
          
        },
      },{id: "post-faqism",
        
          title: "Faqism",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Faqism/";
          
        },
      },{id: "post-what-39-s-the-status-of-singularity-in-the-correct-theory-of-quantum-gravity-if-there-is-any",
        
          title: "What&#39;s the status of singularity in the correct theory of quantum gravity (if...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/SingularityMarket/";
          
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
      },{id: "post-which-approach-es-will-lead-to-a-viable-theory-of-quantum-gravity",
        
          title: "Which approach(es) will lead to a viable theory of quantum gravity?",
        
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
          section: "News",},{id: "product-consistency-issue-for-anisotropic-quantum-cosmology",
          title: 'Consistency issue for anisotropic quantum cosmology?',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/consistency-issue-for-anisotropic-quantum-cosmology/";
            },},{id: "product-semiclassical-singularity-is-compatible-with-quantum-singularity-avoidance",
          title: 'Semiclassical singularity is compatible with quantum singularity avoidance',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/semiclassical-singularity-is-compatible-with-quantum-singularity-avoidance/";
            },},{id: "product-quantum-gravity-and-time-order",
          title: 'Quantum gravity and time order',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/quantum-gravity-and-time-order/";
            },},{id: "product-lightcone-constraint-in-3d-simplicial-gravity-method-and-application-to-quantum-time-order",
          title: 'Lightcone constraint in 3D simplicial gravity - method and application to quantum time...',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/lightcone-constraint-in-3d-simplicial-gravity-method-and-application-to-quantum-time-order/";
            },},{id: "product-indifference-boundary-condition-for-the-universe",
          title: 'Indifference boundary condition for the universe',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/indifference-boundary-condition-for-the-universe/";
            },},{id: "product-inhomogeneous-instability-in-quantum-cosmology",
          title: 'Inhomogeneous instability in quantum cosmology?',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/inhomogeneous-instability-in-quantum-cosmology/";
            },},{id: "product-lorentzian-bouncing-quantum-cosmology-bianchi-i",
          title: 'Lorentzian bouncing quantum cosmology - Bianchi I',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/lorentzian-bouncing-quantum-cosmology-bianchi-i/";
            },},{id: "product-a-fundamental-problem-with-decoherent-histories",
          title: 'A fundamental problem with decoherent histories',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/a-fundamental-problem-with-decoherent-histories/";
            },},{id: "product-decoherence-does-not-imply-branching",
          title: 'Decoherence does not imply branching',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/decoherence-does-not-imply-branching/";
            },},{id: "product-truly-lorentzian-quantum-cosmology-ii-exact-formula-and-effective-geometries",
          title: 'Truly Lorentzian quantum cosmology. II. Exact formula and effective geometries',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/truly-lorentzian-quantum-cosmology-ii-exact-formula-and-effective-geometries/";
            },},{id: "product-truly-lorentzian-quantum-cosmology-iii-scalar-field-coupling",
          title: 'Truly Lorentzian quantum cosmology. III. Scalar field coupling',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/truly-lorentzian-quantum-cosmology-iii-scalar-field-coupling/";
            },},{id: "product-physics-experience-life-ii-quantum-toy-models-of-life",
          title: 'Physics, Experience, Life. II. Quantum toy models of life',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/physics-experience-life-ii-quantum-toy-models-of-life/";
            },},{id: "product-physics-experience-life-iii-arrow-of-time",
          title: 'Physics, Experience, Life. III. Arrow of time',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/physics-experience-life-iii-arrow-of-time/";
            },},{id: "product-truly-lorentzian-quantum-cosmology-iv-kantowski-sachs",
          title: 'Truly Lorentzian quantum cosmology. IV. Kantowski-Sachs',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/truly-lorentzian-quantum-cosmology-iv-kantowski-sachs/";
            },},{id: "product-experience-and-temporality-in-quantum-physics",
          title: 'Experience and temporality in quantum physics',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/experience-and-temporality-in-quantum-physics/";
            },},{id: "product-bullshit-in-physics-everett-1957",
          title: 'Bullshit in physics - Everett 1957',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/bullshit-in-physics-everett-1957/";
            },},{id: "product-nonsmooth-mechanics-for-cosmology-biaxial-bianchi-ix",
          title: 'Nonsmooth mechanics for cosmology - Biaxial Bianchi IX',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/nonsmooth-mechanics-for-cosmology-biaxial-bianchi-ix/";
            },},{id: "product-who-s-afraid-of-singularity",
          title: 'Who’s afraid of singularity?',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/whos-afraid-of-singularity/";
            },},{id: "product-nonsmooth-mechanics-for-general-relativity",
          title: 'Nonsmooth mechanics for general relativity',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/nonsmooth-mechanics-for-general-relativity/";
            },},{id: "product-who-s-afraid-of-infinite-action",
          title: 'Who’s afraid of infinite action?',
          description: "",
          section: "Product",handler: () => {
              window.location.href = "/product/whos-afraid-of-infinite-action/";
            },},{id: "projects-arrow-of-time",
          title: 'Arrow of time',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/arrow-time/";
            },},{id: "projects-boundary-condition",
          title: 'Boundary condition',
          description: "This page is under construction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/boundary-condition/";
            },},{id: "projects-refreshing-quantum-foundations",
          title: 'Refreshing quantum foundations',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/foundations/";
            },},{id: "projects-time-amp-history",
          title: 'Time &amp;amp; history',
          description: "This page is under construction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/history/";
            },},{id: "projects-lorentzian-quantum-gravity",
          title: 'Lorentzian quantum gravity',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lorentzian/";
            },},{id: "projects-nonsmooth-gravity",
          title: 'Nonsmooth gravity',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nonsmooth/";
            },},{id: "projects-modeling-observers",
          title: 'Modeling observers',
          description: "This page is under construction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/observers/";
            },},{id: "projects-foundation-of-path-integrals",
          title: 'Foundation of path integrals',
          description: "This page is under construction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/path%20integral/";
            },},{id: "projects-physics-experience-life",
          title: 'Physics - Experience - Life',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pel/";
            },},{id: "projects-singularity",
          title: 'Singularity',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/singularity/";
            },},{id: "projects-what-are-physical-systems",
          title: 'What are physical systems?',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/system/";
            },},{id: "works-consistency-issue-for-anisotropic-quantum-cosmology",
          title: 'Consistency issue for anisotropic quantum cosmology?',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/consistency-issue-for-anisotropic-quantum-cosmology/";
            },},{id: "works-semiclassical-singularity-is-compatible-with-quantum-singularity-avoidance",
          title: 'Semiclassical singularity is compatible with quantum singularity avoidance',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/semiclassical-singularity-is-compatible-with-quantum-singularity-avoidance/";
            },},{id: "works-quantum-gravity-and-time-order",
          title: 'Quantum gravity and time order',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/quantum-gravity-and-time-order/";
            },},{id: "works-lightcone-constraint-in-3d-simplicial-gravity-method-and-application-to-quantum-time-order",
          title: 'Lightcone constraint in 3D simplicial gravity - method and application to quantum time...',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/lightcone-constraint-in-3d-simplicial-gravity-method-and-application-to-quantum-time-order/";
            },},{id: "works-indifference-boundary-condition-for-the-universe",
          title: 'Indifference boundary condition for the universe',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/indifference-boundary-condition-for-the-universe/";
            },},{id: "works-inhomogeneous-instability-in-quantum-cosmology",
          title: 'Inhomogeneous instability in quantum cosmology?',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/inhomogeneous-instability-in-quantum-cosmology/";
            },},{id: "works-lorentzian-bouncing-quantum-cosmology-bianchi-i",
          title: 'Lorentzian bouncing quantum cosmology - Bianchi I',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/lorentzian-bouncing-quantum-cosmology-bianchi-i/";
            },},{id: "works-a-fundamental-problem-with-decoherent-histories",
          title: 'A fundamental problem with decoherent histories',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/a-fundamental-problem-with-decoherent-histories/";
            },},{id: "works-decoherence-does-not-imply-branching",
          title: 'Decoherence does not imply branching',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/decoherence-does-not-imply-branching/";
            },},{id: "works-truly-lorentzian-quantum-cosmology-ii-exact-formula-and-effective-geometries",
          title: 'Truly Lorentzian quantum cosmology. II. Exact formula and effective geometries',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/truly-lorentzian-quantum-cosmology-ii-exact-formula-and-effective-geometries/";
            },},{id: "works-truly-lorentzian-quantum-cosmology-iii-scalar-field-coupling",
          title: 'Truly Lorentzian quantum cosmology. III. Scalar field coupling',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/truly-lorentzian-quantum-cosmology-iii-scalar-field-coupling/";
            },},{id: "works-physics-experience-life-ii-quantum-toy-models-of-life",
          title: 'Physics, Experience, Life. II. Quantum toy models of life',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/physics-experience-life-ii-quantum-toy-models-of-life/";
            },},{id: "works-physics-experience-life-iii-arrow-of-time",
          title: 'Physics, Experience, Life. III. Arrow of time',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/physics-experience-life-iii-arrow-of-time/";
            },},{id: "works-truly-lorentzian-quantum-cosmology-iv-kantowski-sachs",
          title: 'Truly Lorentzian quantum cosmology. IV. Kantowski-Sachs',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/truly-lorentzian-quantum-cosmology-iv-kantowski-sachs/";
            },},{id: "works-experience-and-temporality-in-quantum-physics",
          title: 'Experience and temporality in quantum physics',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/experience-and-temporality-in-quantum-physics/";
            },},{id: "works-bullshit-in-physics-everett-1957",
          title: 'Bullshit in physics - Everett 1957',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/bullshit-in-physics-everett-1957/";
            },},{id: "works-nonsmooth-mechanics-for-cosmology-biaxial-bianchi-ix",
          title: 'Nonsmooth mechanics for cosmology - Biaxial Bianchi IX',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/nonsmooth-mechanics-for-cosmology-biaxial-bianchi-ix/";
            },},{id: "works-who-s-afraid-of-singularity",
          title: 'Who’s afraid of singularity?',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/whos-afraid-of-singularity/";
            },},{id: "works-nonsmooth-mechanics-for-general-relativity",
          title: 'Nonsmooth mechanics for general relativity',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/nonsmooth-mechanics-for-general-relativity/";
            },},{id: "works-who-s-afraid-of-infinite-action",
          title: 'Who’s afraid of infinite action?',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/whos-afraid-of-infinite-action/";
            },},{id: "works-living-in-a-quantum-universe",
          title: 'Living in a quantum universe',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/living-in-a-quantum-universe/";
            },},{id: "works-on-quantum-self-location",
          title: 'On quantum self-location',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/on-quantum-self-location/";
            },},{id: "works-what-are-physical-systems",
          title: 'What are physical systems?',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/what-are-physical-systems/";
            },},{id: "works-against-quantum-mereology",
          title: 'Against quantum mereology',
          description: "",
          section: "Works",handler: () => {
              window.location.href = "/works/against-quantum-mereology/";
            },},{
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
