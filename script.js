const body = document.body;
const btnTheme = document.getElementById('btn-theme');
const btnHamburger = document.querySelector('.nav__hamburger i');
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

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

	proj9_title: "Goal-Conditioned Maze Navigation with Curriculum Learning",
	proj9_tag: "Reinforcement Learning",
	proj9_desc:
		  "Designed and implemented a goal-conditioned RL environment in MuJoCo with Gymnasium wrappers, then trained PPO agents under a progressive curriculum (UMaze -> Medium -> Large). Compared sparse versus dense reward shaping and found distance-based dense rewards can induce local optima in wall-constrained layouts. Built an evaluation harness for reward curves, success-rate tracking, and trajectory analysis, improving hardest-maze success rate from 6% baseline to 38%.",
			
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

	proj9_title: "Goal-Conditioned Maze Navigation with Curriculum Learning",
	proj9_tag: "强化学习",
	proj9_desc:
			  "在 MuJoCo 中设计并实现 goal-conditioned 强化学习环境，使用自定义 Gymnasium Wrapper 与 PPO 训练 agent，并构建渐进式课程学习路径（UMaze -> Medium -> Large）。系统对比 sparse 与 dense reward shaping，发现基于距离的 dense reward 在有墙场景中会造成 local optima。搭建评估体系用于 reward curve、success rate 和 trajectory 分析，将最难迷宫成功率从 6% baseline 提升至 38%。",
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
    "Dive into my industry and research experience plus full project archive through dedicated pages.",
  home_exp_eyebrow: "Experience Spotlight",
  home_exp_title: "Industry + Research Journey",
  home_exp_desc:
    "From AWS product-facing LLM engineering to SCU research on reliable AI agents for high-stakes decision support.",
  home_exp_track_industry: "Industry: AWS Internship",
  home_exp_track_research: "Research: SCU RA",
  home_exp_btn: "Open Experience Hub",
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
    "Want to see both AWS and RA context? Visit Experience →",
  experience_page_kicker: "Experience Hub",
  experience_page_title: "Industry + Research Experience",
  experience_page_desc:
    "A unified view of my product-facing AI engineering internship and current research assistant work on reliable LLM agents.",
  exp_tab_1_kicker: "Industry",
  exp_tab_1_meta: "Amazon Web Service (AWS) · Jan 2026 - Jun 2026",
  exp_tab_2_kicker: "Research",
  exp_tab_2_meta: "Santa Clara University · May 2026 - Present",
  exp_tab_2_link: "University Lab Context",
  exp_tab_hint: "Expand details ↓",
  exp_company_label: "Company",
  exp_project_label: "Project",
  exp_company: "Amazon Web Service (AWS)",
  exp_role: "AI/LLM Engineering Intern",
  exp_period: "Jan 2026 - Jun 2026",
  exp_project: "RiskLens AI SEC 10-K Intelligence Platform",
  exp_summary:
    "Architected and delivered RiskLens AI across Cloudflare Pages (frontend), Railway (Python backend), and AWS S3/Textract/Bedrock. Converted unstructured SEC 10-K disclosures into structured risk signals, added deterministic post-processing for reliable scoring, and supported dashboard + agent workflows at scale (76 companies, 348 filings).",
  exp_resp_title: "Key Contributions",
  exp_resp_1:
    "Built the end-to-end filing pipeline: SEC EDGAR ingestion, HTML parsing with edgartools/sec-parser/BeautifulSoup, PDF fallback via Textract, and Bedrock-based Item 1/1A extraction to produce structured risk JSON for downstream analytics.",
  exp_resp_2:
    "Implemented a dual-model LLM architecture and ReAct-style tool-calling agent on Bedrock. Used DeepSeek V3 for orchestration and Nova Pro for structured extraction/scoring, with guardrails (iteration limits, context budget, tool-result bounds) to improve stability and controllability.",
  exp_resp_3:
    "Designed a rules + LLM hybrid taxonomy mapper plus deterministic 3D scoring (impact/likelihood/urgency -> priority -> RPI), including low-confidence fallback and partial-failure handling. Enabled cross-year NEW/REMOVED risk comparison and generated automated executive-level reports.",
  exp_link_demo: "Explore Product",
  exp_link_github: "Github",
  exp_stack_title: "Core Stack",
  exp_stack_1: "AWS (S3, Textract, Bedrock)",
  exp_stack_2: "Python",
  exp_stack_3: "Prompt Engineering",
  exp_stack_4: "LLM Agent",
  exp_stack_5: "Financial NLP",
  exp2_role: "Research Assistant",
  exp2_period: "May 2026 - Present",
  exp2_org_label: "Organization",
  exp2_org: "Santa Clara University",
  exp2_focus_label: "Research Focus",
  exp2_focus: "Reliable LLM Agents for Clinical Decision Support",
  exp2_summary:
    "Researching how large language models can function as reliable AI agents for complex reasoning and decision-support tasks using real-world EHR and structured datasets.",
  exp2_resp_title: "Key Contributions",
  exp2_resp_1:
    "Evaluated open-source LLMs (7B-70B) across reasoning, planning, and risk assessment tasks using EHR-based evaluation workflows and multi-step agent interactions.",
  exp2_resp_2:
    "Designed prompt engineering and agent evaluation frameworks to benchmark reasoning quality, hallucination control, tool usage, and response reliability.",
  exp2_resp_3:
    "Conducted comparative analysis across model architectures (Dense vs MoE), parameter scales, and prompting strategies to study agent performance and consistency.",
  exp2_stack_title: "Core Stack",
  exp2_stack_1: "Open-Source LLMs (7B-70B)",
  exp2_stack_2: "Prompt Engineering",
  exp2_stack_3: "Agent Evaluation",
  exp2_stack_4: "EHR-Structured Datasets",
  exp2_stack_5: "Reasoning Benchmarking",
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
  nav_experience: "经历",
  home_hub_title: "经历导航",
  home_hub_intro: "点击进入独立页面，查看我的产业与研究经历，以及完整项目集。",
  home_exp_eyebrow: "经历亮点",
  home_exp_title: "产业 + 研究双轨经历",
  home_exp_desc:
    "从 AWS 产品化 LLM 工程实践，到 SCU 可靠性 AI Agent 研究，形成完整能力闭环。",
  home_exp_track_industry: "产业向：AWS 实习",
  home_exp_track_research: "研究向：SCU RA",
  home_exp_btn: "查看 Experience Hub",
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
  projects_page_strip: "想看 AWS + RA 双轨经历叙事？前往 Experience →",
  experience_page_kicker: "经历总览",
  experience_page_title: "产业 + 研究经历",
  experience_page_desc:
    "统一展示我在产业实习与研究助理两条路径上的 AI 能力实践：一条偏产品落地，一条偏模型可靠性研究。",
  exp_tab_1_kicker: "产业",
  exp_tab_1_meta: "亚马逊 · 2026.01 - 2026.06",
  exp_tab_2_kicker: "研究",
  exp_tab_2_meta: "Santa Clara University · 2026.05 - 至今",
  exp_tab_2_link: "学校与研究场景",
  exp_tab_hint: "下拉查看详情 ↓",
  exp_company_label: "公司",
  exp_project_label: "项目",
  exp_company: "亚马逊",
  exp_role: "AI/LLM 工程实习生",
  exp_period: "2026.01 - 2026.06",
  exp_project: "RiskLens AI SEC 10-K 风险智能平台",
  exp_summary:
    "主导落地 RiskLens AI 全链路架构：Cloudflare Pages 前端、Railway Python 后端、AWS S3/Textract/Bedrock AI 基础设施。将 SEC 10-K 非结构化文本转化为结构化风险信号，并通过确定性后处理提升评分一致性，支撑 76 家公司、348 份 filing 的规模化分析。",
  exp_resp_title: "个人职责",
  exp_resp_1:
    "搭建端到端 filing 数据管道：接入 SEC EDGAR，使用 edgartools/sec-parser/BeautifulSoup 解析 HTML，Textract 兜底解析 PDF，并基于 Bedrock 提取 Item 1/1A 风险，产出结构化风险 JSON。",
  exp_resp_2:
    "实现双模型 LLM + ReAct 多步工具调用 Agent：DeepSeek V3 负责对话编排与工具调度，Nova Pro 负责结构化抽取与评分；通过迭代上限、上下文预算、tool result 截断等 guardrails 提升稳定性与可控性。",
  exp_resp_3:
    "设计规则 + LLM 混合 taxonomy 映射与确定性三维评分体系（impact/likelihood/urgency -> priority -> RPI），加入低置信度 fallback 与局部失败标记机制，实现跨年 NEW/REMOVED 风险对比与高管级自动化报告输出。",
  exp_link_demo: "查看产品",
  exp_link_github: "Github",
  exp_stack_title: "核心技术栈",
  exp_stack_1: "AWS（S3、Textract、Bedrock）",
  exp_stack_2: "Python",
  exp_stack_3: "Prompt Engineering",
  exp_stack_4: "LLM Agent",
  exp_stack_5: "金融 NLP",
  exp2_role: "研究助理（Research Assistant）",
  exp2_period: "2026.05 - 至今",
  exp2_org_label: "机构",
  exp2_org: "Santa Clara University",
  exp2_focus_label: "研究方向",
  exp2_focus: "面向临床决策支持的可靠性 LLM Agent",
  exp2_summary:
    "围绕真实世界 EHR 与结构化数据集，研究大语言模型在复杂推理与决策支持任务中如何成为更可靠的 AI Agent。",
  exp2_resp_title: "个人职责",
  exp2_resp_1:
    "基于 EHR 评测流程与多步 Agent 交互任务，对开源 LLM（7B-70B）在推理、规划、风险评估等维度进行系统评测。",
  exp2_resp_2:
    "设计 Prompt Engineering 与 Agent 评测框架，量化比较推理质量、幻觉控制、工具使用效果与响应可靠性。",
  exp2_resp_3:
    "围绕模型架构（Dense vs MoE）、参数规模与提示策略开展对比实验，分析 Agent 性能与一致性差异。",
  exp2_stack_title: "核心技术栈",
  exp2_stack_1: "开源 LLM（7B-70B）",
  exp2_stack_2: "Prompt Engineering",
  exp2_stack_3: "Agent Evaluation",
  exp2_stack_4: "EHR 结构化数据集",
  exp2_stack_5: "推理基准评测",
});
// -------------------- i18n logic --------------------
// ---------------- i18n logic ----------------

// LocalStorage key
const LANG_STORAGE_KEY = "lang";
let currentLang = "en";
const resumeByLang = {
  en: encodeURI("Mutian He AI Resume.pdf"),
  zh: encodeURI("何沐天 AI Resume CN.pdf")
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

function initPageTransitions() {
  body.classList.add("page-enter");
  requestAnimationFrame(() => {
    body.classList.add("page-enter-active");
  });

  setTimeout(() => {
    body.classList.remove("page-enter", "page-enter-active");
  }, 420);
}

function initStardustTrail() {
  if (reducedMotionQuery.matches || coarsePointerQuery.matches) return;

  const layer = document.createElement("div");
  layer.className = "cursor-trail-layer";
  body.appendChild(layer);

  let lastX = window.innerWidth * 0.5;
  let lastY = window.innerHeight * 0.32;
  let lastEmitAt = 0;

  const spawnSpark = (x, y, burst = false) => {
    const spark = document.createElement("span");
    spark.className = "cursor-spark";

    const angle = Math.random() * Math.PI * 2;
    const distance = burst ? 16 + Math.random() * 46 : 8 + Math.random() * 22;
    const size = burst ? 4.5 + Math.random() * 5.5 : 3 + Math.random() * 4.2;
    const lifetime = burst ? 640 + Math.random() * 360 : 470 + Math.random() * 250;
    const hue = 196 + Math.random() * 34;
    const driftX = Math.cos(angle) * distance;
    const driftY = Math.sin(angle) * distance;

    spark.style.setProperty("--spark-size", `${size.toFixed(2)}px`);
    spark.style.setProperty("--spark-life", `${Math.round(lifetime)}ms`);
    spark.style.setProperty("--spark-h", hue.toFixed(2));
    spark.style.setProperty("--x", `${x.toFixed(2)}px`);
    spark.style.setProperty("--y", `${y.toFixed(2)}px`);
    spark.style.setProperty("--dx", `${driftX.toFixed(2)}px`);
    spark.style.setProperty("--dy", `${driftY.toFixed(2)}px`);

    layer.appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove(), { once: true });

    if (layer.childElementCount > 110) {
      layer.firstElementChild?.remove();
    }
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      const now = performance.now();
      const deltaX = event.clientX - lastX;
      const deltaY = event.clientY - lastY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance < 6 && now - lastEmitAt < 18) return;

      const steps = Math.max(1, Math.min(5, Math.floor(distance / 18)));
      for (let i = 1; i <= steps; i += 1) {
        const progress = i / steps;
        const x = lastX + deltaX * progress + (Math.random() - 0.5) * 2.2;
        const y = lastY + deltaY * progress + (Math.random() - 0.5) * 2.2;
        spawnSpark(x, y, false);
      }

      lastX = event.clientX;
      lastY = event.clientY;
      lastEmitAt = now;
    },
    { passive: true }
  );

  window.addEventListener(
    "pointerdown",
    (event) => {
      for (let i = 0; i < 14; i += 1) {
        spawnSpark(event.clientX, event.clientY, true);
      }
    },
    { passive: true }
  );

  window.addEventListener("pointerleave", () => {
    lastX = window.innerWidth * 0.5;
    lastY = window.innerHeight * 0.32;
  });

  window.addEventListener("blur", () => {
    layer.replaceChildren();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) layer.replaceChildren();
  });
}

function initEducationLogos() {
  const logos = document.querySelectorAll(".about__edu-logo");
  if (!logos.length) return;

  const hideIfMissing = (logo) => {
    logo.classList.add("is-missing");
  };

  logos.forEach((logo) => {
    if (logo.complete && logo.naturalWidth === 0) hideIfMissing(logo);
    logo.addEventListener("error", () => hideIfMissing(logo), { once: true });
  });
}

function initExperienceTabs() {
  const tabs = Array.from(document.querySelectorAll(".experience-tab-card[data-experience-target]"));
  const panels = Array.from(document.querySelectorAll(".experience-detail-panel"));
  const shell = document.querySelector(".experience-detail-shell");

  if (!tabs.length || !panels.length || !shell) return;

  const hashToPanel = {
    industry: "industry-detail",
    research: "research-detail",
    "industry-detail": "industry-detail",
    "research-detail": "research-detail",
  };

  const normalizeTarget = (value) => hashToPanel[(value || "").replace("#", "")] || null;

  const setTabUi = (activePanelId) => {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.experienceTarget === activePanelId;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  };

  let activePanelId =
    normalizeTarget(window.location.hash) ||
    tabs.find((tab) => tab.classList.contains("is-active"))?.dataset.experienceTarget ||
    panels[0].id;

  panels.forEach((panel) => {
    const isActive = panel.id === activePanelId;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });
  setTabUi(activePanelId);

  const swapPanel = (nextPanelId, updateHash = true) => {
    if (!nextPanelId || nextPanelId === activePanelId) return;

    const current = document.getElementById(activePanelId);
    const next = document.getElementById(nextPanelId);
    if (!next) return;

    const startHeight = shell.getBoundingClientRect().height || (current ? current.offsetHeight : 0);

    if (current) {
      current.hidden = true;
      current.classList.remove("is-active");
    }

    next.hidden = false;
    next.classList.add("is-active", "entering");
    const endHeight = next.offsetHeight;

    if (!reducedMotionQuery.matches) {
      shell.style.height = `${startHeight}px`;
      shell.style.overflow = "hidden";
      shell.style.transition = "height 460ms cubic-bezier(0.22, 0.95, 0.24, 1)";
      requestAnimationFrame(() => {
        shell.style.height = `${endHeight}px`;
      });

      const clearHeight = () => {
        shell.style.height = "";
        shell.style.overflow = "";
        shell.style.transition = "";
        shell.removeEventListener("transitionend", clearHeight);
      };
      shell.addEventListener("transitionend", clearHeight);
    }

    window.setTimeout(() => {
      next.classList.remove("entering");
    }, 500);

    activePanelId = nextPanelId;
    setTabUi(activePanelId);

    if (updateHash) {
      const hashValue = nextPanelId === "research-detail" ? "research" : "industry";
      window.history.replaceState(null, "", `#${hashValue}`);
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      swapPanel(tab.dataset.experienceTarget);
    });

    tab.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      swapPanel(tab.dataset.experienceTarget);
    });
  });

  window.addEventListener("hashchange", () => {
    const target = normalizeTarget(window.location.hash);
    if (target) swapPanel(target, false);
  });
}

function initRevealAnimations() {
  const selectors = [
    ".about__seeking-badge",
    ".about__edu-card",
    ".about__intro",
    ".about__highlight",
    ".gateway-card",
    ".skills__list-item",
    ".contact .btn",
    ".hero-band",
    ".feature-strip",
    ".project",
    ".experience-card",
    ".contact-wrapper",
  ];

  const targets = Array.from(
    new Set(
      selectors.flatMap((selector) => Array.from(document.querySelectorAll(selector)))
    )
  );

  targets.forEach((el, index) => {
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${(index % 8) * 70}ms`);
  });

  if (reducedMotionQuery.matches) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  targets.forEach((el) => observer.observe(el));
}

function initTiltCards() {
  if (reducedMotionQuery.matches || coarsePointerQuery.matches) return;

  const cards = document.querySelectorAll(
    ".gateway-card, .project, .experience-card, .about__edu-card, .hero-band"
  );

  cards.forEach((card) => {
    card.classList.add("interactive-tilt");

    let rafId = 0;
    let tiltX = 0;
    let tiltY = 0;
    let shineX = 50;
    let shineY = 50;

    const applyTilt = () => {
      card.style.setProperty("--rx", `${tiltX.toFixed(2)}deg`);
      card.style.setProperty("--ry", `${tiltY.toFixed(2)}deg`);
      card.style.setProperty("--shine-x", `${shineX.toFixed(2)}%`);
      card.style.setProperty("--shine-y", `${shineY.toFixed(2)}%`);
      rafId = 0;
    };

    const scheduleUpdate = () => {
      if (!rafId) rafId = requestAnimationFrame(applyTilt);
    };

    card.addEventListener("pointerenter", () => {
      card.classList.add("is-hover");
    });

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      tiltX = (0.5 - y) * 10;
      tiltY = (x - 0.5) * 10;
      shineX = x * 100;
      shineY = y * 100;
      scheduleUpdate();
    });

    card.addEventListener("pointerleave", () => {
      card.classList.remove("is-hover");
      tiltX = 0;
      tiltY = 0;
      shineX = 50;
      shineY = 50;
      scheduleUpdate();
    });
  });
}

function initMagneticButtons() {
  if (reducedMotionQuery.matches || coarsePointerQuery.matches) return;

  const targets = document.querySelectorAll(
    ".btn--outline, .btn--plain, .gateway-card__btn, .feature-strip"
  );

  targets.forEach((target) => {
    target.classList.add("magnetic");

    target.addEventListener("pointermove", (event) => {
      const rect = target.getBoundingClientRect();
      const strength = target.classList.contains("feature-strip") ? 9 : 11;
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      target.style.transform = `translate(${(x * strength).toFixed(2)}px, ${(y * strength).toFixed(2)}px)`;
    });

    target.addEventListener("pointerleave", () => {
      target.style.transform = "";
    });
  });
}

function initInteractions() {
  initPageTransitions();
  initStardustTrail();
  initEducationLogos();
  initExperienceTabs();
  initRevealAnimations();
  initTiltCards();
  initMagneticButtons();
}

function initApp() {
  initI18n();
  initInteractions();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
