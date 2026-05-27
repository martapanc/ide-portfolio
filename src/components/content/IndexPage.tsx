import { personal, hero, work, featuredProjects, totalProjects, now } from '../../data/portfolio';

type Props = { onNavigate: (name: string) => void };

export default function IndexPage({ onNavigate }: Props) {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="avatar-wrap">
          <div className="avatar">{personal.name[0]}</div>
          <div className="avatar-caption">// avatar.tsx</div>
        </div>

        <p className="c-comment">// const developer = {'{'}</p>
        <h1>
          <span className="const">const</span> {personal.name}
        </h1>
        <p className="role">
          <span className="arrow">=&gt;</span>
          <span className="fn">{hero.role}</span>(
          <span className="str">"{hero.yearsExp}"</span>)
          <span className="cursor" />
        </p>

        <pre className="docstring">
          <span className="quotes">"""</span>{'\n'}
          {'Italian software engineer, currently at '}
          <span className="company">{hero.currentCompany}</span>{'.\n'}
          {`${hero.yearsExpFull} across `}
          {hero.previousCompanies.map((c, i) => (
            <span key={c}>
              <span className="company">{c}</span>
              {i < hero.previousCompanies.length - 1 ? ', ' : ''}
            </span>
          ))}
          {'.\n'}
          {hero.tagline + '\n'}
          <span className="quotes">"""</span>
        </pre>

        <div className="facts">
          <span><span className="key">location:</span> <span className="val">{personal.location}</span></span>
          <span><span className="key">languages:</span> <span className="val">{personal.languagesCodes}</span></span>
          <span><span className="key">remote:</span> <span className="val">{personal.timezone}</span></span>
          <span className="pill">
            <span className="live" />
            {personal.availability}
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
          <span className="count">{work.length} entries · {hero.yearsExpFull}</span>
        </div>
        <ul className="work-list">
          {work.map(w => (
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
          <span className="count">{featuredProjects.length} of {totalProjects}</span>
        </div>
        <div className="projects-grid">
          {featuredProjects.map(p => (
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
          $ ls ./projects — see all {totalProjects} →
        </button>
      </section>

      {/* NOW */}
      <section className="c-section">
        <div className="c-section-head">
          <span className="marker">// 03</span>
          <h2><span className="fn">now</span><span className="punct">.md</span></h2>
          <span className="count">last updated {now.lastUpdated}</span>
        </div>
        <div className="panels-grid">
          <div className="panel">
            <h4><span className="hash">#</span> learning</h4>
            <ul>
              {now.learningPreview.map((item, i) => (
                <li key={i} className={item.done ? 'done' : undefined}>
                  <span className="box">{item.done ? '[x]' : '[ ]'}</span>
                  <span className="what">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="stamp">// pulled from now.md</div>
          </div>
          <div className="panel">
            <h4><span className="hash">#</span> off-keyboard</h4>
            <ul>
              {now.offKeyboardPreview.map((item, i) => (
                <li key={i}>
                  <span className="box">{item.icon}</span>
                  <span className="what">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="stamp">// because i'm not just a software engineer</div>
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <div className="sign-row">
        <div className="signature">{personal.name} ~</div>
        <div className="signoff">
          <div>// thanks for reading</div>
          <div>
            <span className="arrow">$</span> say hi →{' '}
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
