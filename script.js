const TOOLS = [
  // Поиск и мониторинг
  {
    category: "Поиск и мониторинг",
    name: "Google",
    url: "https://www.google.com/",
    icon: "G",
    description: "Поисковая система."
  },
  {
    category: "Поиск и мониторинг",
    name: "Yandex",
    url: "https://yandex.com/",
    icon: "Я",
    description: "Поиск и веб-сервисы."
  },
  {
    category: "Поиск и мониторинг",
    name: "DuckDuckGo",
    url: "https://duckduckgo.com/",
    icon: "D",
    description: "Поиск."
  },
  {
    category: "Поиск и мониторинг",
    name: "Brave Search",
    url: "https://search.brave.com/",
    icon: "B",
    description: "Независимый поиск."
  },
  {
    category: "Поиск и мониторинг",
    name: "SearXNG",
    url: "https://searx.space/",
    icon: "S",
    description: "Метапоиск."
  },
  {
    category: "Поиск и мониторинг",
    name: "Startpage",
    url: "https://www.startpage.com/",
    icon: "S",
    description: "Приватный поиск."
  },
  {
    category: "Поиск и мониторинг",
    name: "Google Scholar",
    url: "https://scholar.google.com/",
    icon: "G",
    description: "Научный поиск."
  },
  {
    category: "Поиск и мониторинг",
    name: "arXiv",
    url: "https://arxiv.org/",
    icon: "X",
    description: "Научные публикации."
  },

  // Люди и контакты
  {
    category: "Люди и контакты",
    name: "Hunter",
    url: "https://hunter.io/",
    icon: "H",
    description: "Поиск рабочих email-адресов."
  },
  {
    category: "Люди и контакты",
    name: "Have I Been Pwned",
    url: "https://haveibeenpwned.com/",
    icon: "P",
    description: "Проверка, появлялись ли аккаунты в утечках данных."
  },
  {
    category: "Люди и контакты",
    name: "Truecaller",
    url: "https://www.truecaller.com/",
    icon: "P",
    description: "База данных для поиска номеров телефонов."
  },
    {
    category: "Люди и контакты",
    name: "SMSC HLR Lookup",
    url: "https://smsc.ru/testhlr/",
    icon: "P",
    description: "Проверка номера телефона и его оператора."
  },
    {
    category: "Люди и контакты",
    name: "E-Caller",
    url: "https://www.e-caller.com/",
    icon: "P",
    description: "Проверка номера телефона и его оператора"
  },
   {
    category: "Люди и контакты",
    name: "HackCheck",
    url: "https://hackcheck.io/",
    icon: "P",
    description: "Проверка утечек данных и поиск информации о пользователях."
  },
   {
    category: "Люди и контакты",
    name: "Dehashed",
    url: "https://www.dehashed.com/",
    icon: "P",
    description: "Проверка утечек данных и поиск информации о пользователях."
  },
   {
    category: "Люди и контакты",
    name: "OSINTKit",
    url: "https://osintkit.net/",
    icon: "P",
    description: "Проверка утечек данных и поиск информации о русских жителях, совершивших преступления в Украине."
  },
  
  // Соцсети и мессенджеры
  {
    category: "Соцсети и мессенджеры",
    name: "TGCollector",
    url: "https://www.tgcollector.com/",
    icon: "T",
    description: "Сбор данных из Telegram."
  },
  {
    category: "Соцсети и мессенджеры",
    name: "TgramSearch",
    url: "https://tgramsearch.com/",
    icon: "R",
    description: "Удобный поиск по Telegram-каналам и группам."
  },
  {
    category: "Соцсети и мессенджеры",
    name: "Telescan",
    url: "https://github.com/pielco11/telescan",
    icon: "T",
    description: "Инструмент для анализа Telegram-каналов и групп."
  },
    {
    category: "Соцсети и мессенджеры",
    name: "Signal",
    url: "https://signal.org/",
    icon: "S",
    description: "Мессенджер с открытым исходным кодом и сквозным шифрованием."
  },

  // Домены, сеть и угрозы
  {
    category: "Домены, сеть и угрозы",
    name: "who.is",
    url: "https://who.is/",
    icon: "W",
    description: "Информация о владельцах доменов и IP-адресах."
  },
  {
    category: "Домены, сеть и угрозы",
    name: "onion lookup",
    url: "https://onion.ail-project.org/",
    icon: "O",
    description: "Поиск информации о .onion доменах и их владельцах."
  },
  {
    category: "Домены, сеть и угрозы",
    name: "VirusTotal",
    url: "https://www.virustotal.com/",
    icon: "V",
    description: "Анализ файлов, URL и доменов."
  },

  // Гео и объекты
  {
    category: "Гео и объекты",
    name: "OpenStreetMap",
    url: "https://www.openstreetmap.org/",
    icon: "M",
    description: "Открытая карта."
  },
  {
    category: "Гео и объекты",
    name: "Google Maps",
    url: "https://maps.google.com/",
    icon: "M",
    description: "Карта и спутниковые снимки."
  },
  {
    category: "Гео и объекты",
    name: "2GIS",
    url: "https://2gis.ru/",
    icon: "2",
    description: "Карта и справочник организаций."
  },
  {
    category: "Гео и объекты",
    name: "Автокод",
    url: "https://avtocod.ru/",
    icon: "2",
    description: "Проверка автомобилей по VIN, гос. номеру и другим параметрам."
  },
  {
    category: "Гео и объекты",
    name: "Nperf 5G Coverage Map",
    url: "https://www.nperf.com/en/map/5g",
    icon: "2",
    description: "Карта покрытия 5G в разных странах."
  },
    {
    category: "Гео и объекты",
    name: "Alerts.in.ua",
    url: "https://alerts.in.ua/",
    icon: "2",
    description: "Карта боевых действий в Украине."
  },

  // Медиа и файлы
  {
    category: "Медиа и файлы",
    name: "ExifTool",
    url: "https://exiftool.org/",
    icon: "E",
    description: "Метаданные файлов."
  },
  {
    category: "Медиа и файлы",
    name: "InVID",
    url: "https://www.invid-project.eu/",
    icon: "I",
    description: "Анализ и проверка видео."
  },

  // Реестры и бизнес
  {
    category: "Реестры и бизнес",
    name: "OpenCorporates",
    url: "https://opencorporates.com/",
    icon: "O",
    description: "Данные о компаниях."
  },

  // Крипто и блокчейн
  {
    category: "Крипто и блокчейн",
    name: "Etherscan",
    url: "https://etherscan.io/",
    icon: "Ξ",
    description: "Ethereum explorer."
  },
  {
    category: "Крипто и блокчейн",
    name: "Blockchain.com Explorer",
    url: "https://www.blockchain.com/explorer",
    icon: "₿",
    description: "Blockchain explorer."
  },

  // Рабочая среда
  {
    category: "Рабочая среда",
    name: "ZodiacGraph",
    url: "https://zodiacgraph.netlify.app/",
    icon: "Z",
    description: "Инструмент для визуализации связей и анализа данных."
  },
  {
    category: "Рабочая среда",
    name: "Obsidian",
    url: "https://obsidian.md/",
    icon: "O",
    description: "Мощный инструмент для заметок и организации знаний."
  },
  {
    category: "Рабочая среда",
    name: "Miro",
    url: "https://miro.com/",
    icon: "M",
    description: "Платформа для совместной работы и визуализации идей."
  },
  {
    category: "Рабочая среда",
    name: "OSINT Framework",
    url: "https://osintframework.com/",
    icon: "M",
    description: "Фреймворк для OSINT-ресурсов и инструментов."
  },

  // Искусственный интеллект
  {
    category: "Искусственный интеллект",
    name: "Hugging Face",
    url: "https://huggingface.co/",
    icon: "HF",
    description: "Модели и AI-инструменты."
  },

  // OPSEC и обучение
  {
    category: "OPSEC и обучение",
    name: "OWASP",
    url: "https://owasp.org/",
    icon: "O",
    description: "Безопасность и обучение."
  },
  {
    category: "OPSEC и обучение",
    name: "Tor",
    url: "https://torproject.org/",
    icon: "T",
    description: "Анонимный доступ и защита конфиденциальности."
  },

  // Код и репозитории
  {
    category: "Код и репозитории",
    name: "Nmap",
    url: "https://nmap.org/book/man.html",
    icon: "N",
    description: "Сканирование сетей и анализ уязвимостей."
  },
  {
    category: "Код и репозитории",
    name: "ISC SANS",
    url: "https://isc.sans.edu/rssfeed_full.xml",
    icon: "I",
    description: "Новости и анализ по кибербезопасности."
  },
  {
    category: "Код и репозитории",
    name: "GitHub",
    url: "https://github.com/",
    icon: "GH",
    description: "Репозитории и код."
  },
  {
    category: "Код и репозитории",
    name: "GitLab",
    url: "https://gitlab.com/",
    icon: "GL",
    description: "Репозитории и CI/CD."
  },

  // Дорки
  {
    category: "Дорки",
    name: "Google Advanced Search",
    url: "https://www.google.com/advanced_search",
    icon: "G",
    description: "Расширенный поиск."
  },

  // Порты
  {
    category: "Порты",
    name: "Shodan",
    url: "https://www.shodan.io/",
    icon: "S",
    description: "Поиск публично доступных сервисов."
  },
  {
    category: "Порты",
    name: "Censys",
    url: "https://search.censys.io/",
    icon: "C",
    description: "Поиск интернет-хостов и сертификатов."
  },

  // Зеркала
  {
    category: "Зеркала",
    name: "FindHomo",
    url: "https://www.findhomo.com/",
    icon: "З",
    description: "Поиск людей и открытых данных по профильным записям."
  },
  {
    category: "Зеркала",
    name: "FunStat/Telelog",
    url: "https://funstat.info/",
    icon: "З",
    description: "Анализ Telegram-каналов, групп и статистики активности аудитории."
  },

  // Веб-архивы
  {
    category: "Веб-архивы",
    name: "Archive.today",
    url: "https://archive.today/",
    icon: "A",
    description: "Архив веб-страниц."
  },
  {
    category: "Веб-архивы",
    name: "Wayback Machine",
    url: "https://web.archive.org/",
    icon: "W",
    description: "Веб-архив."
  }
];

const state = {
  category: "all",
  query: "",
  alphabetical: true
};

const CATEGORY_TRANSLATIONS = {
  ru: {
    "Поиск и мониторинг": "Поиск и мониторинг",
    "Люди и контакты": "Люди и контакты",
    "Соцсети и мессенджеры": "Соцсети и мессенджеры",
    "Домены, сеть и угрозы": "Домены, сеть и угрозы",
    "Гео и объекты": "Гео и объекты",
    "Медиа и файлы": "Медиа и файлы",
    "Реестры и бизнес": "Реестры и бизнес",
    "Крипто и блокчейн": "Крипто и блокчейн",
    "Рабочая среда": "Рабочая среда",
    "Искусственный интеллект": "Искусственный интеллект",
    "OPSEC и обучение": "OPSEC и обучение",
    "Код и репозитории": "Код и репозитории",
    "Дорки": "Дорки",
    "Порты": "Порты",
    "Зеркала": "Зеркала",
    "Веб-архивы": "Веб-архивы"
  },
  en: {
    "Поиск и мониторинг": "Search & Monitoring",
    "Люди и контакты": "People & Contacts",
    "Соцсети и мессенджеры": "Social Networks & Messengers",
    "Домены, сеть и угрозы": "Domains, Network & Threats",
    "Гео и объекты": "Geo & Places",
    "Медиа и файлы": "Media & Files",
    "Реестры и бизнес": "Registries & Business",
    "Крипто и блокчейн": "Crypto & Blockchain",
    "Рабочая среда": "Workspace",
    "Искусственный интеллект": "Artificial Intelligence",
    "OPSEC и обучение": "OPSEC & Training",
    "Код и репозитории": "Code & Repositories",
    "Дорки": "Dorks",
    "Порты": "Ports",
    "Зеркала": "Mirrors",
    "Веб-архивы": "Web Archives"
  }
};

const UI_TEXT = {
  ru: {
    categories: "Категории",
    allTools: "Все инструменты",
    heroText: "Лёгкий каталог инструментов для команды.",
    toolsText: "инструментов",
    categoriesText: "категорий",
    searchPlaceholder: "Поиск инструмента...",
    emptyTitle: "Ничего не найдено",
    emptyText: "Попробуй изменить запрос или выбрать другую категорию.",
    telegramLink: "Telegram-канал",
    sortLabel: "A–Я"
  },
  en: {
    categories: "Categories",
    allTools: "All tools",
    heroText: "A lightweight OSINT tool catalog for the team.",
    toolsText: "tools",
    categoriesText: "categories",
    searchPlaceholder: "Search tool...",
    emptyTitle: "Nothing found",
    emptyText: "Try a different query or choose another category.",
    telegramLink: "Telegram channel",
    sortLabel: "A–Z"
  }
};

const TOOL_NAMES_EN = {
  "Автокод": "Avtocod",
  "E-Caller": "E-Caller",
  "HackCheck": "HackCheck",
  "Dehashed": "Dehashed",
  "OSINTKit": "OSINTKit",
  "TGCollector": "TGCollector",
  "TgramSearch": "TgramSearch",
  "Telescan": "Telescan",
  "FindHomo": "FindHomo",
  "FunStat/Telelog": "FunStat/Telelog",
  "Зеркало": "Mirror"
};

const TOOL_DESCRIPTIONS_EN = {
  "Google": "Search engine.",
  "Yandex": "Search and web services.",
  "DuckDuckGo": "Search engine.",
  "Brave Search": "Independent search engine.",
  "SearXNG": "Meta-search engine.",
  "Startpage": "Private search engine.",
  "Google Scholar": "Academic search.",
  "arXiv": "Research publications.",
  "Hunter": "Find professional email addresses.",
  "Have I Been Pwned": "Check whether accounts have appeared in data breaches.",
  "Truecaller": "Phone number lookup database.",
  "SMSC HLR Lookup": "Check a phone number and its carrier.",
  "E-Caller": "Check a phone number and its operator.",
  "HackCheck": "Check data leaks and user information.",
  "Dehashed": "Search data leaks and user records.",
  "OSINTKit": "Search breach data and information about Russian citizens involved in crimes in Ukraine.",
  "TGCollector": "Collect data from Telegram.",
  "TgramSearch": "Search Telegram channels and groups.",
  "Telescan": "Analyze Telegram channels and groups.",
  "Signal": "Open-source messaging app with end-to-end encryption.",
  "who.is": "Domain and IP address ownership information.",
  "onion lookup": "Find information about .onion domains and their owners.",
  "VirusTotal": "Analyze files, URLs, and domains.",
  "OpenStreetMap": "Open map.",
  "Google Maps": "Maps and satellite imagery.",
  "2GIS": "Map and business directory.",
  "Автокод": "Vehicle check by VIN, license plate and other parameters.",
  "Nperf 5G Coverage Map": "5G coverage map across countries.",
  "Alerts.in.ua": "Map of combat actions in Ukraine.",
  "ExifTool": "File metadata.",
  "InVID": "Video analysis and verification.",
  "OpenCorporates": "Company data.",
  "Etherscan": "Ethereum explorer.",
  "Blockchain.com Explorer": "Blockchain explorer.",
  "ZodiacGraph": "Visualize connections and analyze data.",
  "Obsidian": "Note-taking and knowledge management.",
  "Miro": "Collaborative workspace for visualizing ideas.",
  "OSINT Framework": "OSINT resource and tool framework.",
  "Hugging Face": "AI models and tools.",
  "OWASP": "Security resources and training.",
  "Tor": "Anonymous access and privacy protection.",
  "Nmap": "Network scanning and vulnerability analysis.",
  "ISC SANS": "Cybersecurity news and analysis.",
  "GitHub": "Code and repositories.",
  "GitLab": "Repositories and CI/CD.",
  "Google Advanced Search": "Advanced search.",
  "Shodan": "Find publicly accessible internet-connected services.",
  "Censys": "Search internet hosts and certificates.",
  "FindHomo": "People search and profile data discovery service.",
  "FunStat/Telelog": "Telegram channel and group analytics with audience and activity statistics.",
  "Зеркало": "Mirror view for reading and analyzing web pages.",
  "Archive.today": "Web page archive.",
  "Wayback Machine": "Web archive."
};

function getToolName(tool) {
  if (getCurrentLanguage() === "en") {
    return TOOL_NAMES_EN[tool.name] || tool.name;
  }

  return tool.name;
}

function getToolDescription(tool) {
  if (getCurrentLanguage() === "en") {
    return TOOL_DESCRIPTIONS_EN[tool.name] || tool.description || "";
  }

  return tool.description || "";
}

function getCurrentLanguage() {
  return document.body.dataset.lang || "ru";
}

function translateCategory(category) {
  return CATEGORY_TRANSLATIONS[getCurrentLanguage()][category] || category;
}

function applyLanguage(lang) {
  const textBundle = UI_TEXT[lang] || UI_TEXT.ru;

  document.body.dataset.lang = lang;
  document.documentElement.lang = lang === "en" ? "en" : "ru";

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.textContent = lang === "en" ? "RU" : "EN";
  }

  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.dataset.i18n;
    if (textBundle[key]) {
      node.textContent = textBundle[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
    const key = node.dataset.i18nPlaceholder;
    if (textBundle[key]) {
      node.placeholder = textBundle[key];
    }
  });

  const sortBtn = document.getElementById("sortBtn");
  if (sortBtn) {
    sortBtn.textContent = textBundle.sortLabel;
  }

  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    const isLight = document.body.classList.contains("light");
    themeBtn.title = lang === "en" ? "Toggle theme" : "Переключить тему";
    themeBtn.setAttribute("aria-label", lang === "en" ? "Toggle theme" : "Переключить тему");
    themeBtn.setAttribute("aria-pressed", String(isLight));
  }

  render();
}

const catalog = document.getElementById("catalog");
const categoryNav = document.getElementById("categoryNav");
const searchInput = document.getElementById("searchInput");
const empty = document.getElementById("empty");
const toolCount = document.getElementById("toolCount");
const categoryCount = document.getElementById("categoryCount");
const allCount = document.getElementById("allCount");

const categories = [...new Set(TOOLS.map(tool => tool.category))];

function getCategoryCounts() {
  return categories.reduce((result, category) => {
    result[category] = TOOLS.filter(tool => tool.category === category).length;
    return result;
  }, {});
}

function renderCategoryNav() {
  const counts = getCategoryCounts();

  categoryNav.innerHTML = categories.map(category => `
    <button class="category ${state.category === category ? "active" : ""}"
            data-category="${escapeHtml(category)}">
      <span>${escapeHtml(translateCategory(category))}</span>
      <span class="count">${counts[category]}</span>
    </button>
  `).join("");

  document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      render();
    });
  });

  allCount.textContent = TOOLS.length;
}

function filteredTools() {
  const query = state.query.toLowerCase().trim();

  let result = TOOLS.filter(tool => {
    const categoryMatch =
      state.category === "all" || tool.category === state.category;

    const searchMatch =
      !query ||
      getToolName(tool).toLowerCase().includes(query) ||
      (tool.description || "").toLowerCase().includes(query) ||
      getToolDescription(tool).toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query);

    return categoryMatch && searchMatch;
  });

  if (state.alphabetical) {
    result = [...result].sort((a, b) =>
      getToolName(a).localeCompare(getToolName(b), undefined, { sensitivity: "base" })
    );
  }

  return result;
}

function render() {
  renderCategoryNav();

  const tools = filteredTools();
  const grouped = {};

  tools.forEach(tool => {
    if (!grouped[tool.category]) grouped[tool.category] = [];
    grouped[tool.category].push(tool);
  });

  catalog.innerHTML = Object.entries(grouped).map(([category, items]) => `
    <section class="category-block">
      <div class="category-heading">
        <h2>${escapeHtml(translateCategory(category))}</h2>
        <span>${items.length}</span>
      </div>

      <div class="tools">
        ${items.map(tool => `
          <a class="tool"
             href="${escapeAttribute(tool.url)}"
             target="_blank"
             rel="noopener noreferrer">
            <div class="tool-icon">${escapeHtml(tool.icon || "⌁")}</div>
            <div class="tool-body">
              <div class="tool-name">${escapeHtml(getToolName(tool))}</div>
              <div class="tool-desc">${escapeHtml(getToolDescription(tool))}</div>
              <div class="tool-url">${escapeHtml(new URL(tool.url).hostname)}</div>
            </div>
          </a>
        `).join("")}
      </div>
    </section>
  `).join("");

  empty.classList.toggle("hidden", tools.length !== 0);

  toolCount.textContent = tools.length;
  categoryCount.textContent = categories.length;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  render();
});

const langToggle = document.getElementById("langToggle");

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLang = getCurrentLanguage() === "en" ? "ru" : "en";
    applyLanguage(nextLang);
  });
}

applyLanguage("ru");

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  themeBtn.setAttribute("aria-pressed", String(isLight));
  localStorage.setItem("osint-theme", isLight ? "light" : "dark");
});

if (localStorage.getItem("osint-theme") === "light") {
  document.body.classList.add("light");
  themeBtn.setAttribute("aria-pressed", "true");
}

document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }

  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    state.query = "";
    render();
    searchInput.blur();
  }
});

render();