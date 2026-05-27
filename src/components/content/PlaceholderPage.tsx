type Props = { file: string };

export default function PlaceholderPage({ file }: Props) {
  return (
    <div style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--subtle)' }}>
      <p className="c-comment">// {file}</p>
      <p style={{ marginTop: '32px', color: 'var(--muted)' }}>
        <span style={{ color: 'var(--love)' }}>{'// TODO:'}</span> this page is in progress.
      </p>
      <p style={{ marginTop: '12px', color: 'var(--muted)' }}>
        {'Check back soon, or '}
        <a href="mailto:marta@martacodes.it" style={{ color: 'var(--foam)', textDecoration: 'none' }}>
          get in touch
        </a>
        {' if you needed this urgently.'}
      </p>
    </div>
  );
}
