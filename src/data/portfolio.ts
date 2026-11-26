// ─── Personal ─────────────────────────────────────────────────────────────────
// Core identity — used across multiple pages

export const personal = {
  name: 'Marta',
  brandName: 'MartaCodes',
  email: 'info@martacodes.it',
  github: {
    href: 'https://github.com/martapanc',
    label: 'github.com/martapanc',
  },
  linkedin: {
    href: 'https://linkedin.com/in/martapancaldi',
    label: 'linkedin.com/in/martapancaldi',
  },
  location: 'Andorra',
  locationFull: 'Andorra, CET (UTC+1)',
  timezone: 'EU / UK time zones',
  availability: 'open to freelance',
  languagesCodes: 'it · en · de',
  socials: [
    { label: 'github',    href: 'https://github.com/martapanc' },
    { label: 'linkedin',  href: 'https://linkedin.com/in/martapancaldi' },
    { label: 'medium',    href: 'https://medium.com/@marta.panc' },
    { label: 'instagram', href: 'https://instagram.com/pancakemarta' },
    { label: 'goodreads', href: 'https://www.goodreads.com/user/show/64587022-marta-p' },
    { label: 'links',     href: null as string | null },
  ],
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  role: 'fullStackEngineer',
  yearsExp: '8 YoE',
  yearsExpFull: '8+ years',
  currentCompany: 'TPTS',
  previousCompanies: ['Appetize.io', 'Resourcify', 'BJSS', 'Booking.com'],
  tagline: 'At my best learning, experimenting, solving hard problems.',
};

// ─── Work history ─────────────────────────────────────────────────────────────

export const work = [
  { period: '2025 – now',  company: 'TPTS',        role: 'Freelance Software Engineer', stack: 'Next.js · React · FastAPI · PostgreSQL' },
  { period: '2024 – 2026', company: 'Appetize.io', role: 'Full-Stack Engineer',         stack: 'Next.js · AstroJS · Node.js · MongoDB' },
  { period: '2022 – 2024', company: 'Resourcify',  role: 'Software Engineer',           stack: 'Java · Spring Boot · Angular' },
  { period: '2020 – 2022', company: 'BJSS',        role: 'Software Engineer',           stack: 'Drupal · PHP · Docker' },
  { period: '2018 – 2020', company: 'Booking.com', role: 'Graduate Engineer',           stack: 'Java · Spring · React' },
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
    desc: 'Marketing-site rebuild for a B2B audience, as part of a company-wide rebrand. Led the technical implementation in AstroJS.',
    tags: ['work', 'case study'],
  },
  {
    file: 'advent-of-code.mdx',
    lang: 'Kotlin',
    stack: 'TypeScript · Java · Python',
    year: '2015–25',
    title: 'Advent of Code',
    deco: '500★',
    desc: 'All 500 stars across every AoC year since 2015. Built a side API that sets up each day and auto-updates the README.',
    tags: ['side', 'algorithms'],
  },
  {
    file: 'flexinvoice.mdx',
    lang: 'TypeScript',
    stack: 'Next.js · React · Express',
    year: '2025',
    title: 'FlexInvoice',
    deco: null,
    desc: 'An invoicing tool for my freelance company: structured data in, styled A4 PDF invoices out via server-side rendering and headless Chrome.',
    tags: ['freelance', 'tooling'],
  },
];

export const totalProjects = 20;

// ─── About page ───────────────────────────────────────────────────────────────

export const about = {
  introProse: 'My core stack is TypeScript and Java: React, Next.js and AstroJS on the frontend, Spring Boot and Node.js on the backend.',
  currentRoleDesc: 'my own company, building custom software for small businesses and freelancers.',
  previousRolesLine: 'Before that: Appetize.io (SaaS), Resourcify (waste-management SaaS), BJSS (consulting, Specsavers e-commerce), Booking.com / Rentalcars.com (graduate programme).',
  blockquote: 'At my best when the problem is ambiguous, the deadline is real, and the team trusts each other.',
  howIWork: [
    "I care about reliability, usability and maintainability, and I prefer clear design and pragmatic solutions. I write tests, read documentation, and do a lot of code review and pairing.",
    "I've worked fully remotely and asynchronously across time zones since March 2020, including a couple of years on US time zones from Europe.",
  ],
  backgroundProse: 'I grew up in Italy and studied Computer Science at the Free University of Bolzano, with an exchange semester at the College of Charleston (USA). I then did an MSc at the University of Manchester and started my career at Booking.com in the UK, where I lived for several years.',
  languagesSpoken: ['Italian', 'English', 'German'],
  languagesNote: 'native, C2 and B2 respectively, plus a little French, Spanish and Catalan.',
  outsideCode: 'I have a diploma in oboe, and I like music enough to have written a tool to rescue my 12,000-track library from Plex.',
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
  workDesc: 'Currently building custom software through my own company, TPTS: FlexInvoice, FlexTag (a QR-labelled asset register) and a few personal projects such as Postilla.',
  freelanceLine: 'Open to freelance projects (web, tooling).',
  offKeyboard: [
    'Practising the oboe.',
    'Tinkering with side projects like Postilla, a from-scratch rewrite of the Waline comment system.',
  ],

  footNote: "This page is inspired by Derek Sivers' /now movement. If you have one, I'd love to read it.",
  learning: [
    { done: true,  text: 'AI-assisted development workflows' },
    { done: false, text: 'Swift + SwiftUI for iOS' },
    { done: false, text: 'Postilla roadmap (9 of 11 milestones done)' },
  ],

  learningPreview: [
    { done: true,  text: 'AI-assisted development workflows' },
    { done: false, text: 'Swift for iOS' },
    { done: false, text: 'Postilla (9 of 11 milestones)' },
  ],

  reading: [] as { title: string; author: string; note?: string }[],

  offKeyboardPreview: [
    { icon: '🎶', text: 'Practising the oboe' },
    { icon: '🛠', text: 'Side projects: Postilla, FlexTag' },
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
    title: 'Freelance Software Engineer',
    company: 'TPTS (Taylor Pancaldi Technology Services)',
    period: 'Oct 2025 – present',
    desc: 'Custom software for small businesses and freelancers. Built FlexInvoice, which generates styled PDF invoices from structured data via server-side rendering and headless Chrome, and FlexTag, a multi-tenant asset register with QR-coded labels printed on a Brother label printer.',
    stack: ['Next.js', 'React', 'Express', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Full-Stack Software Engineer',
    company: 'Appetize.io',
    period: 'Jan 2024 – Feb 2026',
    desc: 'Led the technical implementation of the new marketing website in AstroJS (performance from ~60% to 90%+, accessibility, best practices and SEO from ~75% to 95–100%). Worked on the V2 web application in Next.js, the Stripe billing integration, self-serve enterprise SSO (SAML and OIDC), and Google and GitHub authentication. Raised E2E test coverage from 50% to 90%+.',
    stack: ['AstroJS', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Software Engineer',
    company: 'Resourcify',
    period: 'Mar 2022 – Jan 2024',
    desc: 'Joined the Recycler API team. Built a production accounting platform used daily by the operations team, replacing spreadsheet workflows. Diagnosed scaling bottlenecks in backend services and asynchronous data pipelines. One of the senior developers: code reviews, mentoring and onboarding.',
    stack: ['Java', 'Spring Boot', 'Angular'],
  },
  {
    title: 'Software Engineer',
    company: 'BJSS',
    period: 'Nov 2020 – Mar 2022',
    desc: "Worked on Specsavers' e-commerce platforms. Maintained a large Drupal-based web application, architected a GDPR-compliant cookie consent system across 9 production domains behind a feature flag, and helped containerize the application.",
    stack: ['Drupal', 'PHP', 'Docker'],
  },
  {
    title: 'Graduate Software Engineer',
    company: 'Booking.com / Rentalcars.com',
    period: 'Sep 2018 – Nov 2020',
    desc: 'Rotation-based graduate programme. Migrated legacy systems to Spring-based APIs, worked on payments, sanctions screening and insurance products, and built React UI components and search filters during a web replatforming.',
    stack: ['Java', 'Spring', 'React'],
  },
  {
    title: 'Research Assistant',
    company: 'Free University of Bolzano',
    period: 'Sep 2017 – Apr 2018',
    desc: 'Co-authored a peer-reviewed IEEE research article on cloud service contracts and policies, analysing the implications of GDPR.',
    stack: [],
  },
];

export const education = [
  {
    title: 'MSc Advanced Computer Science (Software Engineering & Data Science)',
    institution: 'The University of Manchester (UK)',
    period: '2018',
    desc: 'Graduated with distinction.',
  },
  {
    title: 'BSc Computer Science',
    institution: 'Free University of Bolzano (Italy)',
    period: '2017',
    desc: 'Grade: 106 / 110.',
  },
  {
    title: 'BSc Computer Science (exchange semester)',
    institution: 'College of Charleston (USA)',
    period: '2015',
    desc: 'GPA: 4.0.',
  },
];

export const skills: Record<string, string[]> = {
  'Frontend & UX':  ['React', 'Angular', 'Next.js', 'AstroJS', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Figma'],
  'Backend & APIs': ['Java (Spring Boot)', 'Node.js', 'Express', 'Python', 'PHP', 'REST', 'Stripe'],
  Databases:        ['Postgres', 'MySQL', 'MongoDB'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'GitLab CI', 'Jenkins'],
  Practices:        ['TDD', 'DDD', 'Code review', 'Pair programming'],
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
      { name: 'Kotlin',     desc: 'Advent of Code' },
      { name: 'Java',       desc: 'Spring Boot' },
      { name: 'Node.js',    desc: 'runtime of choice' },
      { name: 'Python',     desc: 'scripting, FastAPI' },
    ],
  },
  {
    category: 'frontend',
    items: [
      { name: 'AstroJS',      desc: 'static sites, portfolios' },
      { name: 'React',        desc: 'SPAs, dashboards' },
      { name: 'Next.js',      desc: 'SSR, full-stack' },
      { name: 'Tailwind CSS', desc: 'styling utility-first' },
    ],
  },
  {
    category: 'tooling + infra',
    items: [
      { name: 'Playwright',      desc: 'E2E tests' },
      { name: 'GitHub Actions',  desc: 'CI/CD' },
      { name: 'Docker',          desc: 'containerisation' },
      { name: 'AWS',             desc: 'cloud' },
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