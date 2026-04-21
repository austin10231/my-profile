const body = document.body;
const btnTheme = document.getElementById('btn-theme');
const btnHamburger = document.querySelector('.nav__hamburger i');

// 给 body 和主题按钮加 class，注意这里都加了保护
const addThemeClass = (bodyClass, btnClass) => {
  // 有值才给 body 加 class
  if (bodyClass) {
    body.classList.add(bodyClass);
  }
  // 只有当前页面真的有 .fa-moon，并且有按钮 class 的时候才加
  if (btnTheme && btnClass) {
    btnTheme.classList.add(btnClass);
  }
};

const getBodyTheme = localStorage.getItem('portfolio-theme');
const getBtnTheme = localStorage.getItem('portfolio-btn-theme');

// 只有首页这种有 .fa-moon 的页面才执行主题初始化
if (btnTheme) {
  addThemeClass(getBodyTheme, getBtnTheme);
}

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {
  if (!btnTheme) return;

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

if (btnTheme) {
  btnTheme.addEventListener('click', toggleTheme);
}

const displayList = () => {
	const navUl = document.querySelector('.nav__list')
  if (!btnHamburger || !navUl) return;

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

if (btnHamburger) {
  btnHamburger.addEventListener('click', displayList);
}

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')
  if (!btnScrollTop) return;

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)

// ---------------------------
// 🔤 Language Toggle
// ---------------------------

const translations = {
  en: {
    // nav
    nav_projects: "PROJECTS",
    nav_skills: "SKILLS",
    nav_contact: "CONTACT",

    // about
    about_title_prefix: "Hi, I am ",
  	about_title_name: "Mutian He",
    about_role: "Data Engineering, Analytics & Machine Learning",
    about_edu_1:
	"Pursing Master Degree in Information Systems at Santa Clara University",
	
	about_edu_2:
	"BSc in Computer Science, University of Glasgow (Graduated: June 2024)",
	
	about_seeking:
	"Seeking Internships in Data Engineering, Data Science & BI / Analytics",
	
	about_intro:
	"Skilled in the end-to-end data lifecycle with hands-on experience building robust cloud data pipelines on AWS (S3, Glue, Athena) and developing machine learning models using Python and SQL. Beyond infrastructure and predictive modeling, I am passionate about data analytics—transforming complex datasets into intuitive, interactive dashboards (Power BI / Tableau) to drive strategic business decisions. I focus on delivering scalable, production-ready solutions that bridge the gap between technical architecture and real-world business impact.",

    btn_resume: "Resume",

    // section title
    projects_title: "PROJECTS",

    // projects
    proj1_title: "RiskLens AI",
	proj1_tag: "Cloud & AI Engineering",
	proj1_desc:
  	  "Engineered an end-to-end document intelligence pipeline parsing SEC 10-K filings (HTML + PDF) via BeautifulSoup and AWS Textract, extracting and structuring Risk Factor disclosures into standardized JSON. Integrated AWS Bedrock (Nova Lite) to auto-classify risks into 13 categories and generate executive-level summaries, enabling AI-powered year-over-year and cross-company risk comparison.",

	proj2_title: "End-to-End Instacart Reorder Prediction System",
	proj2_tag: "ML Engineering",
	proj2_desc:
      "An end-to-end machine learning pipeline for predicting user reorder behavior on the Instacart platform. Focuses on data engineering and ML workflow design, including ETL, feature aggregation, temporal data splitting, model training, and inference. Trained a Random Forest model on user–product interaction data with emphasis on preventing data leakage and building a reproducible, production-oriented pipeline.",

	proj3_title: "Bank Marketing Subscription Predictor",
	proj3_tag: "Machine Learning",
	proj3_desc:
  	  "Built an end-to-end ML classification pipeline to predict customer subscription likelihood for bank term deposits. Addressed 88% class imbalance using SMOTE, tuned decision threshold to optimize Recall/Precision tradeoff, and applied SHAP values to deliver interpretable, business-actionable insights. Achieved ROC-AUC of 0.80 with Random Forest.",

	proj4_title: "Cloud-Based Real-Time Stock Data Pipeline",
	proj4_tag: "Data Engineering",
	proj4_desc:
  	  "Built a cloud-based real-time stock data streaming pipeline using Apache Kafka on AWS EC2. Implemented Python producers and consumers to simulate live market data ingestion. Persisted streaming data to Amazon S3 and integrated AWS Glue Data Catalog and Amazon Athena to enable scalable, serverless SQL analytics.",

	proj5_title: "Spotify Podcast Popularity Analysis",
	proj5_tag: "Data Analysis",
	proj5_desc:
  	  "Analyzed 228,000+ Spotify podcast episodes to identify factors driving Top 10 rankings. Performed EDA across 22 countries, engineered predictive features from audio/video and genre attributes, and trained a Random Forest classifier evaluated by accuracy and AUC.",

	proj6_title: "Real-Time Flight Delay Prediction System",
	proj6_tag: "ML Engineering",
	proj6_desc:
  	  "Developed an end-to-end machine learning system to predict flight delays using high-cardinality categorical features such as airline carriers and origin–destination pairs. Focuses on production-oriented ML engineering, including feature processing, model training with CatBoost, and real-time inference through an interactive web interface.",

	proj7_title: "Multimodal Image Search Engine",
	proj7_tag: "Multimodal ML",
	proj7_desc:
	  "Built a CLIP-based multimodal retrieval system for text-to-image search by projecting images and text queries into a shared embedding space. Designed the full pipeline from data preprocessing and batch embedding generation to FAISS ANN indexing, and evaluated retrieval quality with Recall@1/5/10 and Median Rank.",

	proj8_title: "Jenkins as a Service (JaaS)",
	proj8_tag: "DevOps Platform Engineering",
	proj8_desc:
	  "Designed an enterprise Jenkins-as-a-Service platform to replace fragmented CI/CD tooling across teams. Standardized pipeline templates, centralized RBAC and audit logging, and planned rollback-oriented release workflows on VMware to improve delivery reliability, security compliance, and operating efficiency.",
		
		  skills_title: "SKILLS",
	  
	contact_title: "CONTACT",
	btn_email: "Email me",

	back_home: "← Back to Home",
	  
	contact_title_page: "CONTACT",
	contact_intro: "If you'd like to get in touch, feel free to leave your info and a short message.",
	contact_label_name: "Your Name",
	contact_label_email: "Your Email",
	contact_label_message: "Message",
	contact_button_send: "Send message",
	contact_note_prefix: "Prefer email? You can also reach me directly at",

	contact_ph_name: "Enter your full name",
    contact_ph_email: "your@email.com",
    contact_ph_message: "Tell me a bit about what you'd like to discuss...",

    // footer
    footer_text: "© 2026 Mutian He",
  },

  zh: {
    // nav
    nav_projects: "项目",
    nav_skills: "技能",
    nav_contact: "联系",

    // about
    about_title_prefix: "你好，我是",
  	about_title_name: "何沐天",
    about_role: "机器学习 & 云数据工程",
    about_edu_1:
	"圣塔克拉拉大学信息系统硕士在读（预计 2026 年 12 月毕业）。",
	
	about_edu_2:
	"格拉斯哥大学计算机科学学士（毕业于2024 年 6 月）。",
	
	about_seeking:
	"目前正在寻找机器学习和云数据工程方向的2026暑期实习机会。",
	
	about_intro:
	"熟练掌握 Python、SQL 及云端数据管道开发，具备在 AWS（S3、Lambda、Glue、Athena）上构建端到端 ETL 工作流的实战经验。拥有数据清洗、特征工程、机器学习建模以及可扩展数据系统部署经验。致力于设计生产级数据架构，并将机器学习应用于真实业务场景中。",

    btn_resume: "简历",

    // section title
    projects_title: "项目展示",

    // project 1
    proj1_title: "RiskLens AI（SEC 10-K 风险变化智能分析系统）",
	proj1_tag: "云计算 & AI 工程",
	proj1_desc:
  	  "构建端到端文档智能处理管道，通过 BeautifulSoup 和 AWS Textract 解析 SEC 10-K 文件（HTML + PDF），将风险披露内容结构化为标准 JSON。集成 AWS Bedrock（Nova Lite）自动将风险分类至 13 个类别并生成高管级摘要，实现 AI 驱动的跨年度与跨公司风险对比分析。",

	proj2_title: "端到端 Instacart 用户复购预测系统",
	proj2_tag: "ML 工程",
	proj2_desc:
  	  "用于预测 Instacart 用户复购行为的端到端机器学习系统，重点关注数据工程与 ML 流程设计。涵盖 ETL、特征聚合、时间切分、模型训练与推理，通过严格的时间划分防止数据泄露，构建可复现的生产级机器学习管道。",

	proj3_title: "银行营销订阅预测模型",
	proj3_tag: "机器学习",
	proj3_desc:
	  "构建端到端机器学习分类管道，预测银行定期存款的客户订阅意向。通过 SMOTE 解决 88% 类别不平衡问题，调整决策阈值优化召回率与精确率的权衡，使用 SHAP 实现模型可解释性。Random Forest 最终 ROC-AUC 达到 0.80。",

	proj4_title: "基于云的实时股票数据处理管道",
	proj4_tag: "数据工程",
	proj4_desc:
	  "构建基于 AWS 的实时股票数据流处理管道，在 EC2 上部署 Apache Kafka。使用 Python 编写生产者与消费者模拟实时市场数据采集，将流数据持久化至 Amazon S3，并结合 AWS Glue Data Catalog 与 Amazon Athena 实现可扩展的无服务器 SQL 分析。",

	proj5_title: "Spotify 播客热度分析",
	proj5_tag: "数据分析",
	proj5_desc:
	  "分析超过 22.8 万条 Spotify 播客数据，探究影响 Top 10 排名的关键因素。覆盖 22 个国家的 EDA 分析，基于音频/视频及类型属性进行特征工程，并训练 Random Forest 分类模型，以准确率和 AUC 进行评估。",

	proj6_title: "实时航班延误预测系统",
	proj6_tag: "ML 工程",
	proj6_desc:
		  "构建用于航班延误预测的端到端机器学习系统，针对航空公司、起降机场等高基数类别特征进行建模。聚焦生产级 ML 工程实践，包括特征处理、基于 CatBoost 的模型训练，以及通过交互式 Web 界面实现实时推理。",

	proj7_title: "多模态图像搜索引擎",
	proj7_tag: "多模态机器学习",
	proj7_desc:
		  "基于 CLIP 构建文本驱动图像检索系统，将图像与文本查询映射到共享 embedding 空间进行相似度匹配。设计了从数据预处理、批量 embedding 生成到 FAISS ANN 向量索引的完整流程，并通过 Recall@1/5/10 与 Median Rank 评估检索效果。",

	proj8_title: "Jenkins 即服务平台（JaaS）",
	proj8_tag: "DevOps 平台工程",
	proj8_desc:
		  "面向企业设计 Jenkins as a Service（JaaS）平台，用统一 CI/CD 流程替代分散的 CircleCI/GitLab/GitHub Actions。通过标准化流水线模板、集中式 RBAC 与审计日志、以及面向回滚的发布流程（基于 VMware 运行），提升发布稳定性、安全合规与运维效率。",
		skills_title: "技能",

	back_home: "← 返回首页",
	  
	contact_title: "联系",
	btn_email: "给我发邮件",

	contact_title_page: "联系我",
	contact_intro: "如果你想联系我，可以在这里留下你的信息和简短留言。",
	contact_label_name: "你的名字",
	contact_label_email: "你的邮箱",
	contact_label_message: "留言内容",
	contact_button_send: "发送消息",
	contact_note_prefix: "更喜欢直接邮件？你也可以发送到",

	contact_ph_name: "请输入你的姓名",
    contact_ph_email: "请输入你的邮箱地址",
    contact_ph_message: "请简单描述你想沟通的内容……",
	
    // footer
    footer_text: "© 2026 何沐天",
  }
};

Object.assign(translations.en, {
  about_role: "AI/LLM + Data Engineering Intern",
  about_seeking_badge: "Open to 2026 Internship Opportunities",
  about_edu_school_1: "Santa Clara University",
  about_edu_degree_1: "Master of Science in Information Systems",
  about_edu_date_1: "Expected Jan 2027",
  about_edu_school_2: "University of Glasgow",
  about_edu_degree_2: "Bachelor of Science in Computer Science",
  about_edu_date_2: "Graduated Jun 2024",
  about_intro:
    "I build production-minded AI and data systems end-to-end, from data ingestion and modeling to business-facing insights. My hands-on experience includes AWS data pipelines, LLM application development, machine learning workflows, and dashboard-based analytics delivery.",
  about_focus_1: "Python",
  about_focus_2: "SQL",
  about_focus_3: "AWS Data Pipelines",
  about_focus_4: "LLM Applications",
  about_focus_5: "Machine Learning",
  about_focus_6: "BI / Dashboarding",
  nav_home: "HOME",
  nav_experience: "EXPERIENCE",
  home_hub_title: "CAREER HUB",
  home_hub_intro:
    "Dive into my internship impact and full project archive through dedicated pages.",
  home_exp_eyebrow: "Internship Spotlight",
  home_exp_title: "RiskLens AI @ Amazon Web Service (AWS)",
  home_exp_desc:
    "Built an AWS + LLM agent pipeline that transforms SEC 10-K filings into decision-ready risk intelligence.",
  home_exp_btn: "Open Experience",
  home_proj_eyebrow: "Project Archive",
  home_proj_title: "Machine Learning & Data Engineering Projects",
  home_proj_desc:
    "Explore retained projects spanning multimodal retrieval, ML systems, data pipelines, and analytics.",
  home_proj_btn: "Open Projects",
  projects_page_kicker: "Selected Work",
  projects_page_title: "Project Portfolio",
  projects_page_desc:
    "A curated archive of my machine learning, data engineering, and analytics builds.",
  projects_archive_title: "All Projects",
  projects_page_strip:
    "Want to see RiskLens AI in internship context? Visit Experience →",
  experience_page_kicker: "Internship Experience",
  experience_page_title: "AI/LLM Engineering Internship",
  experience_page_desc:
    "Internship project focused on SEC filing intelligence, multi-dimensional risk scoring, and report automation.",
  exp_company_label: "Company",
  exp_project_label: "Project",
  exp_company: "Amazon Web Service (AWS)",
  exp_role: "AI/LLM Engineering Intern",
  exp_period: "Jan 2026 - Jun 2026",
  exp_project: "RiskLens AI Intelligent Risk Analytics Platform",
  exp_summary:
    "Designed and implemented an AWS-based data + LLM agent analysis platform for both analyst workflows and consumer-facing insights. Converted unstructured SEC 10-K disclosures into structured risk signals, then delivered cross-year change detection and decision support.",
  exp_resp_title: "Key Contributions",
  exp_resp_1:
    "Led system architecture and core module development. Built the document processing pipeline on AWS (S3, Textract, Bedrock) to parse, clean, and model 10-K unstructured text.",
  exp_resp_2:
    "Designed a rules + LLM hybrid extraction framework and applied prompt engineering to improve risk factor identification, including cross-year NEW/REMOVED change detection and financial statement analysis.",
  exp_resp_3:
    "Developed an LLM agent for multi-dimensional risk scoring and automated report generation. Integrated stock and news signals into a dashboard for risk, market, and sentiment correlation analysis.",
  exp_link_demo: "Live Demo Link",
  exp_link_github: "Github",
  exp_stack_title: "Core Stack",
});

Object.assign(translations.zh, {
  about_role: "AI/LLM + 数据工程实习生",
  about_seeking_badge: "正在寻找 2026 实习机会",
  about_edu_school_1: "Santa Clara University（圣塔克拉拉大学）",
  about_edu_degree_1: "Master of Science in Information Systems",
  about_edu_date_1: "预计毕业时间：2027 年 1 月",
  about_edu_school_2: "University of Glasgow（格拉斯哥大学）",
  about_edu_degree_2: "Bachelor of Science in Computer Science",
  about_edu_date_2: "毕业时间：2024 年 6 月",
  about_intro:
    "我具备从数据采集、建模到业务展示的端到端落地能力，关注可扩展、可复用的工程实现。在实践中，我主要使用 AWS 构建数据管道，结合 Python/SQL 开发 LLM 与机器学习应用，并通过可视化仪表盘输出业务洞察。",
  about_focus_1: "Python",
  about_focus_2: "SQL",
  about_focus_3: "AWS 数据管道",
  about_focus_4: "LLM 应用开发",
  about_focus_5: "机器学习",
  about_focus_6: "BI / 数据可视化",
  nav_home: "首页",
  nav_experience: "实习经历",
  home_hub_title: "经历导航",
  home_hub_intro: "点击进入独立页面，查看我的实习成果与完整项目集。",
  home_exp_eyebrow: "实习亮点",
  home_exp_title: "RiskLens AI @ 亚马逊",
  home_exp_desc:
    "基于 AWS + LLM Agent 构建 10-K 风险智能分析平台，把非结构化文本转成可决策风险洞察。",
  home_exp_btn: "查看 Experience",
  home_proj_eyebrow: "项目归档",
  home_proj_title: "机器学习与数据工程项目",
  home_proj_desc:
    "保留了其余项目，涵盖多模态检索、ML 系统、数据管道与分析可视化。",
  home_proj_btn: "查看 Projects",
  projects_page_kicker: "项目作品集",
  projects_page_title: "Projects 项目展示",
  projects_page_desc:
    "这里保留了其余项目，覆盖机器学习、数据工程与数据分析方向。",
  projects_archive_title: "全部项目",
  projects_page_strip: "想看 RiskLens AI 的实习版叙事？前往 Experience →",
  experience_page_kicker: "实习经历",
  experience_page_title: "AI/LLM 工程实习",
  experience_page_desc:
    "围绕 SEC 10-K 文档智能解析、多维风险评估与自动化报告生成的实习项目。",
  exp_company_label: "公司",
  exp_project_label: "项目",
  exp_company: "亚马逊",
  exp_role: "AI/LLM 工程实习生",
  exp_period: "2026.01 - 2026.06",
  exp_project: "RiskLens AI 智能风险分析平台",
  exp_summary:
    "设计并落地基于 AWS 的数据与 LLM Agent 分析平台（面向 B 端分析师与 C 端用户），将 SEC 10-K 非结构化文本转化为结构化风险数据，并通过跨年度差异识别提供决策支持。",
  exp_resp_title: "个人职责",
  exp_resp_1:
    "主导系统架构设计与核心模块开发，基于 AWS（S3、Textract、Bedrock）搭建数据处理管道，实现 10-K 非结构化文本解析、清洗与结构化建模。",
  exp_resp_2:
    "设计规则 + LLM 混合抽取框架，结合 Prompt Engineering 提升风险因子识别效果，实现跨年度差异检测（NEW/REMOVED）及财务报表解析。",
  exp_resp_3:
    "开发 LLM Agent 进行多维风险评分与自动化报告生成，融合股票与新闻数据构建可视化仪表盘，完成风险与市场/情绪变化的关联分析。",
  exp_link_demo: "在线演示",
  exp_link_github: "Github",
  exp_stack_title: "核心技术栈",
});
// -------------------- i18n logic --------------------
// ---------------- i18n logic ----------------

// LocalStorage key
const LANG_STORAGE_KEY = "lang";
let currentLang = "en";
const resumeByLang = {
  en: encodeURI("Mutian He Resume.pdf"),
  zh: encodeURI("何沐天中文简历.pdf")
};

// 把页面上所有 data-i18n 的元素替换文本
function applyTranslations(lang) {
  const dict = translations[lang] || {};

  // 1. 普通文本（之前就有）
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = dict[key];
    if (text) el.textContent = text;
  });

  // 2. 表单 placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const text = dict[key];
    if (text) el.setAttribute("placeholder", text);
  });
}

// 根据当前语言更新右上角“中文 / EN”按钮文字（contact 页面没有按钮时直接 return）
function updateLangToggleLabel() {
  const langToggle = document.getElementById("lang-toggle");
  if (!langToggle) return;
  langToggle.textContent = currentLang === "en" ? "中文" : "EN";
}

function updateResumeLink(lang) {
  const resumeLink = document.getElementById("resume-link");
  if (!resumeLink) return;
  resumeLink.setAttribute("href", resumeByLang[lang] || resumeByLang.en);
}

// 设置语言：更新变量 + 存储 localStorage + 应用翻译 + 改按钮字
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  applyTranslations(lang);
  updateResumeLink(lang);
  updateLangToggleLabel();
}

function initI18n() {
  const savedLang = localStorage.getItem(LANG_STORAGE_KEY) || "en";
  setLanguage(savedLang);

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const nextLang = currentLang === "en" ? "zh" : "en";
      setLanguage(nextLang);
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  // DOM 已经 ready 了，直接执行
  initI18n();
}
