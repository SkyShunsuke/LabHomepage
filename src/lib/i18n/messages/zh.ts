import type { Messages } from "@/lib/i18n/types";

export const zhMessages: Messages = {
  metadata: {
    siteTitle: "长谷川实验室",
    siteDescription: "包含研究、出版物、成员以及可由管理后台更新内容的实验室主页。"
  },
  header: {
    brandTitle: "长谷川实验室",
    brandSubtitle: "构建无处不在的智能。",
    mainNavAria: "主导航",
    languageLabel: "语言",
    languages: {
      en: "EN",
      ja: "日本語",
      zh: "中文"
    },
    nav: {
      home: "首页",
      research: "研究",
      news: "动态",
      blogs: "博客",
      publications: "出版物",
      members: "成员",
      joinUs: "加入我们",
      business: "合作",
      contact: "联系我们"
    }
  },
  footer: {
    copyright: "福井大学 长谷川实验室"
  },
  notFound: {
    title: "页面不存在",
    description: "您访问的页面不存在。",
    cta: "返回首页"
  },
  home: {
    badge: "长谷川实验室",
    title: "连接无处不在与智能",
    intro: "我们的使命是通过移动感知与深度学习，构建连接人与设备与知识的智能系统。",
    primaryCta: "申请加入",
    secondaryCta: "查看研究",
    aboutTitle: "关于我们",
    aboutBody:
      "长谷川实验室聚焦于泛在人工智能研究。我们探索如何利用基础模型能力、开发新一代神经网络架构，并加深对神经网络机制的理解。",
    aboutCta: "查看研究方向",
    latestNewsTitle: "最新动态",
    noNewsTitle: "暂无动态",
    noNewsBody: "在管理后台添加动态后，将显示在这里。",
    viewAllNews: "查看全部动态",
    latestProjectTitle: "最新项目",
    featuredPublicationsTitle: "代表性出版物",
    viewAllPublications: "查看全部出版物",
    visitProject: "查看项目页面",
    noProject: "请在管理后台添加项目以在此展示。",
    contactTitle: "联系我们",
    quickInquiryTitle: "快速咨询",
    quickInquiryBody: "请告诉我们你的背景、研究兴趣和希望开始时间。我们通常会在几个工作日内回复。",
    generalInfoTitle: "基本信息",
    viewContactDetails: "查看完整联系信息",
    sendEmailCta: "立即发邮件",
    labels: {
      email: "邮箱",
      address: "地址"
    }
  },
  research: {
    title: "研究",
    subtitle: "清晰展示实验室在做什么、产出什么成果，以及学生可以从哪里开始参与。",
    vision: {
      missionTitle: "研究愿景",
      missionStatement: "构建兼具科学严谨性、工程可落地性与以人为中心设计的泛在智能系统。",
      focusQuestionsTitle: "当前核心问题",
      focusQuestions: [
        "实现通用人工智能还缺少哪些关键数据？",
        "如何从基础模型构建面向具体任务的专用模型？",
        "多个小模型的集成能否媲美单个大模型？",
        "基础模型究竟学到了什么样的世界模型？",
        "如何构建高度可靠的判别模型？"
      ],
      imageAlt: "学生在仪表盘前讨论实验结果",
      imageCaption: "实验室常见研究循环：问题定义、迭代实验、每周基于证据的评审。"
    },
    themesTitle: "研究主题",
    themes: [
      {
        title: "机器学习与数据智能",
        description: "研究表征学习、鲁棒训练与面向噪声环境的自适应数据管线。",
        whyItMatters: "真实部署中数据质量会波动，模型稳定性是前提。",
        methods: "自监督学习、不确定性估计、流式数据质量校验。",
        outputs: "会议论文、基准数据集、可复现实验流程。"
      },
      {
        title: "优化与决策系统",
        description: "面向大规模、不确定与动态系统的数学优化与规划方法。",
        whyItMatters: "决策质量直接影响安全性、效率和资源利用。",
        methods: "约束优化、MPC 风格规划、仿真驱动评估。",
        outputs: "求解器工具、决策仿真器、场景化验证报告。"
      },
      {
        title: "以人为中心的 AI",
        description: "设计可解释、可协作，并适用于社会与产业场景的 AI 系统。",
        whyItMatters: "只有透明、易用并具有人机协同机制的系统才能被真正采用。",
        methods: "可解释建模、用户研究、与实践方协同设计工作流。",
        outputs: "交互原型、设计准则、用户评估结果。"
      },
      {
        title: "信息物理基础设施",
        description: "构建连接数字智能与现实感知、控制、运行的高韧性架构。",
        whyItMatters: "研究成果要落地，必须具备跨设备、跨网络的稳定运行能力。",
        methods: "边云协同、故障容错管线、数字孪生验证。",
        outputs: "部署演示、架构蓝图、校企联合试点。"
      }
    ],
    themeLabels: {
      whyItMatters: "意义",
      methods: "方法与工具",
      outputs: "成果示例",
      imagePlaceholder: "图片"
    },
    projectLabels: {
      problem: "问题",
      approach: "方案",
      status: "状态"
    },
    projectsTitle: "在研项目",
    projects: [
      {
        title: "噪声移动感知数据的自适应学习",
        problem: "不同用户、设备与场景会导致数据分布和质量持续变化。",
        approach: "结合置信度驱动的数据选择与在线重校准，提高模型鲁棒性。",
        status: "进行中",
        paperUrl: "/publications",
        codeUrl: "https://github.com",
        demoUrl: "/blogs"
      },
      {
        title: "动态环境下的安全决策优化",
        problem: "当约束或运行条件变化时，策略容易失效。",
        approach: "融合预测规划与约束优化，并通过压力测试仿真验证稳定性。",
        status: "进行中",
        paperUrl: "/publications",
        demoUrl: "/news"
      },
      {
        title: "面向领域专家的可解释 AI 协作助手",
        problem: "专家需要可执行的解释，而不仅是模型分数。",
        approach: "构建交互式解释界面，结合迭代反馈与误差分析。",
        status: "已发表",
        paperUrl: "/publications",
        demoUrl: "/blogs"
      },
      {
        title: "泛在 AI 的韧性边云基础设施",
        problem: "网络波动和部分硬件故障会导致推理链路退化。",
        approach: "设计降级调度与服务恢复机制，并在数字孪生环境中验证。",
        status: "方案阶段",
        demoUrl: "/news"
      }
    ],
    projectLinks: {
      paper: "论文",
      code: "代码",
      demo: "演示"
    },
    outcomesTitle: "成果与影响",
    outcomesSubtitle: "从论文、部署与合作三个维度展示代表性成果。",
    outcomes: [
      {
        title: "代表性论文",
        description: "在机器学习、优化与泛在系统方向持续产出高质量论文。"
      },
      {
        title: "奖项与认可",
        description: "学生论文奖、项目资助以及国际学术邀请报告。"
      },
      {
        title: "部署与合作",
        description: "与高校和产业伙伴联合推进面向真实场景的研究验证。"
      }
    ],
    byNumbersTitle: "数据速览",
    byNumbers: [
      {
        value: "12+",
        label: "近一年论文产出"
      },
      {
        value: "6",
        label: "在研合作项目"
      },
      {
        value: "4",
        label: "开源研究仓库"
      },
      {
        value: "15+",
        label: "指导学生学位课题"
      }
    ],
    joinByTopicTitle: "按主题加入研究",
    joinByTopic: [
      {
        theme: "机器学习与数据智能",
        skillsTitle: "建议技能",
        skills: ["Python", "PyTorch", "数据预处理", "实验管理"],
        firstProjectTitle: "入门项目",
        firstProjectIdea: "先复现基线模型，再在合成噪声条件下提升鲁棒性。",
        weeklyWorkflowTitle: "每周工作节奏",
        weeklyWorkflow: ["论文阅读", "代码实现", "实验运行", "周会复盘"]
      },
      {
        theme: "优化与决策系统",
        skillsTitle: "建议技能",
        skills: ["线性代数", "优化方法", "仿真", "算法设计"],
        firstProjectTitle: "入门项目",
        firstProjectIdea: "实现约束规划基线，并比较扰动条件下的性能变化。",
        weeklyWorkflowTitle: "每周工作节奏",
        weeklyWorkflow: ["问题建模", "求解器实现", "消融实验", "结果讨论"]
      },
      {
        theme: "以人为中心的 AI",
        skillsTitle: "建议技能",
        skills: ["HCI 基础", "可解释 AI", "前端原型", "用户研究设计"],
        firstProjectTitle: "入门项目",
        firstProjectIdea: "为单个模型构建解释面板，并完成小规模用户评估。",
        weeklyWorkflowTitle: "每周工作节奏",
        weeklyWorkflow: ["界面迭代", "反馈收集", "分析总结", "组内评审"]
      },
      {
        theme: "信息物理基础设施",
        skillsTitle: "建议技能",
        skills: ["分布式系统", "容器运维", "传感器集成", "监控系统"],
        firstProjectTitle: "入门项目",
        firstProjectIdea: "构建故障注入脚本并量化端到端恢复性能。",
        weeklyWorkflowTitle: "每周工作节奏",
        weeklyWorkflow: ["系统开发", "集成测试", "故障演练", "设计评审"]
      }
    ],
    processTitle: "研究流程与文化",
    process: [
      {
        title: "选题方式",
        description: "从真实问题出发，结合文献调研制定可验证的里程碑。"
      },
      {
        title: "指导节奏",
        description: "每周进行一对一或小组反馈，持续推进研究质量与进度。"
      },
      {
        title: "论文管线",
        description: "从实验设计到写作、修改、投稿都有阶段性内部检查。"
      },
      {
        title: "协作方式",
        description: "强调结对评审、实验记录透明与结果可复现。"
      }
    ],
    faqTitle: "研究 FAQ",
    faqs: [
      {
        question: "加入前必须有论文经历吗？",
        answer: "不必须。我们更看重学习意愿、执行力和持续投入。"
      },
      {
        question: "组会主要使用什么语言？",
        answer: "根据参与成员使用日语与英语，并支持国际成员顺畅参与。"
      },
      {
        question: "通常多久能开始产出结果？",
        answer: "多数同学会在首个学期完成入门并开始稳定的可复现实验。"
      },
      {
        question: "可以跨多个主题做研究吗？",
        answer: "可以。只要研究问题清晰、目标可衡量，我们鼓励跨主题协作。"
      }
    ],
    ctaTitle: "下一步",
    ctas: {
      publications: "查看出版物",
      joinUs: "查看加入方式",
      contact: "联系讨论研究合作"
    }
  },
  publications: {
    title: "出版物",
    subtitle: "持续更新论文、期刊文章与会议发表列表。",
    noItemsTitle: "暂无出版物",
    noItemsBody: "请在管理后台添加出版物条目。",
    linkLabel: "论文链接",
    teaserAltSuffix: "预览图",
    searchLabel: "搜索",
    searchPlaceholder: "按标题、作者、会议或摘要搜索",
    yearFilterLabel: "年份",
    venueFilterLabel: "会议/期刊",
    allYears: "全部年份",
    allVenues: "全部会议/期刊",
    sortLabel: "排序",
    sortNewest: "最新优先",
    sortOldest: "最早优先",
    sortTitleAsc: "标题 A-Z",
    sortTitleDesc: "标题 Z-A",
    pageLabel: "出版物分页",
    previousPage: "上一页",
    nextPage: "下一页",
    pageSummary: "显示第 {from}-{to} 条，共 {total} 条",
    noResultsTitle: "没有匹配的出版物",
    noResultsBody: "请尝试调整搜索关键词或筛选条件。",
    clearFilters: "清除搜索和筛选",
    paperAriaLabel: "论文",
    projectAriaLabel: "项目页面",
    codeAriaLabel: "代码"
  },
  members: {
    title: "成员",
    subtitle: "团队由教师、研究人员和学生组成，开展数据驱动的科学与工程研究。",
    noItemsTitle: "暂无成员信息",
    noItemsBody: "请在管理后台添加成员资料。",
    researchTopicLabel: "研究主题",
    personalPage: "个人主页",
    photoAltSuffix: "照片"
  },
  joinUs: {
    title: "加入我们",
    subtitle: "在严谨、开放、互相支持的环境中，一起做有影响力的研究。",
    hero: {
      headline: "在协作型实验室里加速你的研究成长。",
      pitch:
        "在长谷川实验室，你将参与真实研究问题，获得持续指导，并与团队一起把想法推进到可发表、可落地的成果。",
      highlights: [
        "稳定的导师反馈与研究讨论机制",
        "面向高水平会议与期刊的研究训练",
        "跨背景、国际化的团队合作氛围"
      ],
      primaryCta: "开始申请",
      secondaryCta: "联系实验室"
    },
    openPositionsTitle: "开放岗位",
    openPositions: [
      {
        role: "博士 / 硕士研究生",
        requirementLabel: "要求",
        requirements: [
          "对机器学习、优化或泛在 AI 有明确兴趣",
          "能够阅读并讨论英文技术文献",
          "具备 Python 等编程经验"
        ]
      },
      {
        role: "研究实习生（本科/校外）",
        requirementLabel: "要求",
        requirements: [
          "具备基础编码与数据分析能力",
          "可连续投入一个学期或暑期周期",
          "愿意参与研究实现与实验验证"
        ]
      },
      {
        role: "访问学者 / 合作者",
        requirementLabel: "要求",
        requirements: [
          "研究方向与实验室主题有清晰契合点",
          "有明确合作目标与时间计划",
          "所在机构支持访学安排"
        ]
      }
    ],
    whatWeLookForTitle: "我们看重什么",
    whatWeLookFor: [
      {
        category: "技能",
        points: [
          "统计、机器学习或优化的基础能力",
          "重视可复现性的编码与实验习惯",
          "清晰的书面与口头表达能力"
        ]
      },
      {
        category: "思维方式",
        points: ["持续提问并迭代的好奇心", "从想法到结果的执行责任感", "尊重他人、乐于协作的沟通方式"]
      },
      {
        category: "背景",
        points: [
          "计算机、工程、数据科学、应用数学等相关专业",
          "有课程项目、论文或研究经历更佳",
          "我们同样重视成长潜力与投入度"
        ]
      }
    ],
    howToApplyTitle: "申请流程",
    applySteps: [
      "请通过下方按钮提交申请表。",
      "我们会审核申请并通知你是否符合条件。",
      "若你通过审核，我们将根据你的情况通过邮件发送更详细的后续流程。"
    ],
    contactCta: "提交申请表",
    faqTitle: "常见问题",
    faqs: [
      {
        question: "是否提供学生资助？",
        description:
          "资助方式会根据项目与培养类型有所不同。我们会在选拔过程中说明可申请的奖学金与助研机会。"
      },
      {
        question: "国际学生可以申请并获得签证支持吗？",
        description:
          "可以。我们欢迎国际申请者。录取后会根据学校流程提供所需文件与手续支持。"
      },
      {
        question: "加入前有必须满足的先修条件吗？",
        description:
          "不强制要求特定工具栈，但建议具备基础编程与数学能力。我们非常看重学习意愿与持续投入。"
      }
    ],
    testimonialsTitle: "成员反馈",
    testimonials: [
      {
        quote: "实验室给了我很大的研究空间，同时每周反馈也非常扎实，帮助我把想法变成了论文。",
        name: "硕士毕业生",
        background: "现攻读 AI 博士"
      },
      {
        quote: "作为实习生，我从第一周就参与真实实验，团队氛围让提问变得很自然。",
        name: "研究实习生",
        background: "计算机本科生"
      },
      {
        quote: "合作节奏很高效，讨论始终围绕具体技术问题推进，成果产出很顺畅。",
        name: "访问研究员",
        background: "合作高校教师"
      }
    ]
  },
  business: {
    title: "合作",
    subtitle: "产业与社会合作是我们将研究转化为现实影响的重要方式。",
    items: [
      {
        title: "联合研究",
        description: "与企业及公共机构合作，解决实际且数据密集的挑战。"
      },
      {
        title: "技术咨询",
        description: "在机器学习战略、模型部署与优化流程方面提供专业支持。"
      },
      {
        title: "学生-产业项目",
        description: "组织项目制合作，连接学术研究与产品及运营需求。"
      }
    ]
  },
  contact: {
    title: "联系我们",
    subtitle: "欢迎就研究、教育和产业合作与我们联系。",
    generalInfoTitle: "基本信息",
    inquiryGuideTitle: "咨询说明",
    studentGuide: "学生申请请附上简历、研究兴趣及预计开始时间。",
    businessGuide: "业务合作请附上项目背景、时间计划与预期成果。",
    labels: {
      email: "邮箱",
      address: "地址"
    }
  },
  blogs: {
    title: "博客",
    subtitle: "文章使用 Markdown 编写，并自动渲染到网站。",
    noItemsTitle: "暂无博客文章",
    noItemsBody: "请在管理后台创建第一篇文章。",
    readArticle: "阅读全文",
    publishedPrefix: "发布日期"
  },
  news: {
    title: "动态",
    subtitle: "这里发布实验室近期活动、公告与更新。",
    noItemsTitle: "暂无动态",
    noItemsBody: "请在管理后台创建第一条动态。",
    visitExternal: "访问外部页面",
    moreDetails: "查看更多",
    searchLabel: "搜索",
    searchPlaceholder: "按标题、正文、类型或高亮搜索",
    typeFilterLabel: "类型",
    allTypes: "全部类型",
    sortLabel: "排序",
    sortNewest: "最新优先",
    sortOldest: "最早优先",
    sortTitleAsc: "标题 A-Z",
    sortTitleDesc: "标题 Z-A",
    pageLabel: "动态分页",
    previousPage: "上一页",
    nextPage: "下一页",
    pageSummary: "显示第 {from}-{to} 条，共 {total} 条",
    noResultsTitle: "没有匹配的动态",
    noResultsBody: "请尝试调整搜索关键词或筛选条件。",
    clearFilters: "清除搜索和筛选"
  }
};
