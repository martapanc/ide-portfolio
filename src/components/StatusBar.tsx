type Props = {
  activeFile: string;
  lang: string;
};

export default function StatusBar({ activeFile, lang }: Props) {
  return (
    <div className="ide-statusbar">
      <span className="seg seg-iris">▸ {activeFile}</span>
      <span className="seg branch">main</span>
      <span className="seg">
        <span className="live-dot" />
        build passing
      </span>
      <span className="seg">UTF-8</span>
      <div className="seg-right">
        <span>{lang}</span>
        <span>Spaces: 2</span>
        <span>Ln 1, Col 1</span>
      </div>
    </div>
  );
}
