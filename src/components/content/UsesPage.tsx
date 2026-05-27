const USES = [
  {
    category: 'editor + terminal',
    items: [
      { name: 'Neovim', desc: 'daily driver, Rose Pine Moon theme' },
      { name: 'VS Code', desc: 'pair-programming, extensions' },
      { name: 'WezTerm', desc: 'terminal emulator' },
      { name: 'tmux', desc: 'session management' },
      { name: 'zsh + starship', desc: 'shell prompt' },
    ],
  },
  {
    category: 'languages + runtimes',
    items: [
      { name: 'TypeScript', desc: 'primary language' },
      { name: 'Kotlin', desc: 'Advent of Code, JVM projects' },
      { name: 'Node.js', desc: 'runtime of choice' },
      { name: 'Python', desc: 'scripting, ML experiments' },
    ],
  },
  {
    category: 'frontend',
    items: [
      { name: 'AstroJS', desc: 'static sites, portfolios' },
      { name: 'React 19', desc: 'SPAs, dashboards' },
      { name: 'Next.js 15', desc: 'SSR, full-stack' },
      { name: 'Tailwind CSS', desc: 'styling utility-first' },
    ],
  },
  {
    category: 'tooling + infra',
    items: [
      { name: 'Vitest', desc: 'unit tests' },
      { name: 'Playwright', desc: 'E2E tests' },
      { name: 'GitHub Actions', desc: 'CI/CD' },
      { name: 'Docker', desc: 'containerisation' },
      { name: 'AWS', desc: 'S3, Lambda, CloudFront' },
    ],
  },
  {
    category: 'hardware',
    items: [
      { name: 'MacBook Pro M3', desc: '14", midnight, base model' },
      { name: 'LG UltraFine 27"', desc: 'external monitor' },
      { name: 'Keychron Q1', desc: 'Gateron Brown switches' },
      { name: 'Logitech MX Master 3', desc: 'mouse' },
    ],
  },
  {
    category: 'apps',
    items: [
      { name: 'Obsidian', desc: 'notes + second brain' },
      { name: 'Raycast', desc: 'launcher + snippets' },
      { name: 'Figma', desc: 'design + mockups' },
      { name: 'TablePlus', desc: 'database GUI' },
    ],
  },
];

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
        {USES.map(section => (
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
