import { motion } from 'framer-motion';
import { useMemo } from 'react';
import TerminalPaneLabel from './TerminalPaneLabel';

interface TerminalSkills {
  languages: string[];
  systemsArchitecture: string[];
  dataQuant: string[];
  toolsPlatforms: string[];
}

interface SkillsProps {
  paneLabel: string;
  terminalSkills: TerminalSkills;
}

type ScreenerRow = {
  symbol: string;
  last: string;
  change: number;
};

function pseudoChange(symbol: string): number {
  // deterministic per symbol; keeps UI stable between renders
  let h = 0;
  for (let i = 0; i < symbol.length; i++) h = (h * 31 + symbol.charCodeAt(i)) >>> 0;
  const r = (h % 420) / 100 - 2.1; // [-2.1, +2.09]
  return Math.round(r * 10) / 10; // 0.1 precision
}

const Skills = ({ terminalSkills, paneLabel }: SkillsProps) => {
  const rows = useMemo<ScreenerRow[]>(() => {
    const categories: Array<{ label: string; items: string[] }> = [
      { label: 'Languages', items: terminalSkills.languages },
      { label: 'Systems & Architecture', items: terminalSkills.systemsArchitecture },
      { label: 'Data & Quant', items: terminalSkills.dataQuant },
      { label: 'Tools & Platforms', items: terminalSkills.toolsPlatforms },
    ];

    return categories.flatMap((c) =>
      c.items.map((symbol) => ({
        symbol,
        last: c.label,
        change: pseudoChange(symbol),
      })),
    );
  }, [terminalSkills]);

  return (
    <section id="skills" className="skills-section-new">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-title-container"
        >
          <TerminalPaneLabel code={paneLabel} align="center" />
          <h2 className="about-title">Key Stats &amp; Screener</h2>
          <div className="about-title-underline"></div>
          <p className="skills-subtitle">Symbol · Last · Change</p>
        </motion.div>

        <div className="terminal-widget terminal-widget--screener terminal-pane">
          <div className="terminal-widget__header">
            <span className="terminal-widget__title">SCREENER</span>
            <span className="terminal-widget__meta">Multi-market</span>
          </div>

          <div className="terminal-widget__body terminal-widget__body--scroll">
            <div className="screener-grid screener-grid--head" role="row">
              <div className="screener-cell screener-cell--muted">Symbol</div>
              <div className="screener-cell screener-cell--muted">Last</div>
              <div className="screener-cell screener-cell--muted screener-cell--right">Change</div>
            </div>

            {rows.map((r) => (
              <div key={r.symbol} className="screener-grid" role="row">
                <div className="screener-cell screener-cell--sym">{r.symbol}</div>
                <div className="screener-cell screener-cell--last">{r.last}</div>
                <div
                  className={`screener-cell screener-cell--right ${r.change >= 0 ? 'screener-cell--up' : 'screener-cell--down'}`}
                >
                  {r.change >= 0 ? '▲' : '▼'} {r.change >= 0 ? '+' : ''}
                  {r.change.toFixed(1)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
