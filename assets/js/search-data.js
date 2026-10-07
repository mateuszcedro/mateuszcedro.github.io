// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-bio",
    title: "bio",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "journal articles, papers published in conference proceedings, and preprints in review",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-software",
          title: "software",
          description: "Open-source software and research code.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Conference presentations and talks.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses taught at the University of Antwerp.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-cash-or-comfort-how-llms-value-your-inconvenience",
        
          title: "Cash or Comfort? How LLMs value your inconvenience",
        
        description: "What would an AI assistant trade your comfort for? We asked six LLMs.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/cash-or-comfort/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-the-graphxain-narratives-to-explain-graph-neural-networks-article-is-accepted-at-the-3rd-world-conference-on-explainable-artificial-intelligence-conference",
          title: 'The GraphXAIN: Narratives to Explain Graph Neural Networks article is accepted at The...',
          description: "",
          section: "News",},{id: "news-the-machine-learning-based-identification-of-small-rna-signatures-in-aqueous-humor-as-a-step-toward-precision-diagnosis-of-glaucoma-article-is-accepted-for-publication-in-annals-of-medicine",
          title: 'The Machine learning-based identification of small RNA signatures in aqueous humor as a...',
          description: "",
          section: "News",},{id: "news-the-cash-or-comfort-how-llms-value-your-inconvenience-article-is-accepted-for-publication-in-the-communications-of-the-acm",
          title: 'The Cash or Comfort? How LLMs Value Your Inconvenience article is accepted for...',
          description: "",
          section: "News",},{id: "news-i-have-completed-the-technical-ai-safety-course-organized-by-bluedot-impact",
          title: 'I have completed the Technical AI Safety course organized by BlueDot Impact.',
          description: "",
          section: "News",},{id: "news-the-a-multimodal-model-of-aqueous-humor-small-rna-and-clinical-features-shows-limited-discrimination-between-primary-open-angle-and-pseudoexfoliative-glaucoma-article-is-accepted-at-scientific-reports-journal",
          title: 'The A multimodal model of aqueous humor small RNA and clinical features shows...',
          description: "",
          section: "News",},{id: "news-the-scaling-vision-models-does-not-consistently-improve-localisation-based-explanation-quality-article-is-accepted-at-scientific-reports-journal",
          title: 'The Scaling vision models does not consistently improve localisation-based explanation quality article is...',
          description: "",
          section: "News",},{id: "news-i-attended-the-machine-learning-summer-school-on-reliability-amp-amp-safety-focused-on-ai-safety-understanding-and-alignment-of-ml-models-lectures-were-conducted-by-prof-wojciech-samek-tu-berlin-hhi-jan-betley-truthful-ai-and-fazl-barez-oxford-among-others",
          title: 'I attended the Machine Learning Summer School on Reliability &amp;amp;amp; Safety focused on...',
          description: "",
          section: "News",},{id: "news-the-article-cash-or-comfort-how-llms-value-your-inconvenience-is-featured-on-the-cover-of-the-september-issue-of-communications-of-the-acm",
          title: 'The article Cash or Comfort? How LLMs Value Your Inconvenience is featured on...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%74%65%75%73%7A.%63%65%64%72%6F@%75%61%6E%74%77%65%72%70%65%6E.%62%65", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=srXiChUAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mateuszcedro", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mateusz-cedro", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/mateusz__cedro", "_blank");
        },
      },];
