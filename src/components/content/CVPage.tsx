const EXPERIENCE = [
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

const EDUCATION = [
  {
    title: 'BSc Computer Science',
    institution: 'University of Bologna',
    period: '2015 – 2018',
    desc: 'Focus on algorithms, distributed systems, and programming languages. Thesis on static analysis of concurrent programs.',
  },
];

const SKILLS = {
  Languages:  ['TypeScript', 'Kotlin', 'Java', 'Python', 'Perl (recovering)'],
  Frontend:   ['React', 'AstroJS', 'Next.js', 'Angular', 'Svelte (learning)'],
  Backend:    ['Node.js', 'Spring Boot', 'Express', 'Fastify'],
  Databases:  ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  Tooling:    ['Docker', 'GitHub Actions', 'AWS', 'Playwright', 'Vitest'],
};

export default function CVPage() {
  return (
    <div className="cv-body">
      <p className="c-comment">{'// cv.tsx — export default function Resume()'}</p>

      <div className="cv-section">
        <h2>// experience</h2>
        {EXPERIENCE.map(e => (
          <div key={e.company} className="cv-entry">
            <div className="cv-header">
              <div>
                <div className="cv-title">{e.title}</div>
                <div className="cv-company">{e.company}</div>
              </div>
              <div className="cv-period">{e.period}</div>
            </div>
            <div className="cv-desc">{e.desc}</div>
            <div className="cv-stack">
              {e.stack.map(s => <span key={s} className="chip">{s}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="cv-section">
        <h2>// education</h2>
        {EDUCATION.map(e => (
          <div key={e.institution} className="cv-entry">
            <div className="cv-header">
              <div>
                <div className="cv-title">{e.title}</div>
                <div className="cv-company">{e.institution}</div>
              </div>
              <div className="cv-period">{e.period}</div>
            </div>
            <div className="cv-desc">{e.desc}</div>
          </div>
        ))}
      </div>

      <div className="cv-section">
        <h2>// skills</h2>
        <div className="cv-entry">
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat} style={{ marginBottom: '12px' }}>
              <div style={{ color: 'var(--muted)', fontSize: '11px', marginBottom: '6px' }}>{cat}</div>
              <div className="cv-stack">
                {items.map(s => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '24px', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>
        // PDF version available on request → contact.ts
      </div>
    </div>
  );
}
