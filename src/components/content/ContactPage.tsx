export default function ContactPage() {
  return (
    <div className="contact-body">
      <p className="c-comment">{'// contact.ts'}</p>
      <p className="c-comment" style={{ marginTop: '4px' }}>
        {'// The best way to reach me is email. I read everything.'}
      </p>

      <div className="contact-block">
        <div className="export-line">export const contact = {'{'}</div>

        <div style={{ paddingLeft: '20px' }}>
          <div className="contact-field">
            <span className="cf-key">email:</span>
            <span className="cf-val">
              <a href="mailto:marta@martacodes.it">"marta@martacodes.it"</a>
            </span>
            <span className="cf-comment">// preferred</span>
          </div>
          <div className="contact-field">
            <span className="cf-key">github:</span>
            <span className="cf-val">
              <a href="https://github.com/martapancaldi" target="_blank" rel="noopener noreferrer">
                "github.com/martapancaldi"
              </a>
            </span>
          </div>
          <div className="contact-field">
            <span className="cf-key">linkedin:</span>
            <span className="cf-val">
              <a href="https://linkedin.com/in/martapancaldi" target="_blank" rel="noopener noreferrer">
                "linkedin.com/in/martapancaldi"
              </a>
            </span>
          </div>
          <div className="contact-field">
            <span className="cf-key">location:</span>
            <span className="cf-val">"Italy, CET (UTC+1)"</span>
            <span className="cf-comment">// remote-first</span>
          </div>
          <div className="contact-field">
            <span className="cf-key">availability:</span>
            <span className="cf-val">"open to freelance"</span>
            <span className="cf-comment">// EU / UK time zones</span>
          </div>
          <div className="contact-field">
            <span className="cf-key">responseTime:</span>
            <span className="cf-val">"within 24h on working days"</span>
          </div>
        </div>

        <div className="brace">{'}'}</div>
      </div>

      <div style={{ marginTop: '24px', fontFamily: 'var(--mono)', fontSize: '12.5px', color: 'var(--subtle)', lineHeight: 1.8 }}>
        <div className="c-comment">{'// Reach out about:'}</div>
        <div>
          {'→ Freelance or contract work (TypeScript, React, Astro, Node.js)'}<br/>
          {'→ Full-time remote opportunities'}<br/>
          {'→ Code reviews, architecture consultations'}<br/>
          {'→ Anything else worth talking about'}
        </div>
      </div>

      <div style={{ marginTop: '28px', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>
        {'// No recruiters calling without prior email. No AI-generated outreach (I can tell).'}
      </div>
    </div>
  );
}
