/* ============================================================
   Noor Tales — Application script
   Pure vanilla JS, no build step. Runs from file:// directly.
   Depends on globals from /data: I18N, VIRTUES, PEOPLE,
   SOURCE_GROUPS, STORIES.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Language & direction ---------- */
  const LANGS = ["en", "ar"];
  const params = new URLSearchParams(location.search);
  const lang = LANGS.includes(params.get("lang")) ? params.get("lang") : "en";
  const isAr = lang === "ar";

  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? "rtl" : "ltr";

  /* t("key") -> UI string in current language; %n substitution via tn() */
  function t(key) {
    const entry = I18N[key];
    if (!entry) return key;
    return entry[lang] || entry.en;
  }
  function tn(key, n) { return t(key).replace("%n", n); }
  /* loc({en, ar}) -> localized field from data objects */
  function loc(obj) { return (obj && (obj[lang] || obj.en)) || ""; }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[c]);
  }

  /* Build an internal URL preserving the current language */
  function url(page, extra) {
    const u = new URLSearchParams();
    if (extra) for (const [k, v] of Object.entries(extra)) if (v) u.set(k, v);
    if (lang !== "en") u.set("lang", lang);
    const q = u.toString();
    return page + (q ? "?" + q : "");
  }

  /* Current URL with the language swapped (for the toggle) */
  function langSwapUrl() {
    const u = new URLSearchParams(location.search);
    const other = isAr ? "en" : "ar";
    if (other === "en") u.delete("lang"); else u.set("lang", other);
    const q = u.toString();
    const file = location.pathname.split("/").pop() || "index.html";
    return file + (q ? "?" + q : "");
  }

  function virtueById(id) { return VIRTUES.find(v => v.id === id); }
  function peopleById(id) { return PEOPLE.find(p => p.id === id); }

  /* ---------- Shared SVG marks ---------- */
  const LOGO_SVG =
    '<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M27 20a11 11 0 1 1-8.2-14.6A12.5 12.5 0 0 0 27 20z" fill="#d7b967"/>' +
    '<path d="M29 8l1.1 2.6L32.7 12l-2.6 1.1L29 15.7l-1.1-2.6L25.3 12l2.6-1.4z" fill="#d7b967"/>' +
    "</svg>";

  const STAR_SVG =
    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor">' +
    '<path d="M12 1l2.4 6.1L20 4.9l-2.2 5.6L24 12l-6.2 1.5L20 19.1l-5.6-2.2L12 23l-2.4-6.1L4 19.1l2.2-5.6L0 12l6.2-1.5L4 4.9l5.6 2.2z" opacity=".9"/>' +
    "</svg>";

  const SOCIAL = [
    { name: "X",         href: "#", path: "M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L2.8 2h6.5l4.4 5.9zm-1.1 18h1.7L7.4 3.8H5.6z" },
    { name: "Instagram", href: "#", path: "M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.5-.1 4.8c-.1 3.2-1.6 4.8-4.9 4.9-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.5 2.2 15.2 2.2 12s0-3.5.1-4.8C2.4 4 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 2.3c-3.1 0-3.5 0-4.7.1-2.2.1-3 .9-3.1 3.1-.1 1.2-.1 1.6-.1 4.4s0 3.2.1 4.4c.1 2.2.9 3 3.1 3.1 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c2.2-.1 3-.9 3.1-3.1.1-1.2.1-1.6.1-4.4s0-3.2-.1-4.4c-.1-2.2-.9-3-3.1-3.1-1.2-.1-1.6-.1-4.7-.1zm0 3.4a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2zm0 2.3a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zm5.4-3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" },
    { name: "YouTube",   href: "#", path: "M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.6 3.6 12 3.6 12 3.6s-4.6 0-7.7.3c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.8 9.1.8 11v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.9.2 7.6.3 7.6.3s4.6 0 7.7-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.7 15.1V8.5l6.3 3.3z" }
  ];

  function ornament() {
    return '<div class="ornament" aria-hidden="true">' + STAR_SVG + "</div>";
  }

  /* ---------- Header & footer (injected once, defined here only) ---------- */
  const NAV_ITEMS = [
    ["index.html",   "nav.home"],
    ["stories.html", "nav.stories"],
    ["virtues.html", "nav.virtues"],
    ["sources.html", "nav.sources"],
    ["about.html",   "nav.about"],
    ["contact.html", "nav.contact"]
  ];

  function currentPageFile() {
    return (location.pathname.split("/").pop() || "index.html").toLowerCase();
  }

  function renderHeader() {
    const host = document.getElementById("site-header");
    if (!host) return;
    const cur = currentPageFile();
    const links = NAV_ITEMS.map(([page, key]) =>
      '<li><a href="' + url(page) + '"' +
      (page === cur ? ' aria-current="page"' : "") + ">" + esc(t(key)) + "</a></li>"
    ).join("");
    host.innerHTML =
      '<header class="site-header"><div class="container">' +
      '<a class="brand" href="' + url("index.html") + '">' + LOGO_SVG +
      '<span class="brand-name">' + esc(t("site.name")) + "</span></a>" +
      '<nav class="site-nav" aria-label="' + esc(t("nav.menu")) + '"><ul>' + links + "</ul></nav>" +
      '<a class="lang-toggle" href="' + langSwapUrl() + '" lang="' + (isAr ? "en" : "ar") + '" ' +
      'aria-label="' + esc(t("lang.toggleLabel")) + '">' + esc(t("lang.toggle")) + "</a>" +
      "</div></header>";
  }

  function renderFooter() {
    const host = document.getElementById("site-footer");
    if (!host) return;
    const links = NAV_ITEMS.map(([page, key]) =>
      '<li><a href="' + url(page) + '">' + esc(t(key)) + "</a></li>"
    ).join("");
    host.innerHTML =
      '<footer class="site-footer"><div class="container">' +
      '<p class="footer-tagline">' + esc(t("footer.tagline")) + "</p>" +
      "<nav><ul>" + links + "</ul></nav>" +
      '<p class="footer-copy">' + esc(tn("footer.rights", new Date().getFullYear())) + "</p>" +
      "</div></footer>";
  }

  /* ---------- Shared card renderers ---------- */
  function virtueBadge(vid) {
    const v = virtueById(vid);
    if (!v) return "";
    return '<a class="badge" href="' + url("stories.html", { virtue: v.id }) + '">' +
      '<span aria-hidden="true">' + v.icon + "</span>" + esc(loc(v.name)) + "</a>";
  }

  function peopleBadge(pid) {
    const p = peopleById(pid);
    if (!p) return "";
    return '<a class="badge badge-people" href="' + url("stories.html", { people: p.id }) + '">' +
      '<span aria-hidden="true">' + p.icon + "</span>" + esc(loc(p.name)) + "</a>";
  }

  function storyCard(s) {
    const storyUrl = url("story.html", { id: s.id });
    return '<article class="story-card"><div class="story-card-body">' +
      '<div class="card-meta">' + peopleBadge(s.peopleCategory) +
      s.virtues.map(virtueBadge).join("") + "</div>" +
      '<h3><a href="' + storyUrl + '">' + esc(loc(s.title)) + "</a></h3>" +
      '<p class="excerpt">' + esc(loc(s.excerpt)) + "</p>" +
      '<a class="read-link" href="' + storyUrl + '">' + esc(t("home.readStory")) +
      (isAr ? " ←" : " →") + "</a>" +
      "</div></article>";
  }

  /* ---------- Page: Home ---------- */
  function renderHome(main) {
    const featured = STORIES.filter(s => s.featured);
    main.innerHTML =
      '<section class="hero"><div class="container">' +
      '<p class="hero-kicker">' + esc(t("home.heroKicker")) + "</p>" +
      "<h1>" + esc(t("site.name")) + "</h1>" +
      ornament() +
      '<p class="hero-tagline">' + esc(t("site.tagline")) + "</p>" +
      '<a class="btn" href="' + url("stories.html") + '">' + esc(t("home.cta.stories")) + "</a>" +
      "</div></section>" +

      '<section class="section"><div class="container">' +
      '<h2 class="section-title">' + esc(t("home.browseTitle")) + "</h2>" + ornament() +
      '<div class="entry-grid">' +
      '<a class="entry-card" href="' + url("virtues.html") + '">' +
      "<h3>" + esc(t("home.byVirtue")) + "</h3><p>" + esc(t("home.byVirtueDesc")) + "</p></a>" +
      '<a class="entry-card" href="' + url("stories.html") + '">' +
      "<h3>" + esc(t("home.byPeople")) + "</h3><p>" + esc(t("home.byPeopleDesc")) + "</p></a>" +
      "</div></div></section>" +

      '<section class="section"><div class="container">' +
      '<h2 class="section-title">' + esc(t("home.featured")) + "</h2>" + ornament() +
      '<div class="card-grid">' + featured.map(storyCard).join("") + "</div>" +
      "</div></section>";
  }

  /* ---------- Page: Stories (dual filters + search, URL-reflected) ---------- */
  function renderStoriesPage(main) {
    const state = {
      people: params.get("people") || "",
      virtues: (params.get("virtue") || "").split(",").filter(Boolean),
      q: params.get("q") || ""
    };

    main.innerHTML =
      '<section class="section"><div class="container">' +
      '<h1 class="section-title">' + esc(t("stories.title")) + "</h1>" + ornament() +
      '<p class="section-intro">' + esc(t("stories.intro")) + "</p>" +
      '<div class="filters">' +
      '<div><div class="filter-group-label" id="people-label">' + esc(t("stories.byPeople")) + "</div>" +
      '<div class="people-tabs" role="group" aria-labelledby="people-label" id="people-tabs"></div></div>' +
      '<div><div class="filter-group-label" id="virtue-label">' + esc(t("stories.byVirtue")) + "</div>" +
      '<div class="virtue-chips" role="group" aria-labelledby="virtue-label" id="virtue-chips"></div></div>' +
      '<div class="search-row">' +
      '<input type="search" class="search-input" id="search-input" placeholder="' + esc(t("stories.search")) +
      '" aria-label="' + esc(t("stories.searchLabel")) + '" value="' + esc(state.q) + '">' +
      '<button type="button" class="clear-btn" id="clear-filters">' + esc(t("stories.clear")) + "</button>" +
      "</div></div>" +
      '<p class="result-count" id="result-count" role="status"></p>' +
      '<div class="card-grid" id="stories-grid"></div>' +
      "</div></section>";

    const tabsHost  = document.getElementById("people-tabs");
    const chipsHost = document.getElementById("virtue-chips");
    const grid      = document.getElementById("stories-grid");
    const countEl   = document.getElementById("result-count");
    const searchEl  = document.getElementById("search-input");

    function syncUrl() {
      const u = new URLSearchParams();
      if (state.people) u.set("people", state.people);
      if (state.virtues.length) u.set("virtue", state.virtues.join(","));
      if (state.q) u.set("q", state.q);
      if (lang !== "en") u.set("lang", lang);
      const q = u.toString();
      history.replaceState(null, "", location.pathname + (q ? "?" + q : ""));
    }

    function matches(s) {
      if (state.people && s.peopleCategory !== state.people) return false;
      if (state.virtues.length && !state.virtues.every(v => s.virtues.includes(v))) return false;
      if (state.q) {
        /* search across both languages so a query works regardless of UI language */
        const hay = (s.title.en + " " + s.title.ar + " " + s.excerpt.en + " " + s.excerpt.ar).toLowerCase();
        if (!hay.includes(state.q.toLowerCase())) return false;
      }
      return true;
    }

    function renderControls() {
      tabsHost.innerHTML =
        '<button type="button" class="tab" data-people="" aria-pressed="' + (!state.people) + '">' +
        esc(t("stories.all")) + "</button>" +
        PEOPLE.map(p =>
          '<button type="button" class="tab" data-people="' + p.id + '" aria-pressed="' +
          (state.people === p.id) + '"><span aria-hidden="true">' + p.icon + "</span> " +
          esc(loc(p.name)) + "</button>"
        ).join("");
      chipsHost.innerHTML = VIRTUES.map(v =>
        '<button type="button" class="chip" data-virtue="' + v.id + '" aria-pressed="' +
        state.virtues.includes(v.id) + '"><span aria-hidden="true">' + v.icon + "</span> " +
        esc(loc(v.name)) + "</button>"
      ).join("");
    }

    function renderGrid() {
      const list = STORIES.filter(matches);
      countEl.textContent = list.length === 1 ? t("stories.countOne") : tn("stories.count", list.length);
      grid.innerHTML = list.length
        ? list.map(storyCard).join("")
        : '<div class="empty-state" style="grid-column:1/-1">' + esc(t("stories.none")) + "</div>";
    }

    function refresh() { renderControls(); renderGrid(); syncUrl(); }

    tabsHost.addEventListener("click", e => {
      const btn = e.target.closest("[data-people]");
      if (!btn) return;
      state.people = btn.dataset.people;
      refresh();
    });
    chipsHost.addEventListener("click", e => {
      const btn = e.target.closest("[data-virtue]");
      if (!btn) return;
      const id = btn.dataset.virtue;
      state.virtues = state.virtues.includes(id)
        ? state.virtues.filter(v => v !== id)
        : state.virtues.concat(id);
      refresh();
    });
    searchEl.addEventListener("input", () => { state.q = searchEl.value.trim(); renderGrid(); syncUrl(); });
    document.getElementById("clear-filters").addEventListener("click", () => {
      state.people = ""; state.virtues = []; state.q = ""; searchEl.value = "";
      refresh();
    });

    refresh();
  }

  /* ---------- Page: Single story ---------- */
  function renderStoryPage(main) {
    const id = params.get("id");
    const idx = STORIES.findIndex(s => s.id === id);
    if (idx === -1) {
      main.innerHTML =
        '<section class="section"><div class="container story-page">' +
        '<div class="empty-state"><p>' + esc(t("story.notFound")) + "</p><p style='margin-top:1rem'>" +
        '<a class="btn btn-outline" href="' + url("stories.html") + '">' + esc(t("story.back")) + "</a></p></div>" +
        "</div></section>";
      return;
    }
    const s = STORIES[idx];
    document.title = loc(s.title) + " — " + t("site.name");

    const prev = STORIES[idx - 1];
    const next = STORIES[idx + 1];

    main.innerHTML =
      '<section class="section"><div class="container story-page">' +
      '<header class="story-header">' +
      '<div class="story-meta-row">' + peopleBadge(s.peopleCategory) + "</div>" +
      "<h1>" + esc(loc(s.title)) + "</h1>" + ornament() +
      '<div class="story-meta-row" aria-label="' + esc(t("story.virtues")) + '">' +
      s.virtues.map(virtueBadge).join("") + "</div>" +
      "</header>" +
      '<div class="story-body">' + loc(s.body) + "</div>" +
      '<aside class="story-aside"><h2>' + esc(t("story.sources")) + "</h2>" +
      '<ul class="sources-list">' + s.sources.map(src => "<li>" + esc(loc(src)) + "</li>").join("") + "</ul></aside>" +
      '<nav class="story-nav" aria-label="' + esc(t("story.back")) + '">' +
      (prev
        ? '<a href="' + url("story.html", { id: prev.id }) + '"><span class="nav-label">' +
          esc(t("story.prev")) + "</span>" + esc(loc(prev.title)) + "</a>"
        : "<span></span>") +
      '<a href="' + url("stories.html") + '"><span class="nav-label">&nbsp;</span>' + esc(t("story.back")) + "</a>" +
      (next
        ? '<a href="' + url("story.html", { id: next.id }) + '"><span class="nav-label">' +
          esc(t("story.next")) + "</span>" + esc(loc(next.title)) + "</a>"
        : "<span></span>") +
      "</nav></div></section>";
  }

  /* ---------- Page: Virtues ---------- */
  function renderVirtuesPage(main) {
    const cards = VIRTUES.map(v => {
      const count = STORIES.filter(s => s.virtues.includes(v.id)).length;
      const countText = count === 1 ? t("stories.countOne") : tn("stories.count", count);
      const otherName = isAr ? v.name.en : v.name.ar;
      return '<div class="virtue-card">' +
        '<span class="icon" aria-hidden="true">' + v.icon + "</span>" +
        "<h3>" + esc(loc(v.name)) + "</h3>" +
        '<span class="ar-name" lang="' + (isAr ? "en" : "ar") + '">' + esc(otherName) + "</span>" +
        "<p>" + esc(loc(v.description)) + "</p>" +
        '<span class="count">' + esc(countText) + "</span>" +
        '<a class="btn btn-outline" href="' + url("stories.html", { virtue: v.id }) + '">' +
        esc(t("virtues.viewStories")) + "</a>" +
        "</div>";
    }).join("");

    main.innerHTML =
      '<section class="section"><div class="container">' +
      '<h1 class="section-title">' + esc(t("virtues.title")) + "</h1>" + ornament() +
      '<p class="section-intro">' + t("virtues.intro") + "</p>" +
      '<div class="virtue-grid">' + cards + "</div>" +
      "</div></section>";
  }

  /* ---------- Page: Sources ---------- */
  function renderSourcesPage(main) {
    const groups = SOURCE_GROUPS.map(g =>
      '<section class="source-group"><h2>' + esc(loc(g.name)) + "</h2><ul>" +
      g.items.map(item => "<li>" + esc(loc(item)) + "</li>").join("") +
      "</ul></section>"
    ).join("");
    main.innerHTML =
      '<section class="section"><div class="container" style="max-width:760px">' +
      '<h1 class="section-title">' + esc(t("sources.title")) + "</h1>" + ornament() +
      '<p class="section-intro">' + esc(t("sources.intro")) + "</p>" +
      groups + "</div></section>";
  }

  /* ---------- Page: About ---------- */
  function renderAboutPage(main) {
    main.innerHTML =
      '<section class="section"><div class="container">' +
      '<h1 class="section-title">' + esc(t("about.title")) + "</h1>" + ornament() +
      '<div class="prose">' + t("about.body") + "</div>" +
      "</div></section>";
  }

  /* ---------- Page: Contact ---------- */
  function renderContactPage(main) {
    const social = SOCIAL.map(sc =>
      '<a href="' + sc.href + '" aria-label="' + esc(sc.name) + '">' +
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true"><path d="' +
      sc.path + '"/></svg></a>'
    ).join("");

    main.innerHTML =
      '<section class="section"><div class="container">' +
      '<h1 class="section-title">' + esc(t("contact.title")) + "</h1>" + ornament() +
      '<p class="section-intro">' + esc(t("contact.intro")) + "</p>" +
      '<div class="contact-card"><form id="contact-form">' +
      '<div class="form-field"><label for="cf-name">' + esc(t("contact.name")) + "</label>" +
      '<input id="cf-name" name="name" type="text" required></div>' +
      '<div class="form-field"><label for="cf-email">' + esc(t("contact.email")) + "</label>" +
      '<input id="cf-email" name="email" type="email" required></div>' +
      '<div class="form-field"><label for="cf-message">' + esc(t("contact.message")) + "</label>" +
      '<textarea id="cf-message" name="message" rows="6" required></textarea></div>' +
      '<button type="submit" class="btn">' + esc(t("contact.send")) + "</button>" +
      '<p class="form-note">' + esc(t("contact.note")) + "</p>" +
      "</form>" +
      '<div class="filter-group-label" style="text-align:center;margin-top:1.6rem">' + esc(t("contact.follow")) + "</div>" +
      '<div class="social-row">' + social + "</div>" +
      "</div></div></section>";

    document.getElementById("contact-form").addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("cf-name").value.trim();
      const email = document.getElementById("cf-email").value.trim();
      const message = document.getElementById("cf-message").value.trim();
      const subject = t("site.name") + " — " + name;
      const body = message + "\n\n— " + name + " <" + email + ">";
      location.href = "mailto:hello@noortales.example" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }

  /* ---------- Boot ---------- */
  const PAGE_RENDERERS = {
    home:    renderHome,
    stories: renderStoriesPage,
    story:   renderStoryPage,
    virtues: renderVirtuesPage,
    sources: renderSourcesPage,
    about:   renderAboutPage,
    contact: renderContactPage
  };

  function boot() {
    const page = document.body.dataset.page;
    renderHeader();
    renderFooter();
    const main = document.getElementById("main");
    if (page !== "story") {
      const navKey = { home: "nav.home", stories: "nav.stories", virtues: "nav.virtues",
                       sources: "nav.sources", about: "nav.about", contact: "nav.contact" }[page];
      document.title = t("site.name") + (navKey && page !== "home" ? " — " + t(navKey) : "");
    }
    const render = PAGE_RENDERERS[page];
    if (render && main) render(main);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
