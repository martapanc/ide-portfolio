import { personal } from '../../data/portfolio';

type Props = { file: string };

export default function PlaceholderPage({ file }: Props) {
  return (
    <div style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--subtle)' }}>
      <p className="c-comment">// {file}</p>
      <p style={{ marginTop: '32px', color: 'var(--muted)' }}>
        <span style={{ color: 'var(--love)' }}>{'// TODO:'}</span> this page is in progress.
      </p>
    </div>
  );
}
