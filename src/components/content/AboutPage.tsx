export default function AboutPage() {
  return (
    <div className="md-body">
      <p className="c-comment">{`# about.md`}</p>

      <h1><span className="hash">#</span> Hi, I'm Marta.</h1>

      <p>
        Software engineer based in <span className="md-strong">northern Italy</span>, working remotely for eight years.
        I write mostly TypeScript, occasionally Kotlin when Java needs to be less verbose,
        and I've been known to write a Perl script without apologising.
      </p>

      <p>
        I'm currently a <span className="md-strong">Senior Full-Stack Engineer at Appetize.io</span>,
        where I work on the marketing site, internal tooling, and whatever else needs a careful pair of hands.
        Before that: Resourcify (climate-tech), BJSS (consulting), Booking.com (graduate).
      </p>

      <blockquote>
        At my best when the problem is ambiguous, the deadline is real, and the team trusts each other.
      </blockquote>

      <h2><span className="hash">##</span> How I work</h2>

      <p>
        I'm thorough without being slow. I write tests, read documentation, and leave code
        in better shape than I found it. I prefer small, well-named functions over clever one-liners.
        I think the README matters.
      </p>

      <p>
        I've worked in teams of 2 and teams of 200. I've been the only frontend engineer and
        the person untangling a decade of technical debt. I adapt.
      </p>

      <h2><span className="hash">##</span> Background</h2>

      <p>
        I grew up in Italy, studied Computer Science, moved to Amsterdam for Booking.com,
        then to London for a few years. Now I'm back in Italy, fully remote, which suits me well.
      </p>

      <p>
        I speak <code>Italian</code>, <code>English</code>, and <code>German</code> —
        the last one fluently enough to work in it, not fluently enough to enjoy it.
      </p>

      <h2><span className="hash">##</span> Outside code</h2>

      <p>
        I play oboe and alto in an amateur choir. I write short fiction (slowly).
        I read a lot — mostly literary fiction, occasionally non-fiction that makes me reconsider something.
        I take photos when I travel, which is often enough.
      </p>

      <h2><span className="hash">##</span> This site</h2>

      <p>
        Built with <code>Astro</code> and <code>React</code>, themed after the IDE I spend most of my day in.
        Rose Pine Moon palette. JetBrains Mono everywhere that counts.
      </p>

      <p>
        Source is on <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>{' '}
        if you're curious about the implementation.
      </p>
    </div>
  );
}
