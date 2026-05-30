import { useState, useEffect, useRef } from 'react';

export type PaletteAction = {
  id: string;
  label: string;
  icon: string;
  category: string;
  onSelect: () => void;
};

type Props = {
  open: boolean;
  onClose: () => void;
  actions: PaletteAction[];
};

export default function CommandPalette({ open, onClose, actions }: Props) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  const filtered = query.trim()
    ? actions.filter(a =>
        a.label.toLowerCase().includes(query.toLowerCase()) ||
        a.category.toLowerCase().includes(query.toLowerCase())
      )
    : actions;

  useEffect(() => { setSelected(0); }, [query]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(i => Math.min(i + 1, filtered.length - 1)); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setSelected(i => Math.max(i - 1, 0)); }
    if (e.key === 'Enter' && filtered[selected]) { filtered[selected].onSelect(); onClose(); }
    if (e.key === 'Escape') { onClose(); }
  };

  if (!open) return null;

  return (
    <div className="cp-backdrop" onClick={onClose}>
      <div className="cp-modal" onClick={e => e.stopPropagation()} onKeyDown={handleKey}>
        <div className="cp-search">
          <span className="cp-search-prefix">⌘K</span>
          <input
            ref={inputRef}
            className="cp-input"
            placeholder="Search commands or files…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <div className="cp-results">
          {filtered.length === 0 ? (
            <div className="cp-empty">No results for "{query}"</div>
          ) : (
            filtered.map((action, i) => (
              <div
                key={action.id}
                className={`cp-item${i === selected ? ' active' : ''}`}
                onClick={() => { action.onSelect(); onClose(); }}
                onMouseEnter={() => setSelected(i)}
              >
                <span className="cp-item-icon">{action.icon}</span>
                <span className="cp-item-label">{action.label}</span>
                <span className="cp-item-cat">{action.category}</span>
              </div>
            ))
          )}
        </div>

        <div className="cp-footer">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
