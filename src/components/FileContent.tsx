import IndexPage from './content/IndexPage';
import AboutPage from './content/AboutPage';
import CVPage from './content/CVPage';
import UsesPage from './content/UsesPage';
import ContactPage from './content/ContactPage';
import NowPage from './content/NowPage';
import ProjectPage from './content/ProjectPage';
import PlaceholderPage from './content/PlaceholderPage';

type Props = {
  file: string;
  onNavigate: (name: string) => void;
};

export default function FileContent({ file, onNavigate }: Props) {
  switch (file) {
    case 'index.tsx':
      return <IndexPage onNavigate={onNavigate} />;
    case 'about.md':
      return <AboutPage />;
    case 'cv.tsx':
      return <CVPage />;
    case 'uses.md':
      return <UsesPage />;
    case 'contact.ts':
      return <ContactPage />;
    case 'now.md':
      return <NowPage />;
    case 'appetize-2.0.mdx':
      return (
        <ProjectPage
          title="Appetize.io 2.0"
          lang="TypeScript"
          stack="AstroJS · TypeScript"
          year="2025"
          tags={['work', 'case study']}
          github={null}
          live="https://appetize.io"
          intro="Marketing-site rebuild for a B2B audience, as part of a company-wide rebrand at Appetize. I led the technical implementation in AstroJS."
          sections={[
            {
              heading: 'The problem',
              body: 'The previous design was visually appealing but too playful for a business-focused audience, and the company was going through a rebrand.',
            },
            {
              heading: 'What I built',
              body: 'The new appetize.io, rebuilt almost from scratch in AstroJS as a maintainable static site. Performance went from ~60% to 90%+, and accessibility, best practices and SEO from ~75% to 95–100% across core pages.',
            },
          ]}
        />
      );
    case 'flexinvoice.mdx':
      return (
        <ProjectPage
          title="FlexInvoice"
          lang="TypeScript"
          stack="Next.js · React · Express · Docker"
          year="2025"
          tags={['freelance', 'tooling']}
          github={null}
          live={null}
          intro="An invoicing tool for my own company, TPTS. It generates styled PDF invoices from structured data via server-side rendering and headless Chrome."
          sections={[
            {
              heading: 'Why I built it',
              body: 'Basic Word templates were too simple, and I did not want a complete invoicing product. I wanted something that matched my needs and could be automated.',
            },
            {
              heading: 'How it works',
              body: 'Two decoupled services: a stateless Next.js rendering API (Zod validation, server-side React, Tailwind CSS, A4 PDF output) and a React + Express client with a form-based GUI, YAML-driven data presets, schema validation, CSV export and Docker containerization.',
            },
          ]}
        />
      );
    case 'advent-of-code.mdx':
      return (
        <ProjectPage
          title="Advent of Code — 500 ★"
          lang="Kotlin"
          stack="TypeScript · Kotlin · Java · Python"
          year="2015–2025"
          tags={['side', 'algorithms']}
          github="https://github.com/martapanc/Advent-Of-Code"
          live={null}
          intro="All 500 stars across every Advent of Code year since 2015. I also built a small API that sets up each day's class, downloads the input and updates the README with my star progress."
          sections={[
            {
              heading: 'The approach',
              body: 'I finished the 2020 event and then went back to solve all the earlier years. Solutions are mainly in Kotlin, with TypeScript, Java and Python in places.',
            },
            {
              heading: 'What I got out of it',
              body: 'A lot of progress with Kotlin, complex algorithms and problem solving in general.',
            },
          ]}
        />
      );
    case 'blog.md':
    case 'recruiters.md':
    case 'clients.md':
    case 'side-projects':
    case 'archive':
      return <PlaceholderPage file={file} />;
    default:
      return <PlaceholderPage file={file} />;
  }
}
