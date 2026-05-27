import { uses } from '../../data/portfolio';

export default function UsesPage() {
  return (
    <div className="md-body" style={{ maxWidth: '800px' }}>
      <p className="c-comment"># uses.md</p>

      <h1><span className="hash">#</span> Uses</h1>

      <p>
        Things I use daily. Updated when something changes.
        Inspired by <a href="https://uses.tech" target="_blank" rel="noopener noreferrer">uses.tech</a>.
      </p>

      <div className="uses-grid" style={{ marginTop: '24px' }}>
        {uses.map(section => (
          <div key={section.category} className="uses-card">
            <h3>{section.category}</h3>
            <ul>
              {section.items.map(item => (
                <li key={item.name}>
                  <span className="uses-name">{item.name}</span>
                  <span className="uses-desc">— {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
