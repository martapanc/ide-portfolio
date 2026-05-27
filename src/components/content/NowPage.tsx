import { now, personal, hero, experience } from '../../data/portfolio';

export default function NowPage() {
  const currentRole = experience[0];

  return (
    <div className="md-body">
      <p className="c-comment"># now.md — last updated {now.lastUpdated}</p>
      <p className="c-comment" style={{ marginTop: '4px' }}>
        {'# inspired by nownownow.com'}
      </p>

      <h1><span className="hash">#</span> Now</h1>

      <p>{now.intro}</p>

      <h2><span className="hash">##</span> Work</h2>
      <p>
        At <span className="md-strong">{hero.currentCompany}</span> as {currentRole.title}.{' '}
        {now.workDesc}
      </p>
      <p>
        {now.freelanceLine}{' '}
        If you have something interesting, <a href={`mailto:${personal.email}`}>reach out</a>.
      </p>

      <h2><span className="hash">##</span> Learning</h2>
      <div className="panels-grid" style={{ marginTop: '12px' }}>
        <div className="panel">
          <ul>
            {now.learning.map((item, i) => (
              <li key={i} className={item.done ? 'done' : undefined}>
                <span className="box">{item.done ? '[x]' : '[ ]'}</span>
                <span className="what">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <h4><span className="hash">#</span> reading</h4>
          <ul>
            {now.reading.map((book, i) => (
              <li key={i}>
                <span className="box">📖</span>
                <span className="what">
                  <em>{book.title}</em> – {book.author}
                  {book.note && ` (${book.note})`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2><span className="hash">##</span> Off-keyboard</h2>
      {now.offKeyboard.map((para, i) => <p key={i}>{para}</p>)}

      <h2><span className="hash">##</span> Elsewhere on the internet</h2>
      <ul>
        {now.elsewhere.map(link => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
            {' '}— {link.note}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '32px', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>
        // {now.footNote}
      </div>
    </div>
  );
}
