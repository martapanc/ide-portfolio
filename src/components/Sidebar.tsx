import type { FileTree, FileEntry } from './IDE';
import { personal } from '../data/portfolio';

type Props = {
  tree: FileTree[];
  activeFile: string;
  openTabs: string[];
  expandedFolders: Set<string>;
  onFileClick: (name: string) => void;
  onFolderToggle: (name: string) => void;
};

function fileIcon(name: string): string {
  const ext = name.split('.').pop();
  const map: Record<string, string> = {
    tsx: '⬡', ts: '⬡', md: '◈', mdx: '◈',
  };
  return map[ext ?? ''] ?? '○';
}

function FileItem({
  entry,
  activeFile,
  openTabs,
  expandedFolders,
  onFileClick,
  onFolderToggle,
  indent = false,
}: {
  entry: FileEntry;
  activeFile: string;
  openTabs: string[];
  expandedFolders: Set<string>;
  onFileClick: (name: string) => void;
  onFolderToggle: (name: string) => void;
  indent?: boolean;
}) {
  if (entry.type === 'folder') {
    const open = expandedFolders.has(entry.name);
    return (
      <>
        <div
          className={`ide-tree-item folder${indent ? ' indent' : ''}`}
          onClick={() => onFolderToggle(entry.name)}
        >
          <span className="item-icon">{open ? '▾' : '▸'}</span>
          <span>{entry.name}/</span>
        </div>
        {open && entry.children?.map(child => (
          <FileItem
            key={child.name}
            entry={child}
            activeFile={activeFile}
            openTabs={openTabs}
            expandedFolders={expandedFolders}
            onFileClick={onFileClick}
            onFolderToggle={onFolderToggle}
            indent
          />
        ))}
      </>
    );
  }

  const isActive = activeFile === entry.name;
  const isOpen = openTabs.includes(entry.name);
  const dotClass = isActive ? '●' : isOpen ? '·' : '○';

  return (
    <div
      className={`ide-tree-item${isActive ? ' active' : ''}${indent ? ' indent' : ''}`}
      onClick={() => onFileClick(entry.name)}
    >
      <span className="item-icon">{dotClass}</span>
      <span>{entry.name}</span>
    </div>
  );
}

export default function Sidebar({
  tree,
  activeFile,
  openTabs,
  expandedFolders,
  onFileClick,
  onFolderToggle,
}: Props) {
  return (
    <aside className="ide-sidebar">
      <div className="ide-sidebar-scroll">
        <div className="ide-brand">
          <span className="sl">{'<'}</span>
          <span className="name">{personal.brandName}</span>{' '}
          <span className="tag">/</span>
          <span className="sl">{'>'}</span>
        </div>

        {tree.map(section => (
          <div key={section.group}>
            <div className="ide-tree-group">{section.group}</div>
            {section.items.map(entry => (
              <FileItem
                key={entry.name}
                entry={entry}
                activeFile={activeFile}
                openTabs={openTabs}
                expandedFolders={expandedFolders}
                onFileClick={onFileClick}
                onFolderToggle={onFolderToggle}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="ide-sidebar-bottom">
        <div className="label">// connect</div>
        {[personal.socials.slice(0, 3), personal.socials.slice(3)].map((row, i) => (
          <div key={i} className="ide-socials">
            {row.map(({ label, href }) =>
              href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
              ) : (
                <a key={label} href="#" onClick={e => e.preventDefault()}>{label}</a>
              )
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
