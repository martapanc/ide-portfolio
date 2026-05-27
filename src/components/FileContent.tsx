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
          stack="AstroJS · Tailwind · Cloudinary"
          year="2025"
          tags={['work', 'case study']}
          github={null}
          live="https://appetize.io"
          intro="Full marketing-site rebuild for a B2B audience. Led the move from a playful CMS-driven site to a faster, SEO-tight AstroJS build that could be maintained by the team without touching code."
          sections={[
            {
              heading: 'The problem',
              body: 'The original site was built on a CMS that had grown brittle over the years. Pages were slow, SEO was an afterthought, and every content change required a developer. The marketing team needed ownership.',
            },
            {
              heading: 'What I built',
              body: 'A full Astro 4 site with content collections for the blog and changelog. Tailwind CSS for styling, Cloudinary for asset management, and a custom build pipeline that generates og:images at build time. Lighthouse score went from ~60 to 97.',
            },
            {
              heading: 'Key decisions',
              body: 'Chose Astro over Next.js because the site is 95% static — no need for server components. Content collections gave the marketing team a typed, schema-validated editing experience without a CMS layer.',
            },
          ]}
        />
      );
    case 'flexinvoice.mdx':
      return (
        <ProjectPage
          title="FlexInvoice"
          lang="TypeScript"
          stack="React · Puppeteer · Node.js"
          year="2025"
          tags={['freelance', 'tooling']}
          github="https://github.com"
          live={null}
          intro="A small, JSON-driven invoice generator I built for my freelance company. PDF render via Puppeteer headless Chrome, with an automation pipeline to pull line items from a spreadsheet."
          sections={[
            {
              heading: 'Why I built it',
              body: 'Every invoice tool either costs money or generates PDFs that look like they were made in 2002. I wanted something that matched my brand, ran locally, and could be scripted.',
            },
            {
              heading: 'How it works',
              body: 'A JSON config defines the invoice structure. A React component renders it with pixel-perfect styling. Puppeteer captures it to PDF. A Node.js CLI ties it together: `flexinvoice generate --month=2025-04`.',
            },
          ]}
        />
      );
    case 'advent-of-code.mdx':
      return (
        <ProjectPage
          title="Advent of Code — 500 ★"
          lang="Kotlin"
          stack="Kotlin · Spring · GitHub Actions"
          year="2015–2025"
          tags={['side', 'algorithms']}
          github="https://github.com"
          live={null}
          intro="All 500 stars across every AoC year since 2015. Built a side API that scaffolds each day, fetches puzzle input, and auto-updates the README with star counts."
          sections={[
            {
              heading: 'The approach',
              body: 'Each year lives in its own Gradle module. Solutions are in Kotlin, with occasional Haskell experiments for the pure-functional days. A GitHub Actions workflow runs all solutions nightly and posts runtimes to a gist.',
            },
            {
              heading: 'What I learned',
              body: 'Dynamic programming, graph traversal, and the pain of floating-point in Kotlin. Also: that AoC day 25 is almost always trivial if you did the other 24 well.',
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
