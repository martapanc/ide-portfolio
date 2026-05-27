export default function NowPage() {
  return (
    <div className="md-body">
      <p className="c-comment"># now.md — last updated 2026-05-12</p>
      <p className="c-comment" style={{ marginTop: '4px' }}>
        {'# inspired by nownownow.com'}
      </p>

      <h1><span className="hash">#</span> Now</h1>

      <p>
        A snapshot of what I'm currently doing, thinking about, and working on.
      </p>

      <h2><span className="hash">##</span> Work</h2>
      <p>
        At <span className="md-strong">Appetize.io</span> as Senior Full-Stack Engineer.
        Currently deep in a redesign of the customer-facing analytics dashboard —
        lots of React 19, some server components experiments, more charts than I'd like.
      </p>
      <p>
        Taking on occasional freelance projects on the side (web, tooling, architecture consulting).
        If you have something interesting, <a href="mailto:marta@martacodes.it">reach out</a>.
      </p>

      <h2><span className="hash">##</span> Learning</h2>
      <div className="panels-grid" style={{ marginTop: '12px' }}>
        <div className="panel">
          <ul>
            <li className="done"><span className="box">[x]</span><span className="what">LLM basics, RAG pipelines, eval frameworks</span></li>
            <li><span className="box">[ ]</span><span className="what">Figma automation &amp; plugin development</span></li>
            <li><span className="box">[ ]</span><span className="what">Swift + SwiftUI for iOS</span></li>
            <li><span className="box">[ ]</span><span className="what">Svelte 5 runes model</span></li>
            <li><span className="box">[ ]</span><span className="what">Rust (very slowly)</span></li>
          </ul>
        </div>
        <div className="panel">
          <h4><span className="hash">#</span> reading</h4>
          <ul>
            <li><span className="box">📖</span><span className="what"><em>We Should All Be Feminists</em> – Chimamanda Ngozi Adichie</span></li>
            <li><span className="box">📖</span><span className="what"><em>Staff Engineer</em> – Will Larson (reference)</span></li>
          </ul>
        </div>
      </div>

      <h2><span className="hash">##</span> Off-keyboard</h2>
      <p>
        Playing oboe and alto in a local amateur choir — we're rehearsing Brahms right now,
        which is exactly as humbling as it sounds.
      </p>
      <p>
        Writing short fiction at roughly 1,200 words a week. Currently working on a story set
        in a near-future Milan. Going slowly and enjoying it.
      </p>
      <p>
        Processing a photo backlog from Tokyo and Lisbon. Both trips were worth every euro.
      </p>

      <h2><span className="hash">##</span> Elsewhere on the internet</h2>
      <ul>
        <li>Occasional posts on <a href="https://medium.com" target="_blank" rel="noopener noreferrer">Medium</a> — mostly technical deep-dives</li>
        <li>Photos on <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li>Books on <a href="https://goodreads.com" target="_blank" rel="noopener noreferrer">Goodreads</a></li>
      </ul>

      <div style={{ marginTop: '32px', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>
        // This page is inspired by Derek Sivers' /now movement. If you have one, I'd love to read it.
      </div>
    </div>
  );
}
