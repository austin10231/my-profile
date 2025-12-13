const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

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

btnTheme.addEventListener('click', toggleTheme)

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

btnHamburger.addEventListener('click', displayList)

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
    about_title: "Hi, I am Mutian He",
    about_role: "Data Scientist & ML Engineer",
    about_desc:
      "Combining data science and machine learning techniques to uncover patterns, improve predictions, and transform information into actionable solutions. Focused on applying intelligent models to real-world challenges and enhancing decision-making through clear, data-driven insights.",
    btn_resume: "Resume",

    // section title
    projects_title: "PROJECTS",

    // project 1
    proj1_title: "Jenkins-as-a-Service Platform",
    proj1_desc:
      "Designed a high-level architecture for an internal Jenkins-as-a-Service CI/CD platform. Built workflows, user stories, and pipeline diagrams; proposed RBAC security model and collaborated in Agile to deliver technical documentation.",

    // project 2
    proj2_title: "Smart Parking App",
    proj2_desc:
      "A full system design for a Smart Parking mobile application, covering requirements, use cases, UML diagrams, state models, UI screens, and cost-benefit analysis.",

    // project 3
    proj3_title: "Top Spotify Podcast Episodes – Data Analysis",
    proj3_desc:
      "Analyzed a dataset of more than 228K Spotify podcast episodes using Python. Conducted EDA, feature engineering, and built a Random Forest model to predict Top 10 podcast episodes.",

	skills_title: "SKILLS",
	  
	contact_title: "CONTACT",
	btn_email: "Email me",

	contact_title_page: "CONTACT",
	contact_intro: "If you'd like to get in touch, feel free to leave your info and a short message.",
	contact_label_name: "Your Name",
	contact_label_email: "Your Email",
	contact_label_message: "Message",
	contact_button_send: "Send message",
	contact_note_prefix: "Prefer email? You can also reach me directly at",

    // footer
    footer_text: "Created By Mutian He",
  },

  zh: {
    // nav
    nav_projects: "项目",
    nav_skills: "技能",
    nav_contact: "联系",

    // about
    about_title: "嗨，我是 何沐天",
    about_role: "数据科学家 & 机器学习工程师",
    about_desc:
      "结合数据科学与机器学习技术，挖掘数据模式、提升预测能力，并将信息转化为可执行的解决方案。专注于将智能模型应用于真实世界的问题，通过清晰的数据洞察增强决策能力。",
    btn_resume: "简历",

    // section title
    projects_title: "项目展示",

    // project 1
    proj1_title: "Jenkins 即服务平台（JaaS）",
    proj1_desc:
      "为内部 Jenkins CI/CD 平台设计高层架构，编写工作流程、用户故事和流水线图，提出 RBAC 安全模型，并在敏捷开发中协作完成技术文档。",

    // project 2
    proj2_title: "智能停车 App",
    proj2_desc:
      "一套完整的智能停车移动应用系统设计，包括需求分析、用例图、UML 图、状态模型、界面原型和成本收益分析。",

    // project 3
    proj3_title: "Spotify 播客 Top10 数据分析",
    proj3_desc:
      "使用 Python 分析超过 22.8 万条 Spotify 播客数据，进行 EDA 与特征工程，并构建随机森林模型预测 Top 10 播客。",

	skills_title: "技能",
	  
	contact_title: "联系",
	btn_email: "给我发邮件",

	contact_title_page: "联系我",
	contact_intro: "如果你想联系我，可以在这里留下你的信息和简短留言。",
	contact_label_name: "你的名字",
	contact_label_email: "你的邮箱",
	contact_label_message: "留言内容",
	contact_button_send: "发送消息",
	contact_note_prefix: "更喜欢直接邮件？你也可以发送到",
	
    // footer
    footer_text: "由何沐天制作",
  }
};

let currentLang = "en";

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang][key];
    if (text) el.textContent = text;
  });
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "zh" : "en";
  applyTranslations(currentLang);

  document.getElementById("lang-toggle").textContent =
    currentLang === "en" ? "中文" : "EN";
});

// 初始化翻译
applyTranslations(currentLang);

