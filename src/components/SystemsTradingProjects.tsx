import { motion } from 'framer-motion';
import type { SystemsTradingProject } from '../types';
import TerminalPaneLabel from './TerminalPaneLabel';

interface SystemsTradingProjectsProps {
  paneLabel: string;
  projects: SystemsTradingProject[];
}

function LobViz() {
  const heights = [28, 42, 55, 38, 48, 32, 60, 24];
  return (
    <svg width="200" height="90" viewBox="0 0 200 90" aria-hidden>
      <rect x="0" y="0" width="200" height="90" fill="#030303" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect
          key={i}
          className="lob-bar"
          x={12 + i * 22}
          y={75 - heights[i]}
          width="14"
          height={heights[i]}
          fill={i % 2 === 0 ? '#00ff9d' : '#ff3355'}
          opacity="0.85"
        />
      ))}
      <line x1="100" y1="8" x2="100" y2="82" stroke="#00d4ff" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5" />
    </svg>
  );
}

function FeedViz() {
  return (
    <svg width="200" height="90" viewBox="0 0 200 90" aria-hidden>
      <rect x="0" y="0" width="200" height="90" fill="#030303" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} className="feed-packet" style={{ transform: `translateX(${i * 36}px)` }}>
          <rect x="8" y={22 + i * 8} width="44" height="6" fill="#00d4ff" opacity={0.35 + i * 0.12} rx="1" />
          <rect x="8" y={32 + i * 8} width="28" height="4" fill="#ffb020" opacity="0.6" rx="1" />
        </g>
      ))}
      <path
        d="M 10 70 L 40 55 L 70 62 L 100 48 L 130 58 L 160 42 L 190 50"
        fill="none"
        stroke="#00ff9d"
        strokeWidth="1.2"
        opacity="0.35"
      />
    </svg>
  );
}

function ArenaViz() {
  return (
    <svg width="200" height="90" viewBox="0 0 200 90" aria-hidden>
      <rect x="0" y="0" width="200" height="90" fill="#030303" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          className="arena-cell"
          x={40 + i * 32}
          y="45"
          width="20"
          height="18"
          fill="#ffb020"
          opacity="0.75"
          rx="1"
        />
      ))}
      <rect x="30" y="72" width="140" height="6" fill="#1a1f26" rx="1" />
    </svg>
  );
}

function BacktesterViz() {
  return (
    <svg width="200" height="90" viewBox="0 0 200 90" aria-hidden>
      <rect x="0" y="0" width="200" height="90" fill="#030303" />
      <path
        className="backtest-path"
        d="M 12 68 L 36 52 L 58 58 L 82 38 L 104 44 L 128 28 L 152 36 L 178 20"
        fill="none"
        stroke="#00ff9d"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="12" y="72" width="166" height="1" fill="#1a1f26" />
      <rect x="12" y="18" width="1" height="55" fill="#1a1f26" />
    </svg>
  );
}

function Viz({ type }: { type: SystemsTradingProject['animation'] }) {
  switch (type) {
    case 'lob':
      return <LobViz />;
    case 'feed':
      return <FeedViz />;
    case 'arena':
      return <ArenaViz />;
    case 'backtester':
      return <BacktesterViz />;
    default:
      return <LobViz />;
  }
}

const SystemsTradingProjects = ({ projects, paneLabel }: SystemsTradingProjectsProps) => {
  return (
    <section id="systems" className="systems-trading-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-title-container"
        >
          <TerminalPaneLabel code={paneLabel} align="center" />
          <h2 className="about-title">Systems &amp; Trading Projects</h2>
          <div className="about-title-underline" />
          <p className="projects-subtitle">
            Algorithmic Strategy Modules
          </p>
        </motion.div>

        <div className="modules-grid">
          {projects.map((project, index) => (
            <motion.a
              key={project.slug}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="module-prompt terminal-pane"
            >
              <div className="module-prompt__head">
                <span className="module-prompt__ps1">anisety@exchange</span>
                <span className="module-prompt__cwd">~/strategies</span>
                <span className="module-prompt__status">LIVE</span>
              </div>

              <div className="module-prompt__cmd">
                <span className="module-prompt__dollar">$</span> load --module{' '}
                <span className="module-prompt__mod">{project.title}</span>
              </div>

              <div className="module-prompt__viz" aria-hidden>
                <Viz type={project.animation} />
              </div>

              <div className="module-prompt__meta">
                <div className="module-prompt__row">
                  <span className="module-prompt__k">LINK</span>
                  <span className="module-prompt__v">{project.url}</span>
                </div>
                {project.tags.length > 0 ? (
                  <div className="module-prompt__row">
                    <span className="module-prompt__k">TAGS</span>
                    <span className="module-prompt__v">
                      {project.tags.join(' · ')}
                    </span>
                  </div>
                ) : null}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsTradingProjects;
