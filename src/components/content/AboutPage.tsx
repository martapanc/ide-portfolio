import { personal, hero, experience, about, site } from '../../data/portfolio';

export default function AboutPage() {
  const currentRole = experience[0];

  return (
    <div className="md-body">
      <p className="c-comment">{`# about.md`}</p>

      <h1><span className="hash">#</span> Hi, I'm {personal.name}.</h1>

      <p>
        Software engineer based in <span className="md-strong">{personal.location}</span>, with {hero.yearsExpFull} of experience.
        {' '}{about.introProse}
      </p>

      <p>
        I'm currently a <span className="md-strong">{currentRole.title} at {hero.currentCompany}</span>,{' '}
        {about.currentRoleDesc}{' '}
        {about.previousRolesLine}
      </p>

      <blockquote>{about.blockquote}</blockquote>

      <h2><span className="hash">##</span> How I work</h2>

      {about.howIWork.map((para, i) => <p key={i}>{para}</p>)}

      <h2><span className="hash">##</span> Background</h2>

      <p>
        {about.backgroundProse} Now I'm back in {personal.location}, fully remote, which suits me well.
      </p>

      <p>
        I speak{' '}
        {about.languagesSpoken.map((lang, i) => (
          <span key={lang}>
            <code>{lang}</code>
            {i < about.languagesSpoken.length - 2 ? ', ' : i < about.languagesSpoken.length - 1 ? ', and ' : ''}
          </span>
        ))}
        {' '}— {about.languagesNote}
      </p>

      <h2><span className="hash">##</span> Outside code</h2>

      <p>{about.outsideCode}</p>

      <h2><span className="hash">##</span> This site</h2>

      <p>
        Built with{' '}
        {about.site.builtWith.map((tech, i) => (
          <span key={tech}>
            <code>{tech}</code>
            {i < about.site.builtWith.length - 1 ? ' and ' : ''}
          </span>
        ))}
        , themed after the IDE I spend most of my day in.{' '}
        {about.site.theme} palette. {about.site.font} everywhere that counts.
      </p>

      <p>
        Source is on <a href={site.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>{' '}
        if you're curious about the implementation.
      </p>
    </div>
  );
}
