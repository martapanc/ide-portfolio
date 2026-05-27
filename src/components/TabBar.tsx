type Props = {
  tabs: string[];
  activeTab: string;
  onTabClick: (name: string) => void;
  onTabClose: (name: string) => void;
};

function tabColor(name: string): string {
  const ext = name.split('.').pop();
  const map: Record<string, string> = {
    tsx: '#569cd6', ts: '#569cd6', md: '#9ccfd8', mdx: '#c4a7e7',
  };
  return map[ext ?? ''] ?? '#908caa';
}

export default function TabBar({ tabs, activeTab, onTabClick, onTabClose }: Props) {
  return (
    <div className="ide-tabs">
      {tabs.map(name => (
        <div
          key={name}
          className={`ide-tab${name === activeTab ? ' active' : ''}`}
          onClick={() => onTabClick(name)}
        >
          {name === activeTab && <span className="tab-dot" style={{ background: tabColor(name) }} />}
          {name}
          <span
            className="tab-close"
            onClick={e => { e.stopPropagation(); onTabClose(name); }}
          >
            ×
          </span>
        </div>
      ))}
    </div>
  );
}
