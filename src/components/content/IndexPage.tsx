type Props = { onNavigate: (name: string) => void };

const WORK = [
  { period: '2024 – now',  company: 'Appetize.io',  role: 'Senior Full-Stack Engineer', stack: 'Next.js · Astro · Mongo' },
  { period: '2021 – 2024', company: 'Resourcify',   role: 'Full-Stack Engineer',        stack: 'React · Node · Postgres' },
  { period: '2019 – 2021', company: 'BJSS',          role: 'Software Engineer',          stack: 'Java · Angular · AWS' },
  { period: '2018 – 2019', company: 'Booking.com',  role: 'Graduate Engineer',          stack: 'Perl · React · Kotlin' },
];

const PROJECTS = [
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

export default function IndexPage({ onNavigate }: Props) {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="avatar-wrap">
          <div className="avatar">M</div>
          <div className="avatar-caption">// avatar.tsx</div>
        </div>

        <p className="c-comment">// const developer = {'{'}</p>
        <h1>
          <span className="const">const</span> Marta
        </h1>
        <p className="role">
          <span className="arrow">=&gt;</span>
          <span className="fn">fullStackEngineer</span>(
          <span className="str">"8y"</span>)
          <span className="cursor" />
        </p>

        <pre className="docstring">
          <span className="quotes">"""</span>{'\n'}
          {'Italian software engineer, currently at '}
          <span className="company">Appetize.io</span>{'.\n'}
          {'Eight years across '}
          <span className="company">Booking.com</span>
          {', '}
          <span className="company">BJSS</span>
          {', '}
          <span className="company">Resourcify</span>
          {'.\n'}
          {'At my best learning, experimenting, solving hard problems.\n'}
          <span className="quotes">"""</span>
        </pre>

        <div className="facts">
          <span><span className="key">location:</span> <span className="val">Italy</span></span>
          <span><span className="key">languages:</span> <span className="val">it · en · de</span></span>
          <span><span className="key">remote:</span> <span className="val">EU / UK time zones</span></span>
          <span className="pill">
            <span className="live" />
            open to freelance
          </span>
        </div>

        <div className="ctas">
          <button className="ide-btn primary" onClick={() => onNavigate('cv.tsx')}>→ View CV</button>
          <button className="ide-btn" onClick={() => onNavigate('about.md')}>Read about me</button>
          <button className="ide-btn" onClick={() => onNavigate('contact.ts')}>Get in touch</button>
        </div>
      </section>

      {/* WORK HISTORY */}
      <section className="c-section">
        <div className="c-section-head">
          <span className="marker">// 01</span>
          <h2><span className="fn">work_history</span><span className="punct">()</span></h2>
          <span className="count">4 entries · 8 years</span>
        </div>
        <ul className="work-list">
          {WORK.map(w => (
            <li key={w.company}>
              <span className="when">{w.period}</span>
              <span className="where">
                <b>{w.company}</b>
                <span className="role-label"> · {w.role}</span>
              </span>
              <span className="stack">{w.stack}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="c-section">
        <div className="c-section-head">
          <span className="marker">// 02</span>
          <h2><span className="fn">featured_projects</span><span className="punct">()</span></h2>
          <span className="count">3 of 20</span>
        </div>
        <div className="projects-grid">
          {PROJECTS.map(p => (
            <article
              key={p.file}
              className="proj-card"
              onClick={() => onNavigate(p.file)}
            >
              <div className="meta">
                <span><span className="k">lang:</span> <span className="v">{p.lang}</span></span>
                <span><span className="k">stack:</span> <span className="v">{p.stack}</span></span>
                <span><span className="k">year:</span> <span className="v">{p.year}</span></span>
              </div>
              <h3>{p.title}{p.deco && <span className="deco"> {p.deco}</span>}</h3>
              <p>{p.desc}</p>
              <div className="card-footer">
                <div className="tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <span className="open">open →</span>
              </div>
            </article>
          ))}
        </div>
        <button className="see-all" onClick={() => onNavigate('now.md')}>
          $ ls ./projects → see all 20 →
        </button>
      </section>

      {/* NOW */}
      <section className="c-section">
        <div className="c-section-head">
          <span className="marker">// 03</span>
          <h2><span className="fn">now</span><span className="punct">.md</span></h2>
          <span className="count">last updated 2026-05-12</span>
        </div>
        <div className="panels-grid">
          <div className="panel">
            <h4><span className="hash">#</span> learning</h4>
            <ul>
              <li className="done"><span className="box">[x]</span><span className="what">LLM, RAG &amp; eval pipelines</span></li>
              <li><span className="box">[ ]</span><span className="what">Figma automation &amp; plugin dev</span></li>
              <li><span className="box">[ ]</span><span className="what">Swift for iOS</span></li>
              <li><span className="box">[ ]</span><span className="what">Svelte 5</span></li>
            </ul>
            <div className="stamp">// pulled from now.md</div>
          </div>
          <div className="panel">
            <h4><span className="hash">#</span> off-keyboard</h4>
            <ul>
              <li><span className="box">📖</span><span className="what">Reading: <em>We Should All Be Feminists</em> – C.N. Adichie</span></li>
              <li><span className="box">🎶</span><span className="what">Practising oboe + alto for the choir</span></li>
              <li><span className="box">✍🏻</span><span className="what">Drafting short fiction · ~1.2k words / wk</span></li>
              <li><span className="box">📷</span><span className="what">Travel photo backlog from Tokyo &amp; Lisbon</span></li>
            </ul>
            <div className="stamp">// because i'm not just a software engineer</div>
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <div className="sign-row">
        <div className="signature">Marta ~</div>
        <div className="signoff">
          <div>// thanks for reading</div>
          <div>
            <span className="arrow">$</span> say hi →{' '}
            <a href="mailto:marta@martacodes.it">marta@martacodes.it</a>
          </div>
        </div>
      </div>
    </>
  );
}
