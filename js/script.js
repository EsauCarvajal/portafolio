const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const navLink = document.querySelectorAll(".nav-link");
const heroLines = document.querySelectorAll(".header-container .content-text h2");
const heroParagraphs = document.querySelectorAll(".header-container .content-text p");
const projectTitles = document.querySelectorAll("#projects .project .card .project-bio h3");
const projectStacks = document.querySelectorAll("#projects .project .card .project-bio p");

const PAGE_TRANSLATIONS = { 
  es: {
    htmlLang: "es",
    title: "Esaú Carvajal - Analista & Científico de Datos Junior",
    metaTitle: "Esaú Carvajal - Analista & Científico de Datos Junior",
    metaDescription:
      "Portafolio de Esaú Carvajal, Ingeniero Civil especializado en análisis y visualización de datos. En formación como Data Scientist.",
    socialTitle: "Esaú Carvajal | Data Analyst & Data Scientist (junior)",
    socialDescription:
      "Portafolio de Esaú Carvajal, Ingeniero Civil especializado en análisis y visualización de datos.",
    switchAriaLabel: "Cambiar idioma a inglés",
    navProjects: "PROYECTOS",
    navContact: "CONTACTO",
    logoAlt: "Esau Logo",
    heroAvatarAlt: "Avatar de Esaú",
    heroGreeting: "Hola, soy Esaú",
    heroLine1: "Construyo soluciones de datos",
    heroLine2: "impulsadas por IA.",
    heroDescription: "Un ingeniero especializado en análisis y visualización de datos.",
    heroChatPrompt: "Si quieres saber más de mí, habla con Topi. Está abajo a la derecha :).",
    heroCta: "¿Trabajamos juntos?",
    projectsTitle: "Proyectos",
    projectsDescription:
      "Aquí te muestro algunos proyectos en los que he trabajado. Si alguno te llama la atención y quieres saber más, pregúntale a Topi o mejor aún, hablemos y te cuento todo.",
    projectTitles: [
      "Topi: Asistente Chatbot Para Portafolio (llama-3.1-8b-instant)",
      "Kurobri: Monitoreo Satelital del NDVI para Cultivos de Banano",
      "Predicción de Admisión a Guarderías: Random Forest vs Redes Neuronales",
      "Clasificación de Vehículos con Machine Learning",
      "Lujo Fragancias (SEO page)"
    ],
    projectStacks: [
      "Groq, Cloudflare Workers, JS, CSS",
      "AWS, HTML, CSS, JS, PHP, SQL",
      "Python (Pandas, Scikit-Learn, TensorFlow)",
      "Python (Pandas, Matplotlib, Scikit-Learn)",
      "HTML, CSS, JS"
    ],
    footerTemplate:
      'Copyright &copy; Communitypro <span id="datee"></span>, todos los derechos reservados.'
  },
  en: {
    htmlLang: "en",
    title: "Esau Carvajal - Junior Data Scientist",
    metaTitle: "Esau Carvajal - Junior Data Scientist",
    metaDescription:
      "Portfolio of Esau Carvajal, a civil engineer specialized in data analysis and visualization.",
    socialTitle: "Esau Carvajal | Data Scientist (Junior)",
    socialDescription:
      "Portfolio of Esaú Carvajal, a civil engineer specialized in data analysis and visualization.",
    switchAriaLabel: "Switch language to Spanish",
    navProjects: "PROJECTS",
    navContact: "CONTACT",
    logoAlt: "Esau Logo",
    heroAvatarAlt: "Esau avatar",
    heroGreeting: "Hi, I'm Esau",
    heroLine1: "I build data solutions",
    heroLine2: "powered by AI.",
    heroDescription: "An engineer focused on data analysis and visualization.",
    heroChatPrompt: "If you want to know more about me, talk to Topi. It's at the bottom right :).",
    heroCta: "Shall we work together?",
    projectsTitle: "Projects",
    projectsDescription:
      "Here are some of the projects I have worked on. If any of them catch your attention and you want to know more, ask Topi or, even better, let's talk and I will tell you all about them.",
    projectTitles: [
      "Topi: Portfolio Chatbot Assistant (llama-3.1-8b-instant)",
      "Kurobri: Satellite NDVI Monitoring for Banana Crops",
      "Daycare Admission Prediction: Random Forest vs Neural Networks",
      "Vehicle Classification with Machine Learning",
      "Lujo Fragancias (SEO website)"
    ],
    projectStacks: [
      "Groq, Cloudflare Workers, JS, CSS",
      "AWS, HTML, CSS, JS, PHP, SQL",
      "Python (Pandas, Scikit-Learn, TensorFlow)",
      "Python (Pandas, Matplotlib, Scikit-Learn)",
      "HTML, CSS, JS"
    ],
    footerTemplate:
      'Copyright &copy; Communitypro <span id="datee"></span>, all rights reserved.'
  }
};

const pageNodes = {
  title: document.querySelector("title"),
  metaTitle: document.querySelector('meta[name="title"]'),
  metaDescription: document.querySelector('meta[name="description"]'),
  ogTitle: document.querySelector('meta[property="og:title"]'),
  ogDescription: document.querySelector('meta[property="og:description"]'),
  twitterTitle: document.querySelector('meta[property="twitter:title"]'),
  twitterDescription: document.querySelector('meta[property="twitter:description"]'),
  navProjects: document.querySelector('.nav-menu .nav-link[href="#projects"]'),
  navContact: document.querySelector(".nav-menu .btn.btn-primary"),
  logoImage: document.querySelector("#logo img"),
  profileImage: document.querySelector(".profile-image"),
  heroGreeting: document.querySelector(".header-container h1"),
  heroCta: document.querySelector(".header-container .btn.btn-secondary"),
  projectsTitle: document.querySelector("#projects > .content-text h2"),
  projectsDescription: document.querySelector("#projects > .content-text p"),
  footer: document.querySelector("#footer p")
};

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function applyLanguage(language) {
  const copy = PAGE_TRANSLATIONS[language] || PAGE_TRANSLATIONS.es;

  document.documentElement.lang = copy.htmlLang;
  document.documentElement.removeAttribute("data-theme");
  window.portfolioLanguage = language;

  if (toggleSwitch) {
    toggleSwitch.checked = language === "en";
    toggleSwitch.setAttribute("aria-label", copy.switchAriaLabel);
    toggleSwitch.title = copy.switchAriaLabel;
  }

  pageNodes.title.textContent = copy.title;
  pageNodes.metaTitle.setAttribute("content", copy.metaTitle);
  pageNodes.metaDescription.setAttribute("content", copy.metaDescription);
  pageNodes.ogTitle.setAttribute("content", copy.socialTitle);
  pageNodes.ogDescription.setAttribute("content", copy.socialDescription);
  pageNodes.twitterTitle.setAttribute("content", copy.socialTitle);
  pageNodes.twitterDescription.setAttribute("content", copy.socialDescription);
  pageNodes.navProjects.textContent = copy.navProjects;
  pageNodes.navContact.innerHTML = `${copy.navContact}<i class="fas fa-arrow-right"></i>`;
  pageNodes.logoImage.alt = copy.logoAlt;
  pageNodes.profileImage.alt = copy.heroAvatarAlt;
  pageNodes.heroGreeting.textContent = copy.heroGreeting;
  heroLines[0].textContent = copy.heroLine1;
  heroLines[1].textContent = copy.heroLine2;
  heroParagraphs[0].textContent = copy.heroDescription;
  heroParagraphs[1].textContent = copy.heroChatPrompt;
  pageNodes.heroCta.textContent = copy.heroCta;
  pageNodes.projectsTitle.textContent = copy.projectsTitle;
  pageNodes.projectsDescription.textContent = copy.projectsDescription;

  projectTitles.forEach((node, index) => {
    node.textContent = copy.projectTitles[index];
  });

  projectStacks.forEach((node, index) => {
    node.textContent = copy.projectStacks[index];
  });

  pageNodes.footer.innerHTML = copy.footerTemplate;
  updateYear();

  localStorage.removeItem("theme");
  localStorage.setItem("language", language);
  window.dispatchEvent(
    new CustomEvent("portfolio-language-change", {
      detail: { language }
    })
  );
}

function updateYear() {
  const myDate = document.querySelector("#datee");
  if (myDate) {
    myDate.textContent = new Date().getFullYear();
  }
}

window.getPortfolioLanguage = function () {
  return window.portfolioLanguage === "en" ? "en" : "es";
};

if (toggleSwitch) {
  toggleSwitch.addEventListener("change", function (event) {
    applyLanguage(event.target.checked ? "en" : "es");
  });
}

const savedLanguage = localStorage.getItem("language");
const initialLanguage = savedLanguage === "en" ? "en" : "es";
applyLanguage(initialLanguage);
