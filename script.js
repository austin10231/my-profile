const body = document.body;
const btnTheme = document.querySelector('.fa-moon');
const btnHamburger = document.querySelector('.fa-bars');

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
    proj1_title: "SEC 10-K Risk Change Alert System",
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
    proj1_title: "SEC 10-K 风险变化智能分析系统",
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
// -------------------- i18n logic --------------------
// ---------------- i18n logic ----------------

// LocalStorage key
const LANG_STORAGE_KEY = "lang";
let currentLang = "en";

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

// 设置语言：更新变量 + 存储 localStorage + 应用翻译 + 改按钮字
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  applyTranslations(lang);
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



