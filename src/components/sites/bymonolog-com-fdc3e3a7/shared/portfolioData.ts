// Portfolio data ported from Zen's demos/registry.tsx + demos/websites.ts.
// Screenshots live under public/portfolio/{websites,software}/<slug>.png,
// captured live from the running Zen dev server.

export type WebsiteItem = {
  id: string;
  tier: number;
  title: string;
  tag: string;
  blurb: string;
  slug: string;
  accent: string;
};

export type SoftwareItem = {
  id: string;
  tier: number;
  title: string;
  tag: string;
  blurb: string;
  detail: string;
  github?: string;
  tech?: string;
  status?: string;
  result?: string;
  resultDesc?: string;
  /** "project" = shipped open-source; "demo" = interactive concept. */
  kind: "project" | "demo";
  /** Live demo URL — defaults to the Zen dev server route so the "Launch
   *  demo" button works out of the box in local dev. Swap to whatever
   *  hosted URL you have when the demos are deployed. */
  demoUrl?: string;
};

export const websiteTiers = [
  { n: 1, label: "Static", tagline: "CSS-only motion, native scroll, system fonts, zero runtime deps. Local services and small studios where trust matters more than spectacle." },
  { n: 2, label: "Refined", tagline: "Lenis smooth-scroll, scroll-linked reveals, a distinctive typeface and deliberate easing on every state change." },
  { n: 3, label: "Editorial", tagline: "Real photography, art-directed and consistently graded. Licensed type. Full-bleed imagery." },
  { n: 4, label: "Choreographed", tagline: "GSAP and ScrollTrigger, pinning, scrubbing, stacking. Video as texture. One scroll-driven set-piece the site is built around." },
  { n: 5, label: "Composed", tagline: "A WebGL layer, client-side page transitions, licensed display type, a custom build. Reserved for when nothing thinner will do." },
] as const;

export const softwareTiers = [
  { n: 1, label: "Essentials", tagline: "One job, done well. A tool your customers or team use in seconds." },
  { n: 2, label: "Commerce", tagline: "Sell, stock and get paid. Storefronts and the back office behind them." },
  { n: 3, label: "Team apps", tagline: "Shared workflows, roles and state your team runs on together." },
  { n: 4, label: "Growth & data", tagline: "The dashboards and campaigns you check and send every day." },
  { n: 5, label: "Platforms we run", tagline: "Full hosted products we build, operate and keep running for you." },
] as const;

export const websites: WebsiteItem[] = [
  { id: "rootwell-dental", tier: 1, title: "Rootwell Dental", tag: "Local business · Dental", blurb: "An unhurried dental practice's brochure. Four pages, hand-tuned CSS, no runtime. Trust before spectacle.", slug: "rootwell-dental", accent: "#3a5c4b" },
  { id: "house-of-oak", tier: 1, title: "House of Oak", tag: "Retail · Craft furniture", blurb: "A furniture maker's site with collection, craft, journal and visit pages. Static tier: no JS motion, just a strong grid.", slug: "house-of-oak", accent: "#8a6a3a" },
  { id: "aether-studio", tier: 2, title: "Aether Studio", tag: "Design studio · Brutalist", blurb: "A brutalist design studio brand covering work, services and contact. The feel upgrade lives in type discipline, not assets.", slug: "aether-studio", accent: "#c9c1b2" },
  { id: "bookstore", tier: 2, title: "Foundry Books", tag: "Retail · Bookstore", blurb: "An independent bookstore with catalog, book detail, archive and editorial journal. A refined typographic system across many templates.", slug: "bookstore", accent: "#5a3a2a" },
  { id: "hyperblast-optics", tier: 3, title: "Hyperblast Optics", tag: "E-commerce · Eyewear", blurb: "A high-contrast eyewear brand with a product archive. Photography drives every section. The asset budget is the tier.", slug: "hyperblast-optics", accent: "#e0544d" },
  { id: "staylux", tier: 3, title: "StayLux Estates", tag: "Hospitality · Luxury stays", blurb: "A luxury short-let brand covering estates, amenities, collections and concierge. Full-bleed imagery, art-directed and graded.", slug: "staylux", accent: "#a08560" },
];

// tier 0 for the four real open-source projects (shown above the demo ladder).
export const software: SoftwareItem[] = [
  { id: "exosys", kind: "project", tier: 0, title: "ExoSys · Exoplanet Intelligence", tag: "Data / ML · 3D", blurb: "A cinematic mission console for exploring and classifying exoplanets.", detail: "A real-time 3D star-system console paired with an ML classifier that scores whether a signal is a genuine planet, plus procedural world generation and habitability simulation.", github: "https://github.com/dhvqn1/ExoSys", tech: "React · Three.js · TypeScript · Python (XGBoost)", result: "0.99", resultDesc: "ROC-AUC · XGBoost classifier trained on 6,000 physics-grounded signals" },
  { id: "monitor", kind: "project", tier: 0, title: "Options Monitor · Trading Platform", tag: "FinTech · Trading", blurb: "An ETF options monitor for bull-put-spread entries with live broker execution.", detail: "A full trading platform: scans ETFs for credit-spread setups with an SMA trend filter and SPY market confirmation, manages capital and risk, runs backtests, and executes through Alpaca, with offline take-profit orders that fill with the laptop off.", github: "https://github.com/4nhy/options-monitor", tech: "Next.js · TypeScript · lightweight-charts · Alpaca · Python backtest", result: "Live broker", resultDesc: "Scanner, backtest engine and Alpaca execution with offline GTC exits" },
  { id: "open", kind: "project", tier: 0, title: "0PEN · Cybersecurity Audit AI", tag: "Security · AI Agent", blurb: "An AI agent that drives a real browser to find vulnerabilities scanners miss.", detail: "A hackathon-built security platform: an AI agent navigates a target like a real user, captures all traffic, tracks how sensitive data propagates, and detects XSS, SQL injection, cryptographic failures, misconfiguration and vulnerable components.", github: "https://github.com/dhvqn1/Open", tech: "Python · Browser automation · AI agent", result: "6 classes", resultDesc: "XSS · SQLi · crypto failures · misconfig · vulnerable components · weak creds" },
  { id: "atlas", kind: "project", tier: 0, title: "Currency Atlas · Interactive World Map", tag: "Consumer · Maps", blurb: "Click any country on the world map to explore its currency and banknotes.", detail: "An interactive Leaflet world map where every country is clickable: search or filter by region, open a country to see its currency, banknote gallery and live USD exchange rate, and track collection progress on the ring.", github: "https://github.com/ritesh1234-art/Atlas", tech: "JavaScript · Leaflet · GeoJSON · live FX API", status: "Prototype · in progress", result: "20 countries", resultDesc: "Clickable world map with live rates; banknote archive still being filled in" },

  { id: "slotly", kind: "demo", tier: 1, title: "Slotly", tag: "Business · Scheduling", blurb: "A full provider console: calendar, bookings inbox, services, availability and clients.", detail: "Overview with revenue trend and week load, week calendar with time-blocked bookings, a bookings inbox with filters, a services catalog with per-service pricing and buffers, weekly availability rules, and a clients CRM with history and LTV." },
  { id: "storefront", kind: "demo", tier: 2, title: "Field & Co.", tag: "E-commerce · Storefront", blurb: "Full storefront: home, filtered shop, product detail with reviews, cart and checkout.", detail: "Home with hero, categories, deals and bestsellers. Shop grid with filters and sort. Product detail with variants, sizes, gallery, reviews. Wishlist. Order history. A slide-out cart. A three-step checkout." },
  { id: "ledger", kind: "demo", tier: 2, title: "Ledger", tag: "Business · Invoicing", blurb: "Full billing back office: invoices, customers, payments, recurring and reports.", detail: "Overview with aging and cash-flow, a real invoice document with partial-payment tracking, a customer CRM, a payments ledger, recurring subscriptions with MRR, and a reports view." },
  { id: "depot", kind: "demo", tier: 2, title: "Depot", tag: "Business · Inventory", blurb: "Multi-location stock with barcode scan-in, transfers, POs and reports.", detail: "Overview with per-location value, an items catalog with on-hand across four locations, a keystroke-driven scan-in view, inter-location transfers, purchase orders, a supplier directory and reports on turnover and dead stock." },
  { id: "cadence", kind: "demo", tier: 3, title: "Cadence", tag: "Business · CRM", blurb: "Full sales CRM with pipeline timeline, weighted forecast and activities.", detail: "Overview with a 21-day pipeline timeline, a stage-advance pipeline board, deals table with filters, a contacts CRM with tier and last-touch, an activities timeline, a forecast tab, and reports by source and owner." },
  { id: "aria", kind: "demo", tier: 3, title: "Aria", tag: "Support · Helpdesk", blurb: "A real multichannel helpdesk: inbox, SLAs, macros, customers and reports.", detail: "Multichannel inbox with a threaded ticket pane, response and resolve SLA timers, priority and assignee controls, macros with variable substitution, an Aria-drafted reply, customer directory, team roster and reports on volume, FR and CSAT." },
  { id: "tempo", kind: "demo", tier: 3, title: "Tempo", tag: "Business · Projects", blurb: "Real project management: burndown, Gantt timeline, backlog, sprints, milestones.", detail: "Overview with sprint burndown vs. ideal, a Kanban board with per-sprint switcher, a Gantt-style timeline grouped by epic, a full backlog table, sprints tab, milestones, team velocity, and reports on cycle time and on-time delivery." },
  { id: "northstar", kind: "demo", tier: 4, title: "Northstar", tag: "SaaS · Analytics", blurb: "Full product-analytics with drill-in KPIs, funnels, cohorts and a live event stream.", detail: "Overview KPIs click through to metric detail with breakdowns; funnel builder with per-step drop-off; a weekly cohort retention grid; user directory; a live event stream ticking every 2 seconds; and a segments library." },
  { id: "dispatch", kind: "demo", tier: 4, title: "Dispatch", tag: "Marketing · Email", blurb: "Full email marketing suite: dashboard, campaigns, audiences, automations and reports.", detail: "Overview with sends/opens/clicks trend, device breakdown, opens-by-country, best send time and top campaigns; campaign detail with per-link CTR and geo; audiences with growth; automations; broadcasts; a template library; and attribution reports." },
  { id: "helm", kind: "demo", tier: 5, title: "Helm", tag: "SaaS · Monitoring", blurb: "Real reliability console: services, incidents, alerts, deploys, live logs and runbooks.", detail: "Overview with SLO / traffic / errors and live sparklines; a services registry with per-service latency, error rate and dependencies; incident timelines; alert rules; a deploy log; three switchable dashboards ticking every second; a live log stream with filters; and a runbook catalog." },
];
