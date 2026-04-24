interface TickerTapeProps {
  items: string[];
  position: 'top' | 'bottom';
}

function seededDelta(label: string): { up: boolean; pct: string } {
  let h = 0;
  for (let i = 0; i < label.length; i++) h = (h * 33 + label.charCodeAt(i)) >>> 0;
  const v = (h % 320) / 100; // 0.00..3.19
  const up = (h & 1) === 0;
  return { up, pct: `${up ? '+' : '-'}${v.toFixed(1)}%` };
}

const TickerTape = ({ items, position }: TickerTapeProps) => {
  const clean = items.filter(Boolean);
  const sequence = clean.length ? [...clean, ...clean] : ['—'];

  return (
    <div
      className={`ticker-strip ticker-strip--${position}`}
      aria-hidden={position === 'bottom' ? true : undefined}
      aria-label={position === 'top' ? 'Skills and highlights ticker' : undefined}
    >
      <div className="ticker-track">
        {sequence.map((text, i) => {
          const d = seededDelta(text);
          return (
          <span key={`${text}-${i}`} className="ticker-item">
            <span className={`ticker-sym ${d.up ? 'ticker-sym--up' : 'ticker-sym--down'}`}>
              {text} {d.up ? '▲' : '▼'} {d.pct}
            </span>
            <span className="ticker-sep">|</span>
          </span>
        )})}
      </div>
    </div>
  );
};

export default TickerTape;
