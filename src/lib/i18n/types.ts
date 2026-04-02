export type Locale = "en" | "ja";

export type Messages = {
  metadata: {
    siteTitle: string;
    siteDescription: string;
  };
  header: {
    brandTitle: string;
    brandSubtitle: string;
    mainNavAria: string;
    languageLabel: string;
    languages: Record<Locale, string>;
    nav: {
      home: string;
      research: string;
      news: string;
      blogs: string;
      publications: string;
      members: string;
      joinUs: string;
      business: string;
      contact: string;
    };
  };
  footer: {
    copyright: string;
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
  home: {
    badge: string;
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    aboutTitle: string;
    aboutBody: string;
    aboutCta: string;
    latestNewsTitle: string;
    noNewsTitle: string;
    noNewsBody: string;
    viewAllNews: string;
    latestProjectTitle: string;
    featuredPublicationsTitle: string;
    viewAllPublications: string;
    visitProject: string;
    noProject: string;
    contactTitle: string;
    quickInquiryTitle: string;
    quickInquiryBody: string;
    generalInfoTitle: string;
    viewContactDetails: string;
    sendEmailCta: string;
    labels: {
      email: string;
      address: string;
    };
  };
  research: {
    title: string;
    subtitle: string;
    vision: {
      missionTitle: string;
      missionStatement: string;
      focusQuestionsTitle: string;
      focusQuestions: string[];
      imageAlt: string;
      imageCaption: string;
    };
    themesTitle: string;
    themes: Array<{
      title: string;
      description: string;
      whyItMatters: string;
      methods: string;
      outputs: string;
      imageSrc?: string;
      imageAlt?: string;
      imagePosition?: "center" | "left";
    }>;
    themeLabels: {
      whyItMatters: string;
      methods: string;
      outputs: string;
      imagePlaceholder: string;
    };
    projectLabels: {
      problem: string;
      approach: string;
      status: string;
    };
    projectsTitle: string;
    projects: Array<{
      title: string;
      problem: string;
      approach: string;
      status: string;
      paperUrl?: string;
      codeUrl?: string;
      demoUrl?: string;
      projectUrl?: string;
    }>;
    projectLinks: {
      paper: string;
      code: string;
      demo: string;
      project: string;
    };
    outcomesTitle: string;
    outcomesSubtitle: string;
    outcomes: Array<{
      title: string;
      description: string;
    }>;
    byNumbersTitle: string;
    byNumbers: Array<{
      value: string;
      label: string;
    }>;
    joinByTopicTitle: string;
    joinByTopic: Array<{
      theme: string;
      skillsTitle: string;
      skills: string[];
      firstProjectTitle: string;
      firstProjectIdea: string;
      weeklyWorkflowTitle: string;
      weeklyWorkflow: string[];
    }>;
    processTitle: string;
    process: Array<{
      title: string;
      description: string;
    }>;
    faqTitle: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
    ctaTitle: string;
    ctas: {
      publications: string;
      joinUs: string;
      contact: string;
    };
  };
  publications: {
    title: string;
    subtitle: string;
    noItemsTitle: string;
    noItemsBody: string;
    linkLabel: string;
    teaserAltSuffix: string;
    searchLabel: string;
    searchPlaceholder: string;
    yearFilterLabel: string;
    venueFilterLabel: string;
    allYears: string;
    allVenues: string;
    sortLabel: string;
    sortNewest: string;
    sortOldest: string;
    sortTitleAsc: string;
    sortTitleDesc: string;
    pageLabel: string;
    previousPage: string;
    nextPage: string;
    pageSummary: string;
    noResultsTitle: string;
    noResultsBody: string;
    clearFilters: string;
    paperAriaLabel: string;
    projectAriaLabel: string;
    codeAriaLabel: string;
    showAbstract: string;
    hideAbstract: string;
  };
  members: {
    title: string;
    subtitle: string;
    noItemsTitle: string;
    noItemsBody: string;
    researchTopicLabel: string;
    personalPage: string;
    photoAltSuffix: string;
  };
  joinUs: {
    title: string;
    subtitle: string;
    hero: {
      headline: string;
      pitch: string;
      highlights: string[];
      primaryCta: string;
      secondaryCta: string;
    };
    openPositionsTitle: string;
    openPositions: Array<{
      role: string;
      requirementLabel: string;
      requirements: string[];
    }>;
    whatWeLookForTitle: string;
    whatWeLookFor: Array<{
      category: string;
      points: string[];
    }>;
    howToApplyTitle: string;
    applySteps: string[];
    contactCta: string;
    faqTitle: string;
    faqs: Array<{
      question: string;
      description: string;
      links?: Array<{
        label: string;
        href: string;
      }>;
    }>;
    testimonialsTitle: string;
    testimonials: Array<{
      quote: string;
      name: string;
      background: string;
    }>;
  };
  business: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    generalInfoTitle: string;
    inquiryGuideTitle: string;
    studentGuide: string;
    businessGuide: string;
    labels: {
      email: string;
      address: string;
    };
  };
  blogs: {
    title: string;
    subtitle: string;
    noItemsTitle: string;
    noItemsBody: string;
    readArticle: string;
    publishedPrefix: string;
  };
  news: {
    title: string;
    subtitle: string;
    noItemsTitle: string;
    noItemsBody: string;
    visitExternal: string;
    moreDetails: string;
    searchLabel: string;
    searchPlaceholder: string;
    typeFilterLabel: string;
    allTypes: string;
    sortLabel: string;
    sortNewest: string;
    sortOldest: string;
    sortTitleAsc: string;
    sortTitleDesc: string;
    pageLabel: string;
    previousPage: string;
    nextPage: string;
    pageSummary: string;
    noResultsTitle: string;
    noResultsBody: string;
    clearFilters: string;
  };
};
