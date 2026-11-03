// content.jsx — bilingual content + shared utilities

const CONTENT = {
  it: {
    statusbar: {
      status: "system: online",
      version: "v1.0.0-stable",
      uptime: "uptime 03y 00m",
      location: "Italia · remote",
    },
    nav: [
      { id: "hero", label: "/intro" },
      { id: "manifesto", label: "/about" },
      { id: "services", label: "/services" },
      { id: "projects", label: "/work" },
      { id: "team", label: "/team" },
      { id: "contact", label: "/contact" },
    ],
    hero: {
      preTag: "// ingegneri informatici · sviluppo software",
      tagPre: "Costruiamo software ",
      tagEm: "che funziona davvero",
      tagPost: ", su misura per te.",
      meta: [
        { k: "fondato", v: "2022" },
        { k: "membri", v: "3 dev" },
        { k: "stack", v: "polyglot" },
        { k: "open to", v: "nuovi progetti" },
      ],
      bootLines: [
        { p: true, t: "whoami" },
        { o: "filippo · paolo · yari · ingegneria informatica" },
        { p: true, t: "cat ./mission.txt" },
        { o: "→ siti web, app, e-commerce,\n  gestionali e molto altro." },
        { p: true, t: "ls ./projects" },
        { o: "01_stonks-app.live" },
        { o: "02_littlestar.live" },
        { o: "03_litro-wine.live" },
        { o: "04_stockify.wip" },
        { p: true, t: "status --availability" },
        { ok: "OK · disponibili per nuovi progetti" },
      ],
      scrollHint: "scroll per esplorare ↓",
    },
    manifesto: {
      label: "01 — manifesto",
      titleParts: [
        { t: "Crediamo nel codice", lit: ["nel"] },
        { t: "pulito, nei prodotti", lit: ["pulito,"], green: ["pulito,"] },
        { t: "costruiti per durare e nei", lit: ["durare"] },
        { t: "clienti che", lit: ["clienti"], green: ["clienti"] },
        { t: "crescono.", lit: ["crescono."], amber: ["crescono."] },
      ],
      principles: [
        { k: "01", t: "Qualità prima della velocità." },
        { k: "02", t: "Ascoltiamo prima di costruire." },
        { k: "03", t: "Design e codice vanno di pari passo." },
        { k: "04", t: "Soluzioni su misura, non template." },
        { k: "05", t: "Il cliente è parte del team." },
      ],
    },
    services: {
      label: "02 — cosa facciamo",
      heading: "Servizi",
      headingSub: "Dalla prima idea al prodotto finito, coprendo ogni fase dello sviluppo.",
      items: [
        {
          num: "S/01",
          glyph: "{ }",
          pre: "build.",
          name: "web & app",
          desc: "Siti web, applicazioni e web app sviluppate su misura. E-commerce, gestionali, siti di corsi, landing page per pubblicizzare le vostre app.",
          tags: ["React", "Next.js", "TypeScript", "Node.js", "Swift"],
        },
        {
          num: "S/02",
          glyph: "[ ]",
          pre: "build.",
          name: "e-commerce",
          desc: "Marketplace e shop online completi: gestione forniture, pagamenti, logistica e strategie di advertising a 360°.",
          tags: ["Stripe", "PostgreSQL", "AWS", "SEO", "Analytics"],
        },
        {
          num: "S/03",
          glyph: "< />",
          pre: "build.",
          name: "product",
          desc: "Applicazioni mobile e web innovative, dall'idea al lancio. Prototipazione rapida e sviluppo iterativo con feedback continuo.",
          tags: ["React Native", "SwiftUI", "Kotlin", "Firebase", "AI/LLM"],
        },
      ],
    },
    projects: {
      label: "03 — progetti",
      heading: "Cosa abbiamo costruito",
      headingSub: "Prodotti reali, clienti reali. Ogni progetto è una storia di collaborazione.",
      items: [
        {
          num: "001",
          tag: "shipped",
          name: "Stonks App",
          desc: "App per consultare dati su criptovalute e NFT in profondità. Portfolio personale, watchlist, feed notizie crypto in tempo reale. Per i veri appassionati.",
          stack: ["React Native", "CoinGecko API", "Node.js", "Firebase"],
          year: "2024 → live",
          url: "https://gn-d3v.github.io/stonksapp/",
        },
        {
          num: "002",
          tag: "shipped",
          name: "Littlestar",
          desc: "App di incontri per animali, sviluppata per un'azienda di collari di lusso. Profili animali con pedigree e propensioni, pubblicità intelligente dei collari in base alle stats del cane.",
          stack: ["React Native", "Node.js", "PostgreSQL", "AWS"],
          year: "2024 → live",
          url: "https://gn-d3v.github.io/littlestar/",
        },
        {
          num: "003",
          tag: "shipped",
          name: "Litro Wine",
          desc: "Marketplace ad hoc per azienda vinicola. Vendita di vini e prodotti affini con gestione completa di forniture, pagamenti e advertising a 360°.",
          stack: ["Next.js", "Stripe", "PostgreSQx", "AWS", "Google Ads"],
          year: "2023 → live",
          url: "https://gn-d3v.github.io/litrowine/",
        },
        {
          num: "004",
          tag: "in dev",
          name: "Stockify",
          desc: "Gestionale adattabile a qualsiasi attività commerciale. Magazzino, vendite, clienti e report in un'unica dashboard. Progettato per essere costruito su misura del cliente.",
          stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
          year: "2026 → wip",
          url: "https://gn-d3v.github.io/stockify/",
        },
      ],
    },
    team: {
      label: "04 — chi siamo",
      heading: "Il team",
      headingSub: "Tre laureati in Ingegneria Informatica, con competenze nello sviluppo software.",
      members: [
        {
          glyph: "F",
          name: "Filippo Carletti",
          role: "// full-stack developer",
          bio: "Laureato in Ingegneria Informatica. Sviluppatore full-stack con un occhio al design e all'esperienza utente. Porta le interfacce al livello successivo senza trascurare la logica dietro.",
          stats: [
            { k: "ruolo", v: "Full-Stack" },
            { k: "stack", v: "React·TS" },
            { k: "status", v: "laureato" },
          ],
        },
        {
          glyph: "P",
          name: "Paolo Iacovissi",
          role: "// lead developer",
          bio: "Laureato in Ingegneria Informatica. Lead del team, specializzato in cybersecurity, sistemi distribuiti e gestione progetti.",
          stats: [
            { k: "ruolo", v: "Lead" },
            { k: "stack", v: "Java·Go" },
            { k: "status", v: "laureato" },
          ],
        },
        {
          glyph: "Y",
          name: "Yari Bellardini",
          role: "// full-stack developer",
          bio: "Laureato in Ingegneria Informatica. Sviluppatore full-stack con forte focus sul backend e le API. Appassionato di architetture scalabili e sistemi ad alte prestazioni.",
          stats: [
            { k: "ruolo", v: "Full-Stack" },
            { k: "stack", v: "React·Node" },
            { k: "status", v: "laureato" },
          ],
        },
      ],
    },
    contact: {
      label: "05 — contattaci",
      h2Pre: "Hai un progetto",
      h2Em: "che vuoi realizzare?",
      desc: "Rispondiamo entro 48 ore. Raccontaci la tua idea e ti diciamo come possiamo aiutarti a concretizzarla.",
      info: [
        { k: "github", v: "github.com/gn-d3v", link: "https://github.com/GN-d3v" },
      ],
      form: {
        name: "nome",
        nameP: "Mario Rossi",
        email: "email",
        emailP: "mario@example.com",
        company: "azienda",
        companyP: "Acme S.r.l. (opzionale)",
        budget: "budget indicativo",
        budgetOptions: ["< 1k €", "1-5k €", "5-15k €", "15k+ €", "non lo so ancora"],
        msg: "il progetto",
        msgP: "Cosa vuoi costruire, quando ti serve, come possiamo aiutare...",
        hint: "→ enter per inviare",
        cta: "invia ↵",
        ok: "messaggio ricevuto.",
        ok2: "ti rispondiamo entro 48h.",
      },
    },
    footer: {
      left: "© 2025 d3v · Italia",
      right: "fatto con caffè ☕ e",
      heart: "tanta passione",
    },
  },
  en: {
    statusbar: {
      status: "system: online",
      version: "v1.0.0-stable",
      uptime: "uptime 03y 00m",
      location: "Italy · remote",
    },
    nav: [
      { id: "hero", label: "/intro" },
      { id: "manifesto", label: "/about" },
      { id: "services", label: "/services" },
      { id: "projects", label: "/work" },
      { id: "team", label: "/team" },
      { id: "contact", label: "/contact" },
    ],
    hero: {
      preTag: "// computer engineering graduates · developers",
      tagPre: "We build software ",
      tagEm: "that actually works",
      tagPost: ", tailored for you.",
      meta: [
        { k: "founded", v: "2022" },
        { k: "members", v: "3 devs" },
        { k: "stack", v: "polyglot" },
        { k: "open to", v: "new projects" },
      ],
      bootLines: [
        { p: true, t: "whoami" },
        { o: "filippo · paolo · yari · computer engineering" },
        { p: true, t: "cat ./mission.txt" },
        { o: "→ websites, apps, e-commerce,\n  management tools and more." },
        { p: true, t: "ls ./projects" },
        { o: "01_stonks-app.live" },
        { o: "02_littlestar.live" },
        { o: "03_litro-wine.live" },
        { o: "04_stockify.wip" },
        { p: true, t: "status --availability" },
        { ok: "OK · available for new projects" },
      ],
      scrollHint: "scroll to explore ↓",
    },
    manifesto: {
      label: "01 — manifesto",
      titleParts: [
        { t: "We believe in", lit: ["in"] },
        { t: "clean code, in products", lit: ["clean"], green: ["clean"] },
        { t: "built to last and in", lit: ["last"] },
        { t: "clients that", lit: ["clients"], green: ["clients"] },
        { t: "grow.", lit: ["grow."], amber: ["grow."] },
      ],
      principles: [
        { k: "01", t: "Quality before speed." },
        { k: "02", t: "Listen before building." },
        { k: "03", t: "Design and code go hand in hand." },
        { k: "04", t: "Custom solutions, not templates." },
        { k: "05", t: "The client is part of the team." },
      ],
    },
    services: {
      label: "02 — what we do",
      heading: "Services",
      headingSub: "From the first idea to the finished product, covering every phase of development.",
      items: [
        {
          num: "S/01",
          glyph: "{ }",
          pre: "build.",
          name: "web & apps",
          desc: "Custom websites, applications and web apps. E-commerce, management tools, course platforms, landing pages to promote your apps.",
          tags: ["React", "Next.js", "TypeScript", "Node.js", "Swift"],
        },
        {
          num: "S/02",
          glyph: "[ ]",
          pre: "build.",
          name: "e-commerce",
          desc: "Complete marketplaces and online stores: supply management, payments, logistics and 360° advertising strategies.",
          tags: ["Stripe", "PostgreSQL", "AWS", "SEO", "Analytics"],
        },
        {
          num: "S/03",
          glyph: "< />",
          pre: "build.",
          name: "product",
          desc: "Innovative mobile and web applications, from idea to launch. Rapid prototyping and iterative development with continuous feedback.",
          tags: ["React Native", "SwiftUI", "Kotlin", "Firebase", "AI/LLM"],
        },
      ],
    },
    projects: {
      label: "03 — work",
      heading: "What we've built",
      headingSub: "Real products, real clients. Every project is a story of collaboration.",
      items: [
        {
          num: "001",
          tag: "shipped",
          name: "Stonks App",
          desc: "App for in-depth cryptocurrency and NFT data. Personal portfolio, watchlists, real-time crypto news feed. Built for true enthusiasts.",
          stack: ["React Native", "CoinGecko API", "Node.js", "Firebase"],
          year: "2024 → live",
          url: "https://gn-d3v.github.io/stonksapp/",
        },
        {
          num: "002",
          tag: "shipped",
          name: "Littlestar",
          desc: "Pet matchmaking app developed for a luxury pet collar brand. Animal profiles with pedigree and temperament data, smart collar advertising based on dog stats.",
          stack: ["React Native", "Node.js", "PostgreSQL", "AWS"],
          year: "2024 → live",
          url: "https://gn-d3v.github.io/littlestar/",
        },
        {
          num: "003",
          tag: "shipped",
          name: "Litro Wine",
          desc: "Custom marketplace for a wine company. Selling wines and related products with full supply management, payments and 360° advertising.",
          stack: ["Next.js", "Stripe", "PostgreSQL", "AWS", "Google Ads"],
          year: "2023 → live",
          url: "https://gn-d3v.github.io/litrowine/",
        },
        {
          num: "004",
          tag: "in dev",
          name: "Stockify",
          desc: "Management platform adaptable to any commercial activity. Inventory, sales, customers and reports in one dashboard. Built to be fully tailored to each client.",
          stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
          year: "2026 → wip",
          url: "https://gn-d3v.github.io/stockify/",
        },
      ],
    },
    team: {
      label: "04 — who we are",
      heading: "The team",
      headingSub: "Three Computer Engineering graduates with a shared focus on software development.",
      members: [
        {
          glyph: "F",
          name: "Filippo Carletti",
          role: "// full-stack developer",
          bio: "Computer Engineering graduate. Full-stack developer with a strong focus on backend and APIs. Passionate about scalable architectures and high-performance systems.",
          stats: [
            { k: "role", v: "Full-Stack" },
            { k: "stack", v: "TS·Node" },
            { k: "status", v: "graduate" },
          ],
        },
        {
          glyph: "P",
          name: "Paolo Iacovissi",
          role: "// lead developer",
          bio: "Computer Engineering graduate. Team lead, specialized in backend architectures, distributed systems and project management.",
          stats: [
            { k: "role", v: "Lead" },
            { k: "stack", v: "Node·Go" },
            { k: "status", v: "graduate" },
          ],
        },
        {
          glyph: "Y",
          name: "Yari Bellardini",
          role: "// full-stack developer",
          bio: "Computer Engineering graduate. Full-stack developer with an eye for design and user experience. Brings interfaces to the next level without neglecting the logic behind them.",
          stats: [
            { k: "role", v: "Full-Stack" },
            { k: "stack", v: "React·TS" },
            { k: "status", v: "graduate" },
          ],
        },
      ],
    },
    contact: {
      label: "05 — contact",
      h2Pre: "Got a project",
      h2Em: "you want to build?",
      desc: "We respond within 48 hours. Tell us your idea and we'll let you know how we can help make it real.",
      info: [
        { k: "email", v: "gnd3vs@gmail.com", link: "mailto:gnd3vs@gmail.com" },
        { k: "github", v: "github.com/gn-d3v", link: "#" },
        { k: "instagram", v: "@gndev.studio", link: "#" },
      ],
      form: {
        name: "name",
        nameP: "John Smith",
        email: "email",
        emailP: "john@example.com",
        company: "company",
        companyP: "Acme Inc. (optional)",
        budget: "rough budget",
        budgetOptions: ["< €1k", "€1-5k", "€5-15k", "€15k+", "not sure yet"],
        msg: "the project",
        msgP: "What you want to build, when you need it, how we can help...",
        hint: "→ enter to send",
        cta: "send ↵",
        ok: "message received.",
        ok2: "we'll reply within 48h.",
      },
    },
    footer: {
      left: "© 2026 GN d3v · Italy",
      right: "made with coffee ☕ and",
      heart: "a lot of passion",
    },
  },
};

// helper for scroll-reveal
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
          } else {
            e.target.classList.remove("in");
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

// scrambled-text reveal hook
function useScramble(target, active = true, speed = 30) {
  const [out, setOut] = React.useState("");
  React.useEffect(() => {
    if (!active) { setOut(target); return; }
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>/\\";
    let i = 0;
    let raf;
    const tick = () => {
      if (i >= target.length) { setOut(target); return; }
      const fixed = target.slice(0, Math.floor(i));
      const noise = Array.from({ length: Math.min(6, target.length - Math.floor(i)) })
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join("");
      setOut(fixed + noise);
      i += 0.4;
      raf = setTimeout(tick, speed);
    };
    tick();
    return () => clearTimeout(raf);
  }, [target, active, speed]);
  return out;
}

// matrix rain text generator
function makeMatrix(seed) {
  const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/$#@*=+-";
  let out = "";
  let s = seed * 9301 + 49297;
  for (let i = 0; i < 380; i++) {
    s = (s * 9301 + 49297) % 233280;
    out += chars[s % chars.length];
    if (i % 22 === 21) out += "\n";
  }
  return out;
}

Object.assign(window, { CONTENT, useReveal, useScramble, makeMatrix });
