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
    about_role: "Machine Learning & Data Science",
    about_desc:
      "Master’s student in Information Systems at Santa Clara University, with a bachelor’s degree from the University of Glasgow. Interested in machine learning and data analytics, with hands-on experience using Python and SQL to clean, analyze, and build end-to-end data workflows. Passionate about working with real-world data and developing data-driven insights.",
    btn_resume: "Resume",

    // section title
    projects_title: "PROJECTS",

    // project 1
    proj1_title: "Jenkins-as-a-Service Platform",
    proj1_desc:
      "Designed a high-level architecture for an internal Jenkins-as-a-Service CI/CD platform. Built workflows, user stories, and pipeline diagrams; proposed RBAC security model and collaborated in Agile to deliver technical documentation.",

	// project 2
	proj2_title: "End-to-End Instacart Reorder Prediction System",
	proj2_desc:
	"An end-to-end machine learning pipeline for predicting user reorder behavior on the Instacart platform. The project focuses on data engineering and ML workflow design, including ETL, feature aggregation, temporal data splitting, model training, and inference. A Random Forest model was trained on user–product interaction data, with emphasis on preventing data leakage and building a reproducible, production-oriented pipeline.",
	
	// project 3
	proj3_title: "Intelligent Job Description Analyzer",
	proj3_desc:
	"Developed an NLP-based system to transform unstructured job descriptions into structured insights, including required skills, education, and seniority level. The project focuses on text processing, modular extractor design, and end-to-end ML workflow, enabling real-time analysis of both raw job text and job posting URLs.",
	
	// project 4
	proj4_title: "Real-time Flight Delay Prediction System",
	proj4_desc:
	"Developed an end-to-end machine learning system to predict flight delays using high-cardinality categorical features such as airline carriers and origin–destination pairs. The project focuses on production-oriented ML engineering, including feature processing, model training with CatBoost, and real-time inference through an interactive web interface.",

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
    footer_text: "© 2025 Mutian He",
  },

  zh: {
    // nav
    nav_projects: "项目",
    nav_skills: "技能",
    nav_contact: "联系",

    // about
    about_title_prefix: "你好，我是",
  	about_title_name: "何沐天",
    about_role: "机器学习 & 数据科学",
    about_desc:
      "圣塔克拉拉大学信息系统硕士在读，本科毕业于格拉斯哥大学。对机器学习和数据分析感兴趣，具备使用 Python 和 SQL 进行数据清洗、分析以及构建端到端数据流程的实践经验。热衷于处理真实世界数据，并从中挖掘数据驱动的洞察。",
    btn_resume: "简历",

    // section title
    projects_title: "项目展示",

    // project 1
    proj1_title: "Jenkins 即服务平台（JaaS）",
    proj1_desc:
      "为内部 Jenkins CI/CD 平台设计高层架构，编写工作流程、用户故事和流水线图，提出 RBAC 安全模型，并在敏捷开发中协作完成技术文档。",

	// project 2
	proj2_title: "端到端 Instacart 用户复购预测系统",
	proj2_desc:
	"一个用于预测 Instacart 用户复购行为的端到端机器学习系统，重点关注数据工程与 ML 流程设计。项目涵盖 ETL、特征聚合、时间切分、模型训练与推理，并通过严格的时间划分防止数据泄露，构建了一个可复现、面向生产环境的机器学习管道。",
	
	// project 3
	proj3_title: "智能职位描述分析系统",
	proj3_desc:
	"基于自然语言处理的职位描述分析系统，用于将非结构化的岗位文本转化为结构化信息，包括技能要求、学历背景和岗位资历等级。项目重点在于文本处理、模块化抽取器设计，以及端到端 ML 工作流，实现对职位文本和岗位链接的实时分析。",
	
	// project 4
	proj4_title: "实时航班延误预测系统",
	proj4_desc:
	"构建了一个用于航班延误预测的端到端机器学习系统，针对航空公司、起降机场等高基数类别特征进行建模。项目聚焦于生产级 ML 工程实践，包括特征处理、基于 CatBoost 的模型训练，以及通过交互式 Web 界面实现实时推理。",

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
    footer_text: "© 2025 何沐天",
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



