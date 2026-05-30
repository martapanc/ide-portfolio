import { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import TabBar from './TabBar';
import StatusBar from './StatusBar';
import FileContent from './FileContent';
import CommandPalette, { type PaletteAction } from './CommandPalette';
import { personal } from '../data/portfolio';

export type FileEntry = {
  name: string;
  type: 'file' | 'folder';
  children?: FileEntry[];
};

export type FileTree = {
  group: string;
  items: FileEntry[];
};

const TREE: FileTree[] = [
  {
    group: 'workspace',
    items: [
      { name: 'index.tsx', type: 'file' },
      { name: 'about.md', type: 'file' },
      { name: 'cv.tsx', type: 'file' },
      { name: 'uses.md', type: 'file' },
      { name: 'contact.ts', type: 'file' },
    ],
  },
  {
    group: 'projects/',
    items: [
      {
        name: 'featured',
        type: 'folder',
        children: [
          { name: 'appetize-2.0.mdx', type: 'file' },
          { name: 'flexinvoice.mdx', type: 'file' },
          { name: 'advent-of-code.mdx', type: 'file' },
        ],
      },
      { name: 'side-projects', type: 'folder', children: [] },
      { name: 'archive', type: 'folder', children: [] },
    ],
  },
  {
    group: 'writing/',
    items: [
      { name: 'blog.md', type: 'file' },
      { name: 'now.md', type: 'file' },
    ],
  },
  {
    group: 'for/',
    items: [
      { name: 'recruiters.md', type: 'file' },
      { name: 'clients.md', type: 'file' },
    ],
  },
];

// Must match .ide-gutter { font-size: 12px; line-height: 1.95 } → 23.4px per line
const GUTTER_LINE_PX = 12 * 1.95;

function fileToLang(filename: string): string {
  const ext = filename.split('.').pop();
  const map: Record<string, string> = {
    tsx: 'TSX', ts: 'TypeScript', md: 'Markdown', mdx: 'MDX',
  };
  return map[ext ?? ''] ?? 'Plain Text';
}

export default function IDE() {
  const [activeFile, setActiveFile] = useState('index.tsx');
  const [openTabs, setOpenTabs] = useState<string[]>(['index.tsx']);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(['featured']),
  );
  const [gutterLines, setGutterLines] = useState(20);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () =>
      setGutterLines(Math.max(Math.ceil(el.scrollHeight / GUTTER_LINE_PX), 20));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [activeFile]);

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen(o => !o);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  const openFile = (name: string) => {
    setOpenTabs(prev => (prev.includes(name) ? prev : [...prev, name]));
    setActiveFile(name);
  };

  const closeTab = (name: string) => {
    setOpenTabs(prev => {
      const next = prev.filter(t => t !== name);
      if (next.length === 0) return prev;
      if (activeFile === name) {
        const idx = prev.indexOf(name);
        setActiveFile(next[Math.max(0, idx - 1)]);
      }
      return next;
    });
  };

  const paletteActions: PaletteAction[] = [
    { id: 'nav-index',   label: 'Open index.tsx',   icon: '⬡', category: 'navigate', onSelect: () => openFile('index.tsx') },
    { id: 'nav-about',   label: 'Open about.md',    icon: '◈', category: 'navigate', onSelect: () => openFile('about.md') },
    { id: 'nav-cv',      label: 'Open cv.tsx',       icon: '⬡', category: 'navigate', onSelect: () => openFile('cv.tsx') },
    { id: 'nav-uses',    label: 'Open uses.md',      icon: '◈', category: 'navigate', onSelect: () => openFile('uses.md') },
    { id: 'nav-contact', label: 'Open contact.ts',   icon: '⬡', category: 'navigate', onSelect: () => openFile('contact.ts') },
    { id: 'nav-now',     label: 'Open now.md',       icon: '◈', category: 'navigate', onSelect: () => openFile('now.md') },
    { id: 'theme',       label: `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`, icon: '◐', category: 'theme',    onSelect: toggleTheme },
    { id: 'email',       label: 'Copy email address', icon: '✉', category: 'contact', onSelect: () => navigator.clipboard.writeText(personal.email) },
  ];

  const toggleFolder = (name: string) => {
    setExpandedFolders(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  return (
    <div className="ide-window">
      {/* Title bar */}
      <div className="ide-titlebar">
        <div className="ide-lights">
          <span />
          <span />
          <span />
        </div>
        <div className="ide-breadcrumb">
          ~/{personal.name.toLowerCase()}/portfolio/
          <span className="filename">{activeFile}</span>
        </div>
        <div className="ide-toolbar">
          <span title="Command palette (⌘K)" onClick={() => setPaletteOpen(true)}>⌘K</span>
          <span title="Toggle theme" onClick={toggleTheme}>◐</span>
        </div>
      </div>

      {/* App layout */}
      <div className="ide-app">
        <Sidebar
          tree={TREE}
          activeFile={activeFile}
          openTabs={openTabs}
          expandedFolders={expandedFolders}
          onFileClick={openFile}
          onFolderToggle={toggleFolder}
        />

        <main className="ide-main">
          <TabBar
            tabs={openTabs}
            activeTab={activeFile}
            onTabClick={openFile}
            onTabClose={closeTab}
          />

          <div className="ide-content-area">
            <div className="ide-gutter" aria-hidden>
              {Array.from({ length: gutterLines }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <div className="ide-file-content" key={activeFile} ref={contentRef}>
              <FileContent file={activeFile} onNavigate={openFile} />
            </div>
          </div>
        </main>
      </div>

      <StatusBar activeFile={activeFile} lang={fileToLang(activeFile)} />

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        actions={paletteActions}
      />
    </div>
  );
}
