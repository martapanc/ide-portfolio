import { experience, education, skills } from '../../data/portfolio';

export default function CVPage() {
  return (
    <div className="cv-body">
      <p className="c-comment">{'// cv.tsx — export default function Resume()'}</p>

      <div className="cv-section">
        <h2>// experience</h2>
        {experience.map(e => (
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
        {education.map(e => (
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
          {Object.entries(skills).map(([cat, items]) => (
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
