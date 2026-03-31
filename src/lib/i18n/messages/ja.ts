import type { Messages } from "@/lib/i18n/types";

export const jaMessages: Messages = {
  metadata: {
    siteTitle: "長谷川研究室",
    siteDescription: "研究、出版物、メンバー、管理画面からの更新を備えた研究室ホームページ。"
  },
  header: {
    brandTitle: "長谷川研究室",
    brandSubtitle: "ユビキタス知能を創る。",
    mainNavAria: "メインナビゲーション",
    languageLabel: "言語",
    languages: {
      en: "EN",
      ja: "日本語",
      zh: "中文"
    },
    nav: {
      home: "ホーム",
      research: "研究",
      news: "ニュース",
      blogs: "ブログ",
      publications: "出版物",
      members: "メンバー",
      joinUs: "参加案内",
      business: "産学連携",
      contact: "Contact Us"
    }
  },
  footer: {
    copyright: "福井大学 長谷川研究室"
  },
  notFound: {
    title: "ページが見つかりません",
    description: "お探しのページは存在しません。",
    cta: "ホームに戻る"
  },
  home: {
    badge: "長谷川研究室",
    title: "ユビキタスと知能を繋ぐ",
    intro:
      "私たちは、モバイルセンシングと深層学習を通じて、人・デバイス・知識をつなぐ知能システムの実現を目指しています。",
    primaryCta: "For Students",
    secondaryCta: "See Research",
    aboutTitle: "About Us",
    aboutBody:
      "長谷川研究室はユビキタス人工知能を中心に研究しています。基盤モデルの活用、新しいニューラルアーキテクチャの開発、ニューラルネットワークのメカニズム解明に取り組んでいます。",
    aboutCta: "See research",
    latestNewsTitle: "Latest News",
    noNewsTitle: "ニュースはまだありません",
    noNewsBody: "管理画面からニュースを追加すると、ここに表示されます。",
    viewAllNews: "Browse News",
    latestProjectTitle: "Featured Projects",
    featuredPublicationsTitle: "Featured Publications",
    viewAllPublications: "Browse Publications",
    visitProject: "Browse Projects",
    noProject: "管理画面からプロジェクトを追加すると、ここに表示されます。",
    contactTitle: "Contact Us",
    quickInquiryTitle: "クイックお問い合わせ",
    quickInquiryBody: "ご経歴、研究関心、希望開始時期をお知らせください。通常は数営業日以内に返信します。",
    generalInfoTitle: "基本情報",
    viewContactDetails: "連絡先の詳細を見る",
    sendEmailCta: "メールを送る",
    labels: {
      email: "メール",
      address: "住所"
    }
  },
  research: {
    title: "研究",
    subtitle: "私たちが何に取り組み、どのような成果を出し、どこで新しい学生が参加できるかを示します。",
    vision: {
      missionTitle: "研究ビジョン",
      missionStatement:
        "科学的厳密性・実装可能性・人間中心設計を両立したユビキタス知能システムを創出します。",
      focusQuestionsTitle: "現在の重点課題",
      focusQuestions: [
        "汎用人工知能の実現に向けて、どのようなデータが不足しているのか？",
        "基盤モデルからタスク特化型モデルをどのように構築できるか？",
        "小規模モデルのアンサンブルは、単一の大規模モデルに匹敵できるか？",
        "基盤モデルは、どのような世界モデルを獲得しているのか？",
        "高信頼な識別モデルはどのように構築できるか？"
      ],
      imageAlt: "ダッシュボードを前に実験結果を議論する学生",
      imageCaption: "研究の基本サイクル: 課題設定、反復実験、週次のエビデンスレビュー。"
    },
    themesTitle: "研究テーマ",
    themes: [
      {
        title: "機械学習・データ知能",
        description: "ノイズ環境に対応する表現学習、頑健学習、適応的データパイプラインを研究します。",
        whyItMatters: "実運用でデータ品質が揺らぐ状況でも信頼できるモデルが必要です。",
        methods: "自己教師あり学習、不確実性推定、ストリーミングデータ検証。",
        outputs: "国際会議論文、ベンチマークデータセット、再現可能な学習レシピ。"
      },
      {
        title: "最適化・意思決定システム",
        description: "大規模・不確実・動的システム向けの数理最適化と計画手法を探究します。",
        whyItMatters: "意思決定品質の改善は安全性・効率・資源利用に直結します。",
        methods: "制約付き最適化、MPC 型計画、シミュレーション評価。",
        outputs: "ソルバーツール、意思決定シミュレータ、実証ケースレポート。"
      },
      {
        title: "人間中心AI",
        description: "社会・産業で実用可能な、説明可能かつ協調的な AI システムを設計します。",
        whyItMatters: "社会実装には透明性、使いやすさ、人間の適切な介入設計が不可欠です。",
        methods: "解釈可能モデル、ユーザ評価、実務者との共創設計。",
        outputs: "インタフェース試作、設計ガイドライン、実証的なユーザ評価結果。"
      },
      {
        title: "サイバーフィジカル基盤",
        description: "センシング・制御・運用とデジタル知能をつなぐ高信頼アーキテクチャを研究します。",
        whyItMatters: "実世界で成果を出すには、障害に強い運用基盤が必要です。",
        methods: "エッジ・クラウド協調、障害耐性パイプライン、デジタルツイン検証。",
        outputs: "デプロイデモ、基盤設計指針、産学連携の実証プロジェクト。"
      }
    ],
    themeLabels: {
      whyItMatters: "重要性",
      methods: "手法・ツール",
      outputs: "成果例",
      imagePlaceholder: "画像"
    },
    projectLabels: {
      problem: "課題",
      approach: "アプローチ",
      status: "ステータス"
    },
    projectsTitle: "進行中プロジェクト",
    projects: [
      {
        title: "ノイズ環境下モバイルセンシングの適応学習",
        problem: "ユーザ・端末・文脈の違いにより、データ品質が時間とともに変化します。",
        approach: "信頼度に基づくデータ選択とオンライン再較正を組み合わせて頑健性を高めます。",
        status: "進行中",
        paperUrl: "/publications",
        codeUrl: "https://github.com",
        demoUrl: "/blogs"
      },
      {
        title: "動的環境における安全な意思決定最適化",
        problem: "環境条件や制約の変化で、ポリシーが容易に劣化する可能性があります。",
        approach: "予測計画と制約付き最適化を統合し、ストレステストで性能を検証します。",
        status: "進行中",
        paperUrl: "/publications",
        demoUrl: "/news"
      },
      {
        title: "専門家向け説明可能 AI コパイロット",
        problem: "実務者にはスコアだけでなく、改善につながる説明が必要です。",
        approach: "インタラクティブ説明 UI とフィードバックループを設計し、誤り分析を行います。",
        status: "公開済み",
        paperUrl: "/publications",
        demoUrl: "/blogs"
      },
      {
        title: "ユビキタス AI 向け耐障害エッジ・クラウド基盤",
        problem: "通信断や部分故障時に推論パイプラインが性能低下します。",
        approach: "フォールバック制御と復旧戦略を設計し、デジタルツインで検証します。",
        status: "企画中",
        demoUrl: "/news"
      }
    ],
    projectLinks: {
      paper: "論文",
      code: "コード",
      demo: "デモ"
    },
    outcomesTitle: "成果とインパクト",
    outcomesSubtitle: "論文、実装、連携の観点から代表的な成果を示します。",
    outcomes: [
      {
        title: "主要論文",
        description: "機械学習、最適化、ユビキタスシステム領域での査読付き成果。"
      },
      {
        title: "受賞・外部評価",
        description: "学生表彰、競争的資金採択、国内外での招待講演。"
      },
      {
        title: "社会実装・共同研究",
        description: "実運用課題を対象とした大学・企業との共同プロジェクト。"
      }
    ],
    byNumbersTitle: "数字で見る研究室",
    byNumbers: [
      {
        value: "12+",
        label: "過去1年の論文数"
      },
      {
        value: "6",
        label: "進行中の共同研究"
      },
      {
        value: "4",
        label: "公開中の研究リポジトリ"
      },
      {
        value: "15+",
        label: "指導した学位研究"
      }
    ],
    joinByTopicTitle: "テーマ別 参加ガイド",
    joinByTopic: [
      {
        theme: "機械学習・データ知能",
        skillsTitle: "あると良いスキル",
        skills: ["Python", "PyTorch", "前処理", "実験管理"],
        firstProjectTitle: "最初の課題例",
        firstProjectIdea: "既存ベースラインを再現し、人工ノイズ条件で頑健性改善を試します。",
        weeklyWorkflowTitle: "週次の進め方",
        weeklyWorkflow: ["論文読解", "実装", "実験", "週次レビュー"]
      },
      {
        theme: "最適化・意思決定システム",
        skillsTitle: "あると良いスキル",
        skills: ["線形代数", "最適化", "シミュレーション", "アルゴリズム設計"],
        firstProjectTitle: "最初の課題例",
        firstProjectIdea: "制約付き計画のベースラインを実装し、外乱下で性能比較を行います。",
        weeklyWorkflowTitle: "週次の進め方",
        weeklyWorkflow: ["問題定式化", "ソルバー実装", "アブレーション", "結果議論"]
      },
      {
        theme: "人間中心AI",
        skillsTitle: "あると良いスキル",
        skills: ["HCI基礎", "説明可能AI", "UI 試作", "ユーザ調査設計"],
        firstProjectTitle: "最初の課題例",
        firstProjectIdea: "1つのモデル向け説明 UI を試作し、小規模ユーザ評価を実施します。",
        weeklyWorkflowTitle: "週次の進め方",
        weeklyWorkflow: ["UI 改善", "フィードバック収集", "分析", "チームレビュー"]
      },
      {
        theme: "サイバーフィジカル基盤",
        skillsTitle: "あると良いスキル",
        skills: ["分散システム", "コンテナ運用", "センサ連携", "監視基盤"],
        firstProjectTitle: "最初の課題例",
        firstProjectIdea: "障害注入スクリプトを作成し、復旧性能を計測します。",
        weeklyWorkflowTitle: "週次の進め方",
        weeklyWorkflow: ["システム実装", "統合試験", "障害訓練", "設計レビュー"]
      }
    ],
    processTitle: "研究プロセスとカルチャー",
    process: [
      {
        title: "テーマ設計",
        description: "実課題を起点に先行研究を整理し、検証可能なマイルストーンを設定します。"
      },
      {
        title: "メンタリング",
        description: "週次の個別または少人数ミーティングで、継続的に研究を前進させます。"
      },
      {
        title: "論文化プロセス",
        description: "実験設計から執筆・改稿・投稿まで、段階的な内部チェックを実施します。"
      },
      {
        title: "協働スタイル",
        description: "ペアレビュー、実験ログ共有、再現性重視を標準運用としています。"
      }
    ],
    faqTitle: "研究 FAQ",
    faqs: [
      {
        question: "参加時点で論文実績は必要ですか？",
        answer: "必須ではありません。実績よりも、学ぶ姿勢と継続力を重視します。"
      },
      {
        question: "研究ミーティングの使用言語は何ですか？",
        answer: "参加者に応じて日本語と英語を使い分け、留学生も参加しやすい運営を行います。"
      },
      {
        question: "成果が出るまでの目安はありますか？",
        answer: "多くの学生は最初の学期でオンボーディングを終え、再現実験を開始します。"
      },
      {
        question: "複数テーマを横断して取り組めますか？",
        answer: "はい。明確な研究課題と計画があれば、横断テーマを歓迎します。"
      }
    ],
    ctaTitle: "次のステップ",
    ctas: {
      publications: "出版物を見る",
      joinUs: "参加案内を見る",
      contact: "研究相談をする"
    }
  },
  publications: {
    title: "出版物",
    subtitle: "論文誌・国際会議・各種論文を継続的に更新しています。",
    noItemsTitle: "出版物はまだありません",
    noItemsBody: "管理画面から出版物を追加してください。",
    linkLabel: "論文リンク",
    teaserAltSuffix: "ティザー",
    searchLabel: "検索",
    searchPlaceholder: "タイトル、著者、掲載先、要旨で検索",
    yearFilterLabel: "年",
    venueFilterLabel: "掲載先",
    allYears: "すべての年",
    allVenues: "すべての掲載先",
    sortLabel: "並び替え",
    sortNewest: "新しい順",
    sortOldest: "古い順",
    sortTitleAsc: "タイトル昇順",
    sortTitleDesc: "タイトル降順",
    pageLabel: "出版物ページネーション",
    previousPage: "前へ",
    nextPage: "次へ",
    pageSummary: "{total} 件中 {from}-{to} 件を表示",
    noResultsTitle: "該当する出版物がありません",
    noResultsBody: "検索キーワードやフィルター条件を変更してください。",
    clearFilters: "検索・フィルターをクリア",
    paperAriaLabel: "論文",
    projectAriaLabel: "プロジェクトページ",
    codeAriaLabel: "コード"
  },
  members: {
    title: "メンバー",
    subtitle: "教員、研究者、学生がデータ駆動型の科学技術に取り組んでいます。",
    noItemsTitle: "メンバー情報はまだありません",
    noItemsBody: "管理画面からメンバー情報を追加してください。",
    researchTopicLabel: "研究テーマ",
    personalPage: "個人ページ",
    photoAltSuffix: "写真"
  },
  joinUs: {
    title: "参加案内",
    subtitle: "厳密さと挑戦を大切にしながら、社会に届く研究を一緒に進めましょう。",
    hero: {
      headline: "協働的な環境で、研究力を次の段階へ。",
      pitch:
        "長谷川研究室では、実課題に取り組みながら、密な指導と継続的なフィードバックを通じて、一人ひとりの成長を支援します。",
      highlights: [
        "定期的な研究ディスカッションと個別メンタリング",
        "トップ会議・論文投稿を見据えた研究推進",
        "多様な背景を持つメンバーとの国際的な協働"
      ],
      primaryCta: "応募を始める",
      secondaryCta: "研究室に連絡する"
    },
    openPositionsTitle: "募集ポジション",
    openPositions: [
      {
        role: "博士・修士課程学生",
        requirementLabel: "応募要件",
        requirements: [
          "機械学習・最適化・ユビキタス AI への強い関心",
          "英語文献を読み、議論できる基礎力",
          "Python などのプログラミング経験"
        ]
      },
      {
        role: "研究インターン（学部生・学外）",
        requirementLabel: "応募要件",
        requirements: [
          "基礎的な実装力とデータ解析スキル",
          "学期または夏季期間での継続参加",
          "仮説検証を粘り強く進める姿勢"
        ]
      },
      {
        role: "訪問研究員・共同研究者",
        requirementLabel: "応募要件",
        requirements: [
          "研究室テーマとの明確な整合",
          "具体的な共同研究目標と期間設定",
          "所属機関での受入・派遣調整"
        ]
      }
    ],
    whatWeLookForTitle: "求める人物像",
    whatWeLookFor: [
      {
        category: "スキル",
        points: [
          "統計・機械学習・最適化の基礎理解",
          "再現性を意識した実装と実験管理",
          "論理的で明確なコミュニケーション"
        ]
      },
      {
        category: "マインドセット",
        points: ["深く問い続ける好奇心", "課題設定から報告までやり切る主体性", "建設的に協働する姿勢"]
      },
      {
        category: "バックグラウンド",
        points: [
          "情報・工学・数理・データ科学など関連分野",
          "研究・卒業研究・開発経験があれば歓迎",
          "現在のスキル以上に意欲と継続力を重視"
        ]
      }
    ],
    howToApplyTitle: "応募方法",
    applySteps: [
      "下のボタンから応募フォームを提出してください。",
      "応募内容を確認し、適格かどうかをお知らせします。",
      "適格と判断された場合、状況に応じた詳細手続きをメールでご案内します。"
    ],
    contactCta: "応募フォームを送信",
    faqTitle: "よくある質問",
    faqs: [
      {
        question: "学生向けの資金支援はありますか？",
        description:
          "支援内容はプログラムやプロジェクトによって異なります。選考過程で、利用可能な奨学金や RA 等の制度をご案内します。"
      },
      {
        question: "留学生の応募とビザ手続きに対応していますか？",
        description:
          "はい、対応しています。合格後は大学の手続きに沿って、必要書類の準備と申請手順をサポートします。"
      },
      {
        question: "参加前に必要な前提知識はありますか？",
        description:
          "特定ツールの必須条件はありませんが、基礎的なプログラミング力と数理的素養を想定しています。学ぶ意欲を重視します。"
      }
    ],
    testimonialsTitle: "メンバーの声",
    testimonials: [
      {
        quote: "週次の議論がとても密で、曖昧だったアイデアを論文レベルまで磨くことができました。",
        name: "修士修了生",
        background: "現 AI 分野 博士課程"
      },
      {
        quote: "インターンでも本格的な実験を任せてもらえ、質問しやすい雰囲気で成長できました。",
        name: "研究インターン",
        background: "情報系学部生"
      },
      {
        quote: "共同研究の議論が具体的で、短期間でも成果につながる進め方ができました。",
        name: "訪問研究者",
        background: "連携大学 教員"
      }
    ]
  },
  business: {
    title: "産学連携",
    subtitle: "産業界や社会との連携は、研究成果を実世界へ届けるうえで中核となる活動です。",
    items: [
      {
        title: "共同研究",
        description: "産業界や公共機関と連携し、実務的でデータ集約型の課題解決に取り組みます。"
      },
      {
        title: "技術コンサルティング",
        description: "機械学習戦略、モデル運用、最適化ワークフローに関する専門知見を提供します。"
      },
      {
        title: "学生連携プロジェクト",
        description: "研究と製品・運用ニーズを結びつけるプロジェクト型連携を企画・実施します。"
      }
    ]
  },
  contact: {
    title: "お問い合わせ",
    subtitle: "研究・教育・産学連携に関するお問い合わせを歓迎します。",
    generalInfoTitle: "基本情報",
    inquiryGuideTitle: "お問い合わせガイド",
    studentGuide: "学生応募の際は、履歴書、研究関心、希望開始時期をご記載ください。",
    businessGuide: "企業連携の際は、プロジェクト背景、スケジュール、期待成果をご記載ください。",
    labels: {
      email: "メール",
      address: "住所"
    }
  },
  blogs: {
    title: "ブログ",
    subtitle: "記事は Markdown で作成され、Web サイトに自動反映されます。",
    noItemsTitle: "ブログ記事はまだありません",
    noItemsBody: "管理画面から最初の記事を作成してください。",
    readArticle: "記事を読む",
    publishedPrefix: "公開日"
  },
  news: {
    title: "ニュース",
    subtitle: "研究室の最近の活動・お知らせ・更新情報を掲載しています。",
    noItemsTitle: "ニュースはまだありません",
    noItemsBody: "管理画面から最初のニュースを作成してください。",
    visitExternal: "外部ページを見る",
    moreDetails: "詳細を見る",
    searchLabel: "検索",
    searchPlaceholder: "タイトル、本文、種別、ハイライトで検索",
    typeFilterLabel: "種別",
    allTypes: "すべての種別",
    sortLabel: "並び替え",
    sortNewest: "新しい順",
    sortOldest: "古い順",
    sortTitleAsc: "タイトル昇順",
    sortTitleDesc: "タイトル降順",
    pageLabel: "ニュースページネーション",
    previousPage: "前へ",
    nextPage: "次へ",
    pageSummary: "{total} 件中 {from}-{to} 件を表示",
    noResultsTitle: "該当するニュースがありません",
    noResultsBody: "検索キーワードやフィルター条件を変更してください。",
    clearFilters: "検索・フィルターをクリア"
  }
};
