import type { Messages } from "@/lib/i18n/types";

export const enMessages: Messages = {
  metadata: {
    siteTitle: "Hasegawa Laboratory",
    siteDescription: "Laboratory homepage with research, publications, members, and admin-managed updates."
  },
  header: {
    brandTitle: "Hasegawa Laboratory",
    brandSubtitle: "Building Ubiquitous Intelligence.",
    mainNavAria: "Main Navigation",
    languageLabel: "Language",
    languages: {
      en: "EN",
      ja: "日本語",
      zh: "中文"
    },
    nav: {
      home: "Home",
      research: "Research",
      news: "News",
      blogs: "Blogs",
      publications: "Publications",
      members: "Members",
      joinUs: "Join Us",
      business: "Business",
      contact: "Contact"
    }
  },
  footer: {
    copyright: "Hasegawa Laboratory, University of Fukui."
  },
  notFound: {
    title: "Page not found",
    description: "The requested page does not exist.",
    cta: "Return to homepage"
  },
  home: {
    badge: "Hasegawa Laboratory",
    title: "Bridging Ubiquity and Intelligence",
    intro:
      "Our mission is to create intelligent systems that connect people, devices, and knowledge through mobile sensing and deep learning.",
    primaryCta: "Apply to Join Us",
    secondaryCta: "Explore Research",
    aboutTitle: "About",
    aboutBody:
      "HaseLab conducts research centered on ubiquitous artificial intelligence. We explore how to leverage the capabilities of foundation models, develop new generations of neural architectures, and deepen our understanding of the mechanisms underlying neural networks.",
    aboutCta: "See research domains",
    latestNewsTitle: "Latest News",
    noNewsTitle: "No news yet",
    noNewsBody: "News items will appear here after you add them from the admin dashboard.",
    viewAllNews: "View all news",
    latestProjectTitle: "Latest Project",
    featuredPublicationsTitle: "Featured Publications",
    viewAllPublications: "View all publications",
    visitProject: "Visit project page",
    noProject: "Add a project from the admin panel to highlight it here.",
    contactTitle: "Contact",
    quickInquiryTitle: "Quick Inquiry",
    quickInquiryBody: "Tell us your background, research interests, and preferred start timing. We usually respond within a few business days.",
    generalInfoTitle: "General Information",
    viewContactDetails: "View full contact details",
    sendEmailCta: "Email us now",
    labels: {
      email: "Email",
      address: "Address"
    }
  },
  research: {
    title: "Research",
    subtitle:
      "What we work on, what outcomes we produce, and where new students can contribute.",
    vision: {
      missionTitle: "Research Vision",
      missionStatement:
        "We build ubiquitous intelligence systems that are scientifically rigorous, practically deployable, and human-centered.",
      focusQuestionsTitle: "Current Focus Questions",
      focusQuestions: [
        "What data is missing for achieving artificial general intelligence?",
        "How can task-specific models be built from foundation models?",
        "Can an ensemble of small models rival a single large model?",
        "What kind of world models do foundation models acquire?",
        "How can highly reliable discriminative models be constructed?"
      ],
      imageAlt: "Students discussing experiment results in front of a dashboard",
      imageCaption:
        "A typical research cycle in our lab: problem framing, iterative experimentation, and weekly evidence-based reviews."
    },
    themesTitle: "Research Themes",
    themes: [
      {
        title: "Human Activity Recognition",
        description:
          "Recognising human activities with wearable sensors, deep learning-based signal processing, and rigorous time-series modelling.",
        whyItMatters:
          "Collecting and understanding human activities are essential for advancing healthcare monitoring, rehabilitation, sports performance analysis, and ambient assisted living.",
        methods: "Deep learning on time-series data, Time-series modelling, Wearable sensor fusion and signal preprocessing",
        outputs:
          "Establishing novel methods that transfer across domains, Constructing comprehensive benchmarks for human activity recognition, Published more than 30 peer-reviewed papers on this topic",
        imageSrc: "/assets/banners/har_banner.png",
        imageAlt: "Human Activity Recognition research banner",
        imagePosition: "left"
      },
      {
        title: "Ensemble Learning",
        description:
          "Exploring the potential of intelligent information processing through collections of small-scale models, rather than a single large-scale model.",
        whyItMatters:
          "Today's intelligent information processing driven by a single large-scale model is far removed from the process by which humans acquire collective intelligence.",
        methods: "Deep Ensemble Learning, Collaborative learning, Multi-agent Systems",
        outputs:
          "Establishing dynamic equilibrium learning in deep ensemble learning, Accelerating parallel learning in deep ensemble learning, Published more than 10 peer-reviewed papers on this topic",
        imageSrc: "/assets/banners/ensemble_banner.png",
        imageAlt: "Ensemble Learning research banner"
      },
      {
        title: "Visual Understanding",
        description: "Understanding what is happening in images and videos in the same way humans do.",
        whyItMatters:
          "It serves as a foundational technology to replace humans across diverse industrial settings, including autonomous driving and robotics.",
        methods: "Fine-grained visual recognition, Visual representation learning, Visual anomaly detection",
        outputs:
          "Achieving state-of-the-art performance in animal species classification and fine-grained categorisation, Establishing a mechanism for acquiring useful visual representations based on self-supervised learning, Published more than 20 peer-reviewed papers",
        imageSrc: "/assets/banners/visual_banner.png",
        imageAlt: "Visual Understanding research banner"
      },
      {
        title: "Foundation Models",
        description:
          "Analysing the internal mechanisms of large-scale models capable of handling diverse tasks, and leveraging those insights in practice.",
        whyItMatters:
          "Deep neural networks can adapt to a wide range of tasks through scaling, and clarifying why such adaptation occurs would contribute to the development of safer models and task-specific architectures.",
        methods: "Mechanistic interpretability, Vision language models, Large generative models",
        outputs:
          "Establishing methods for generating high-quality training data using generative models, Analysing the safety and deceptive behaviour of language models, Published more than 5 high-quality peer-reviewed papers",
        imageSrc: "/assets/banners/foundation_banner.png",
        imageAlt: "Foundation Models research banner",
        imagePosition: "left"
      }
    ],
    themeLabels: {
      whyItMatters: "Why it matters",
      methods: "Methods and tools",
      outputs: "Research contributions",
      imagePlaceholder: "Image"
    },
    projectLabels: {
      problem: "Problem",
      approach: "Approach",
      status: "Status"
    },
    projectsTitle: "Active Projects",
    projects: [
      {
        title: "Adaptive Learning from Noisy Mobile Sensing",
        problem: "Mobile sensing data quality shifts across users, devices, and contexts.",
        approach: "Train robust feature extractors with confidence-aware data selection and online recalibration.",
        status: "Running",
        paperUrl: "/publications",
        codeUrl: "https://github.com",
        demoUrl: "/blogs"
      },
      {
        title: "Safe Decision Optimization for Dynamic Environments",
        problem: "Policies can fail when constraints and operating conditions change unexpectedly.",
        approach: "Combine predictive planning with constraint-aware optimization and stress-test simulations.",
        status: "Running",
        paperUrl: "/publications",
        demoUrl: "/news"
      },
      {
        title: "Explainable AI Co-Pilot for Domain Experts",
        problem: "Experts need actionable explanations, not only model scores.",
        approach: "Build an interactive explanation interface with iterative feedback loops and error analysis.",
        status: "Published",
        paperUrl: "/publications",
        demoUrl: "/blogs"
      },
      {
        title: "Resilient Edge-Cloud Infrastructure for Ubiquitous AI",
        problem: "Inference pipelines degrade under network disruption and partial hardware failures.",
        approach: "Design fallback scheduling and service recovery strategies validated on a digital-twin testbed.",
        status: "Idea",
        demoUrl: "/news"
      }
    ],
    projectLinks: {
      paper: "Paper",
      code: "Code",
      demo: "Demo"
    },
    outcomesTitle: "Results and Impact",
    outcomesSubtitle: "Representative outcomes from publication, deployment, and collaboration activities.",
    outcomes: [
      {
        title: "Top Publications",
        description: "Recent peer-reviewed papers in machine learning, optimization, and ubiquitous systems."
      },
      {
        title: "Awards and Recognition",
        description: "Student paper awards, competitive grants, and invited talks with international partners."
      },
      {
        title: "Deployments and Collaborations",
        description: "Joint projects with academic and industry collaborators targeting real-world operations."
      }
    ],
    byNumbersTitle: "By the Numbers",
    byNumbers: [
      {
        value: "12+",
        label: "papers in the last year"
      },
      {
        value: "6",
        label: "active collaborative projects"
      },
      {
        value: "4",
        label: "open-source research repositories"
      },
      {
        value: "15+",
        label: "student theses supervised"
      }
    ],
    joinByTopicTitle: "How Students Can Join by Topic",
    joinByTopic: [
      {
        theme: "Machine Learning & Data Intelligence",
        skillsTitle: "Helpful skills",
        skills: ["Python", "PyTorch", "data preprocessing", "experiment tracking"],
        firstProjectTitle: "Good first project",
        firstProjectIdea: "Reproduce a baseline model, then improve robustness under synthetic sensor noise.",
        weeklyWorkflowTitle: "Typical weekly workflow",
        weeklyWorkflow: ["paper reading", "coding", "experiment runs", "weekly review meeting"]
      },
      {
        theme: "Optimization & Decision Systems",
        skillsTitle: "Helpful skills",
        skills: ["linear algebra", "optimization", "simulation", "algorithm design"],
        firstProjectTitle: "Good first project",
        firstProjectIdea: "Implement a constrained planning baseline and compare performance under disturbances.",
        weeklyWorkflowTitle: "Typical weekly workflow",
        weeklyWorkflow: ["problem modeling", "solver implementation", "ablation studies", "result discussion"]
      },
      {
        theme: "Human-Centered AI",
        skillsTitle: "Helpful skills",
        skills: ["HCI basics", "explainable AI", "frontend prototyping", "user study design"],
        firstProjectTitle: "Good first project",
        firstProjectIdea: "Prototype an explanation panel for one model and evaluate it with a small user study.",
        weeklyWorkflowTitle: "Typical weekly workflow",
        weeklyWorkflow: ["interface iteration", "user feedback collection", "analysis", "team critique"]
      },
      {
        theme: "Cyber-Physical Infrastructure",
        skillsTitle: "Helpful skills",
        skills: ["distributed systems", "container ops", "sensor integration", "monitoring"],
        firstProjectTitle: "Good first project",
        firstProjectIdea: "Build a fault-injection script and measure end-to-end recovery behavior.",
        weeklyWorkflowTitle: "Typical weekly workflow",
        weeklyWorkflow: ["system implementation", "integration tests", "failure drills", "design review"]
      }
    ],
    processTitle: "Research Process and Culture",
    process: [
      {
        title: "Topic Selection",
        description: "We start from concrete problems, survey related work, and define measurable milestones."
      },
      {
        title: "Mentoring Cadence",
        description: "Students receive weekly one-on-one or small-group feedback to maintain steady progress."
      },
      {
        title: "Publication Pipeline",
        description: "We run internal checkpoints from experiment design to writing, revision, and submission."
      },
      {
        title: "Collaboration Style",
        description: "Pair reviews, transparent experiment logs, and reproducibility are standard expectations."
      }
    ],
    faqTitle: "Research FAQ",
    faqs: [
      {
        question: "Do I need prior publications before joining a topic?",
        answer:
          "No. We prioritize curiosity, consistency, and willingness to learn over an existing publication record."
      },
      {
        question: "What language is used for research meetings?",
        answer:
          "We use both Japanese and English depending on participants, and we support international members."
      },
      {
        question: "How long does it take to start producing results?",
        answer: "Most students complete onboarding and begin reproducible experiments within the first semester."
      },
      {
        question: "Can I work across multiple themes?",
        answer:
          "Yes. Cross-theme projects are encouraged when there is a clear research question and scoped milestones."
      }
    ],
    ctaTitle: "Next Steps",
    ctas: {
      publications: "See Publications",
      joinUs: "Join Us",
      contact: "Contact for Research Discussion"
    }
  },
  publications: {
    title: "Publications",
    subtitle: "A continuously updated list of papers, journal articles, and conference publications.",
    noItemsTitle: "No publications yet",
    noItemsBody: "Add publication entries from the admin dashboard.",
    linkLabel: "Publication link",
    teaserAltSuffix: "teaser",
    searchLabel: "Search",
    searchPlaceholder: "Search by title, authors, venue, or abstract",
    yearFilterLabel: "Year",
    venueFilterLabel: "Venue",
    allYears: "All years",
    allVenues: "All venues",
    sortLabel: "Sort",
    sortNewest: "Newest first",
    sortOldest: "Oldest first",
    sortTitleAsc: "Title A-Z",
    sortTitleDesc: "Title Z-A",
    pageLabel: "Publication pagination",
    previousPage: "Previous",
    nextPage: "Next",
    pageSummary: "Showing {from}-{to} of {total} publications",
    noResultsTitle: "No matching publications",
    noResultsBody: "Try changing your search keyword or filters.",
    clearFilters: "Clear search and filters",
    paperAriaLabel: "Paper",
    projectAriaLabel: "Project page",
    codeAriaLabel: "Code"
  },
  members: {
    title: "Members",
    subtitle:
      "Our team includes faculty, researchers, and students working across data-driven science and engineering.",
    noItemsTitle: "No members yet",
    noItemsBody: "Add member profiles from the admin dashboard.",
    researchTopicLabel: "Research Topic",
    personalPage: "Personal page",
    photoAltSuffix: "photo"
  },
  joinUs: {
    title: "Join Us",
    subtitle: "Build impactful research with a team that values rigor, openness, and curiosity.",
    hero: {
      headline: "Grow your research in a collaborative lab culture.",
      pitch:
        "At HaseLab, you will work on real problems, receive hands-on mentoring, and publish with a team that supports each member's long-term growth.",
      highlights: [
        "Close advising and regular research feedback loops",
        "Opportunities to publish and present at top venues",
        "An international and interdisciplinary team environment"
      ],
      primaryCta: "Start Your Application",
      secondaryCta: "Contact the Lab"
    },
    openPositionsTitle: "Open Positions",
    openPositions: [
      {
        role: "PhD / MSc Research Students",
        requirementLabel: "Requirements",
        requirements: [
          "Strong interest in machine learning, optimization, or ubiquitous AI",
          "Ability to read and discuss technical papers in English",
          "Programming experience (Python or similar)"
        ]
      },
      {
        role: "Research Interns (Undergraduate / External)",
        requirementLabel: "Requirements",
        requirements: [
          "Basic coding and data analysis skills",
          "Commitment of at least one academic term or summer period",
          "Interest in implementing and validating research ideas"
        ]
      },
      {
        role: "Visiting Researchers / Collaborators",
        requirementLabel: "Requirements",
        requirements: [
          "Clear research alignment with our ongoing topics",
          "Defined collaboration goal and timeline",
          "Institutional support for the visit period"
        ]
      }
    ],
    whatWeLookForTitle: "What We Look For",
    whatWeLookFor: [
      {
        category: "Skills",
        points: [
          "Foundational understanding of statistics, machine learning, or optimization",
          "Practical coding and experiment reproducibility habits",
          "Clear written and spoken communication"
        ]
      },
      {
        category: "Mindset",
        points: [
          "Curiosity to ask deep questions and iterate",
          "Ownership from idea to implementation and reporting",
          "Respectful collaboration and constructive feedback"
        ]
      },
      {
        category: "Background",
        points: [
          "Engineering, CS, data science, applied math, or related fields",
          "Prior projects, thesis, or research experience is a plus",
          "Motivation matters as much as your current level"
        ]
      }
    ],
    howToApplyTitle: "How To Apply",
    applySteps: [
      "Submit the application form from the button below.",
      "We will review the application and send a notification whether you are qualified.",
      "If you have been qualified, we will send an email with a more detailed procedure based on your context."
    ],
    contactCta: "Submit Application Form",
    faqTitle: "FAQ",
    faqs: [
      {
        question: "What kind of research topics can I work on in this lab?",
        description:
          "We cover a wide range of research from theory to application in artificial intelligence and human-machine interaction. We can accommodate pretty much anything, so if you have a topic in mind, feel free to consult with a senior student or Hasegawa first."
      },
      {
        question: "Are there any required skills or knowledge (programming, math, etc.) before joining the lab?",
        description:
          "Nothing in particular is required, but having basic coding ability and mathematical knowledge (linear algebra, calculus, vectors, and probability/statistics) will make things much easier after you join, as these are foundational for studying deep learning."
      },
      {
        question: "What does a typical day or lifestyle in the lab look like?",
        description:
          "There is basically no core time, so everyone comes in and does their research at whatever time works for them. It's pretty flexible. For more details, please see:",
        links: [{ label: "see these infos (Student Schedules)", href: "https://example.com" }]
      },
      {
        question: "What is the supervision style like? (Strict, flexible, meeting frequency, etc.)",
        description:
          "We value student independence, while also holding weekly one-on-one meetings to make sure students don't get stuck."
      },
      {
        question: "What is the lab atmosphere and dynamic like among members?",
        description:
          "We have casual drinking parties in the lab from time to time, and people chat during breaks. It's a relaxed and easygoing environment."
      },
      {
        question: "What are the typical career paths after graduation? (Employment, further study, etc.)",
        description:
          "The ratio is roughly 20% employment to 80% further study. Among students who complete a master's degree, some go on to join major companies such as CyberAgent, Hitachi, and Nomura Research Institute. For more details, please see:",
        links: [{ label: "see these infos (Career Paths of Lab Alumni)", href: "https://example.com" }]
      },
      {
        question: "How is the research topic decided? (Can I choose it myself, or is it assigned?)",
        description:
          "We prioritize each student's own interests and initiative. If you can't think of a topic, we can suggest one for you."
      },
      {
        question: "How many opportunities are there to write papers or present at conferences?",
        description:
          "It varies depending on each student's preferences, but undergraduate students typically present at one domestic conference per year, while graduate students often present at international conferences about twice a year. Paper writing follows a similar pattern."
      },
      {
        question: "Are there any activities outside of research? (Events, collaborative research, industry partnerships, etc.)",
        description:
          "We regularly hold BBQs, drinking parties, and retreats. We also engage in joint research and partnerships with companies."
      },
      {
        question:
          "Is there a core time or mandatory hours? Is it possible to balance lab work with a part-time job?",
        description:
          "There is no core time or mandatory hours. Balancing with a part-time job is absolutely possible."
      }
    ],
    testimonialsTitle: "Testimonials",
    testimonials: [
      {
        quote:
          "The lab gave me both freedom and structure. Weekly feedback helped me turn rough ideas into a conference paper.",
        name: "MSc Graduate",
        background: "Now PhD student in AI"
      },
      {
        quote:
          "As an intern, I was trusted with real experiments from day one. The team culture made it easy to ask questions.",
        name: "Research Intern",
        background: "Undergraduate in Computer Science"
      },
      {
        quote:
          "Our collaboration moved quickly because discussions were concrete and technical depth was always present.",
        name: "Visiting Researcher",
        background: "Partner university faculty"
      }
    ]
  },
  business: {
    title: "Business",
    subtitle: "Industry and social collaborations are central to how we create real-world impact from research.",
    items: [
      {
        title: "Joint Research",
        description:
          "We collaborate with industry and public organizations to solve practical, data-intensive challenges."
      },
      {
        title: "Technical Consulting",
        description:
          "Our lab provides expertise in machine learning strategy, model deployment, and optimization workflows."
      },
      {
        title: "Student-Industry Projects",
        description:
          "We organize project-based collaborations that connect academic research with product and operational needs."
      }
    ]
  },
  contact: {
    title: "Contact",
    subtitle: "We welcome research, education, and industry inquiries.",
    generalInfoTitle: "General Information",
    inquiryGuideTitle: "Inquiry Guide",
    studentGuide: "For student applications, include your CV, research interests, and expected start period.",
    businessGuide:
      "For business collaboration, include your project background, timeline, and expected outcomes.",
    labels: {
      email: "Email",
      address: "Address"
    }
  },
  blogs: {
    title: "Blogs",
    subtitle: "Articles are written in Markdown and automatically rendered into the website.",
    noItemsTitle: "No blog posts yet",
    noItemsBody: "Create your first post from the admin dashboard.",
    readArticle: "Read article",
    publishedPrefix: "Published"
  },
  news: {
    title: "News",
    subtitle: "Recent activities, announcements, and updates from our laboratory.",
    noItemsTitle: "No news yet",
    noItemsBody: "Create your first news item from the admin dashboard.",
    visitExternal: "Visit external page",
    moreDetails: "More details",
    searchLabel: "Search",
    searchPlaceholder: "Search by title, content, type, or highlight",
    typeFilterLabel: "Type",
    allTypes: "All types",
    sortLabel: "Sort",
    sortNewest: "Newest first",
    sortOldest: "Oldest first",
    sortTitleAsc: "Title A-Z",
    sortTitleDesc: "Title Z-A",
    pageLabel: "News pagination",
    previousPage: "Previous",
    nextPage: "Next",
    pageSummary: "Showing {from}-{to} of {total} news",
    noResultsTitle: "No matching news",
    noResultsBody: "Try changing your search keyword or filters.",
    clearFilters: "Clear search and filters"
  }
};
