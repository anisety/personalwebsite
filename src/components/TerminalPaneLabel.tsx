type Align = 'start' | 'center' | 'end';

interface TerminalPaneLabelProps {
  /** Full mnemonic line from resume.json `paneLabels` */
  code: string;
  align?: Align;
  /** Narrow strip for hero / cube rails */
  dense?: boolean;
}

/**
 * Bloomberg-terminal-style pane title: function strip + mnemonic (data-driven only).
 */
const TerminalPaneLabel = ({ code, align = 'center', dense = false }: TerminalPaneLabelProps) => {
  const trimmed = code?.trim();
  if (!trimmed) return null;

  return (
    <div
      className={`terminal-pane-label terminal-pane-label--${align}${dense ? ' terminal-pane-label--dense' : ''}`}
      role="presentation"
    >
      <span className="terminal-pane-label__rail" aria-hidden />
      <span className="terminal-pane-label__text">{trimmed}</span>
    </div>
  );
};

export default TerminalPaneLabel;
