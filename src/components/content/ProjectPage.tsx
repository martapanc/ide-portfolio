type Section = { heading: string; body: string };

type Props = {
  title: string;
  lang: string;
  stack: string;
  year: string;
  tags: string[];
  github: string | null;
  live: string | null;
  intro: string;
  sections: Section[];
};

export default function ProjectPage({ title, lang, stack, year, tags, github, live, intro, sections }: Props) {
  return (
    <div>
      <section className="project-hero">
        <div className="proj-meta">
          <span><span className="k">lang:</span> <span className="v">{lang}</span></span>
          <span><span className="k">stack:</span> <span className="v">{stack}</span></span>
          <span><span className="k">year:</span> <span className="v">{year}</span></span>
          {tags.map(t => (
            <span key={t} style={{ background: 'var(--hi-low)', border: '1px solid var(--hi-med)', padding: '1px 7px', borderRadius: '4px', color: 'var(--subtle)', fontFamily: 'var(--mono)', fontSize: '11px' }}>{t}</span>
          ))}
        </div>
        <h1>{title}</h1>
        <p style={{ fontFamily: 'var(--sans)', fontSize: '15px', lineHeight: 1.65, color: 'var(--subtle)', maxWidth: '660px' }}>{intro}</p>
        <div className="proj-links">
          {github && (
            <a className="ide-btn" href={github} target="_blank" rel="noopener noreferrer">
              ↗ GitHub
            </a>
          )}
          {live && (
            <a className="ide-btn primary" href={live} target="_blank" rel="noopener noreferrer">
              → Live site
            </a>
          )}
        </div>
      </section>

      <div className="project-body">
        {sections.map(s => (
          <div key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
