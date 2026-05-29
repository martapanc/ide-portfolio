// ─── Personal ─────────────────────────────────────────────────────────────────
// Core identity — used across multiple pages

export const personal = {
  name: 'Marta',
  email: 'info@martacodes.it',
  github: {
    href: 'https://github.com/martapancaldi',
    label: 'github.com/martapanc',
  },
  linkedin: {
    href: 'https://linkedin.com/in/martapancaldi',
    label: 'linkedin.com/in/martapancaldi',
  },
  location: 'Italy',
  locationFull: 'Italy, CET (UTC+1)',
  timezone: 'EU / UK time zones',
  availability: 'open to freelance',
  languagesCodes: 'it · en · de',
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  role: 'fullStackEngineer',
  yearsExp: '8 YoE',
  yearsExpFull: '8+ years',
  currentCompany: 'Appetize.io',
  previousCompanies: ['Booking.com', 'BJSS', 'Resourcify'],
  tagline: 'At my best learning, experimenting, solving hard problems.',
};

// ─── Work history ─────────────────────────────────────────────────────────────

export const work = [
  { period: '2024 – now',  company: 'Appetize.io',  role: 'Senior Full-Stack Engineer', stack: 'Next.js · React · Astro · MongoDB' },
  { period: '2022 – 2024', company: 'Resourcify',   role: 'Full-Stack Engineer',        stack: 'Java · React · Node · MySQL' },
  { period: '2020 – 2022', company: 'BJSS',          role: 'Software Engineer',          stack: 'PHP · Angular · Vue · AWS' },
  { period: '2018 – 2020', company: 'Booking.com',  role: 'Graduate Engineer',          stack: 'Java · React · Kotlin · PHP' },
];

// ─── Featured projects ────────────────────────────────────────────────────────

export type Project = {
  file: string;
  lang: string;
  stack: string;
  year: string;
  title: string;
  deco: string | null;
  desc: string;
  tags: string[];
};

export const featuredProjects: Project[] = [
  {
    file: 'appetize-2.0.mdx',
    lang: 'TypeScript',
    stack: 'AstroJS',
    year: '2025',
    title: 'Appetize.io 2.0',
    deco: null,
    desc: 'Full marketing-site rebuild for a B2B audience. Led the move from a playful CMS-driven site to a faster, SEO-tight AstroJS build.',
    tags: ['work', 'case study'],
  },
  {
    file: 'advent-of-code.mdx',
    lang: 'Kotlin',
    stack: 'Spring · CI',
    year: '2015–25',
    title: 'Advent of Code',
    deco: '500★',
    desc: 'All 500 stars across every AoC year since 2015. Built a side API that scaffolds each day and auto-updates the README.',
    tags: ['side', 'algorithms'],
  },
  {
    file: 'flexinvoice.mdx',
    lang: 'TypeScript',
    stack: 'React · Puppeteer',
    year: '2025',
    title: 'FlexInvoice',
    deco: null,
    desc: 'A small, JSON-driven invoice generator for my freelance company. PDF render via Puppeteer, automation pipeline in progress.',
    tags: ['freelance', 'tooling'],
  },
];

export const totalProjects = 20;

// ─── About page ───────────────────────────────────────────────────────────────

export const about = {
  introProse: "I write mostly TypeScript, occasionally Kotlin when Java needs to be less verbose, and I've been known to write a Perl script without apologising.",
  currentRoleDesc: 'where I work on the marketing site, internal tooling, and whatever else needs a careful pair of hands.',
  previousRolesLine: "Before that: Resourcify (climate-tech), BJSS (consulting), Booking.com (don't think this needs presentation).",
  blockquote: 'At my best when the problem is ambiguous, the deadline is real, and the team trusts each other.',
  howIWork: [
    "I'm thorough without being slow. I write tests, read documentation, and leave code in better shape than I found it. I prefer small, well-named functions over clever one-liners. I think the README matters.",
    "I've worked in teams of 2 and teams of 200. I've been the only frontend engineer and the person untangling a decade of technical debt. I adapt.",
  ],
  backgroundProse: 'I grew up in Italy, studied Computer Science, moved to Amsterdam for Booking.com, then to London for a few years.',
  languagesSpoken: ['Italian', 'English', 'German'],
  languagesNote: 'the last one fluently enough to work in it, not fluently enough to enjoy it.',
  outsideCode: "I play oboe and alto in an amateur choir. I write short fiction (slowly). I read a lot — mostly literary fiction, occasionally non-fiction that makes me reconsider something. I take photos when I travel, which is often enough.",
  site: {
    builtWith: ['Astro', 'React'],
    theme: 'Rose Pine Moon',
    font: 'JetBrains Mono',
  },
};

// ─── Now ──────────────────────────────────────────────────────────────────────

export const now = {
  lastUpdated: '2026-05-12',
  intro: "A snapshot of what I'm currently doing, thinking about, and working on.",
  workDesc: "Currently deep in a redesign of the customer-facing analytics dashboard — lots of React 19, some server components experiments, more charts than I'd like.",
  freelanceLine: 'Taking on occasional freelance projects on the side (web, tooling, architecture consulting).',
  offKeyboard: [
    "Playing oboe and alto in a local amateur choir — we're rehearsing Brahms right now, which is exactly as humbling as it sounds.",
    'Writing short fiction at roughly 1,200 words a week. Currently working on a story set in a near-future Milan. Going slowly and enjoying it.',
    'Processing a photo backlog from Tokyo and Lisbon. Both trips were worth every euro.',
  ],
  footNote: "This page is inspired by Derek Sivers' /now movement. If you have one, I'd love to read it.",
  learning: [
    { done: true,  text: 'LLM basics, RAG pipelines, eval frameworks' },
    { done: false, text: 'Figma automation & plugin development' },
    { done: false, text: 'Swift + SwiftUI for iOS' },
    { done: false, text: 'Svelte 5 runes model' },
    { done: false, text: 'Rust (very slowly)' },
  ],
  learningPreview: [
    { done: true,  text: 'LLM, RAG & eval pipelines' },
    { done: false, text: 'Figma automation & plugin dev' },
    { done: false, text: 'Swift for iOS' },
    { done: false, text: 'Svelte 5' },
  ],
  reading: [
    { title: 'We Should All Be Feminists', author: 'Chimamanda Ngozi Adichie' },
    { title: 'Staff Engineer', author: 'Will Larson', note: 'reference' },
  ],
  offKeyboardPreview: [
    { icon: '📖', text: 'Reading: We Should All Be Feminists – C.N. Adichie' },
    { icon: '🎶', text: 'Practising oboe + alto for the choir' },
    { icon: '✍🏻', text: 'Drafting short fiction · ~1.2k words / wk' },
    { icon: '📷', text: 'Travel photo backlog from Tokyo & Lisbon' },
  ],
  elsewhere: [
    { label: 'Medium',    href: 'https://medium.com',      note: 'mostly technical deep-dives' },
    { label: 'Instagram', href: 'https://instagram.com',   note: 'photos' },
    { label: 'Goodreads', href: 'https://goodreads.com',   note: 'books' },
  ],
};

// ─── Contact page ─────────────────────────────────────────────────────────────

export const contactPage = {
  comment: 'The best way to reach me is email. I read everything.',
  responseTime: 'within 24h on working days',
  reachOut: [
    'Freelance or contract work (TypeScript, React, Astro, Node.js)',
    'Full-time remote opportunities',
    'Code reviews, architecture consultations',
    'Anything else worth talking about',
  ],
  footNote: 'No recruiters calling without prior email. No AI-generated outreach (I can tell).',
};

// ─── Experience (CV) ──────────────────────────────────────────────────────────

export const experience = [
  {
    title: 'Senior Full-Stack Engineer',
    company: 'Appetize.io',
    period: '2024 – present',
    desc: 'Rebuilt the company marketing site in Astro 4, reducing Lighthouse score gap from ~60 to 97. Introduced content collections for the blog and changelog, giving marketing full ownership. Also maintain internal tooling and the customer-facing dashboard (Next.js).',
    stack: ['AstroJS', 'Next.js', 'TypeScript', 'MongoDB', 'Cloudinary', 'GitHub Actions'],
  },
  {
    title: 'Full-Stack Engineer',
    company: 'Resourcify',
    period: '2021 – 2024',
    desc: 'Built and owned the supplier management module from scratch — from database schema to UI. Introduced E2E tests with Playwright, reducing regression bugs by ~40% quarter-on-quarter. Mentored two junior engineers through their first production deployments.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Playwright', 'AWS'],
  },
  {
    title: 'Software Engineer',
    company: 'BJSS',
    period: '2019 – 2021',
    desc: 'Delivered across three client engagements: a UK Government digital service (Java/Spring), a retail analytics dashboard (Angular/D3), and a logistics API (Kotlin). Passed SC clearance.',
    stack: ['Java', 'Spring Boot', 'Angular', 'Kotlin', 'AWS', 'Docker'],
  },
  {
    title: 'Graduate Engineer',
    company: 'Booking.com',
    period: '2018 – 2019',
    desc: 'Rotated through the Accommodation, Payments, and Mobile Platform teams. Shipped a Perl backend feature that landed in the A/B test that improved checkout conversion by 1.2%. Survived the Perl.',
    stack: ['Perl', 'React', 'Kotlin', 'MySQL', 'Jenkins'],
  },
];

export const education = [
  {
    title: 'BSc Computer Science',
    institution: 'University of Bologna',
    period: '2015 – 2018',
    desc: 'Focus on algorithms, distributed systems, and programming languages. Thesis on static analysis of concurrent programs.',
  },
];

export const skills: Record<string, string[]> = {
  Languages:  ['TypeScript', 'Kotlin', 'Java', 'Python', 'Perl (recovering)'],
  Frontend:   ['React', 'AstroJS', 'Next.js', 'Angular', 'Svelte (learning)'],
  Backend:    ['Node.js', 'Spring Boot', 'Express', 'Fastify'],
  Databases:  ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  Tooling:    ['Docker', 'GitHub Actions', 'AWS', 'Playwright', 'Vitest'],
};

// ─── Uses ─────────────────────────────────────────────────────────────────────

export const uses = [
  {
    category: 'editor + terminal',
    items: [
      { name: 'Neovim',       desc: 'daily driver, Rose Pine Moon theme' },
      { name: 'VS Code',      desc: 'pair-programming, extensions' },
      { name: 'WezTerm',      desc: 'terminal emulator' },
      { name: 'tmux',         desc: 'session management' },
      { name: 'zsh + starship', desc: 'shell prompt' },
    ],
  },
  {
    category: 'languages + runtimes',
    items: [
      { name: 'TypeScript', desc: 'primary language' },
      { name: 'Kotlin',     desc: 'Advent of Code, JVM projects' },
      { name: 'Node.js',    desc: 'runtime of choice' },
      { name: 'Python',     desc: 'scripting, ML experiments' },
    ],
  },
  {
    category: 'frontend',
    items: [
      { name: 'AstroJS',      desc: 'static sites, portfolios' },
      { name: 'React 19',     desc: 'SPAs, dashboards' },
      { name: 'Next.js 15',   desc: 'SSR, full-stack' },
      { name: 'Tailwind CSS', desc: 'styling utility-first' },
    ],
  },
  {
    category: 'tooling + infra',
    items: [
      { name: 'Vitest',          desc: 'unit tests' },
      { name: 'Playwright',      desc: 'E2E tests' },
      { name: 'GitHub Actions',  desc: 'CI/CD' },
      { name: 'Docker',          desc: 'containerisation' },
      { name: 'AWS',             desc: 'S3, Lambda, CloudFront' },
    ],
  },
  {
    category: 'hardware',
    items: [
      { name: 'MacBook Pro M3',       desc: '14", midnight, base model' },
      { name: 'LG UltraFine 27"',     desc: 'external monitor' },
      { name: 'Keychron Q1',          desc: 'Gateron Brown switches' },
      { name: 'Logitech MX Master 3', desc: 'mouse' },
    ],
  },
  {
    category: 'apps',
    items: [
      { name: 'Obsidian',   desc: 'notes + second brain' },
      { name: 'Raycast',    desc: 'launcher + snippets' },
      { name: 'Figma',      desc: 'design + mockups' },
      { name: 'TablePlus',  desc: 'database GUI' },
    ],
  },
];

// ─── Site ─────────────────────────────────────────────────────────────────────

export const site = {
  githubUrl: 'https://github.com',
};