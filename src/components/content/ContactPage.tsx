import { personal, contactPage } from '../../data/portfolio';

export default function ContactPage() {
  return (
    <div className="contact-body">
      <p className="c-comment">{'// contact.ts'}</p>
      <p className="c-comment" style={{ marginTop: '4px' }}>
        {`// ${contactPage.comment}`}
      </p>

      <div className="contact-block">
        <div className="export-line">export const contact = {'{'}</div>

        <div style={{ paddingLeft: '20px' }}>
          <div className="contact-field">
            <span className="cf-key">email:</span>
            <span className="cf-val">
              <a href={`mailto:${personal.email}`}>"{personal.email}"</a>
            </span>
            <span className="cf-comment">// preferred</span>
          </div>
          <div className="contact-field">
            <span className="cf-key">github:</span>
            <span className="cf-val">
              <a href={personal.github.href} target="_blank" rel="noopener noreferrer">
                "{personal.github.label}"
              </a>
            </span>
          </div>
          <div className="contact-field">
            <span className="cf-key">linkedin:</span>
            <span className="cf-val">
              <a href={personal.linkedin.href} target="_blank" rel="noopener noreferrer">
                "{personal.linkedin.label}"
              </a>
            </span>
          </div>
          <div className="contact-field">
            <span className="cf-key">location:</span>
            <span className="cf-val">"{personal.locationFull}"</span>
            <span className="cf-comment">// remote-first</span>
          </div>
          <div className="contact-field">
            <span className="cf-key">availability:</span>
            <span className="cf-val">"{personal.availability}"</span>
            <span className="cf-comment">// EU / UK time zones</span>
          </div>
          <div className="contact-field">
            <span className="cf-key">responseTime:</span>
            <span className="cf-val">"{contactPage.responseTime}"</span>
          </div>
        </div>

        <div className="brace">{'}'}</div>
      </div>

      <div style={{ marginTop: '24px', fontFamily: 'var(--mono)', fontSize: '12.5px', color: 'var(--subtle)', lineHeight: 1.8 }}>
        <div className="c-comment">{'// Reach out about:'}</div>
        <div>
          {contactPage.reachOut.map((line, i) => (
            <span key={i}>{'→ '}{line}{i < contactPage.reachOut.length - 1 && <br />}</span>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '28px', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>
        {`// ${contactPage.footNote}`}
      </div>
    </div>
  );
}
