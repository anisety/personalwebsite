import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Linkedin, Github } from 'lucide-react';
import TerminalPaneLabel from './TerminalPaneLabel';

interface Personal {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  avatar: string;
}

interface Stats {
  yearsExperience: number;
  projectsCompleted: number;
  openSourceContributions: number;
  hackathonsWon: number;
}

interface HeroProps {
  personal: Personal;
  stats: Stats;
  paneLabel: string;
  cubePaneLabel?: string;
}

const Hero = ({ personal, stats, paneLabel, cubePaneLabel }: HeroProps) => {
  return (
    <section id="hero" className="hero-section-new">
      <div className="about-container hero-container-padding">
        <div className="hero-grid">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-left-column"
          >
            <TerminalPaneLabel code={paneLabel} align="start" dense />
            <div className="hero-text-content">
              <h1 className="hero-title-new">
                Hi, I'm{' '}
                <span className="hero-name-gradient">
                  {personal.name}
                </span>
              </h1>
              
              <div className="hero-subtitle-new">
                <TypeAnimation
                  sequence={[
                    personal.title,
                    2000,
                    'Full Stack Developer',
                    2000,
                    'Problem Solver',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <p className="hero-warning-text"></p>
            </div>

            <p className="hero-summary-text">
              {personal.summary}
            </p>
            {/* Stats */}
            <div className="hero-stats-grid">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hero-stat-card"
              >
                <div className="hero-stat-number-new">{stats.yearsExperience}</div>
                <div className="hero-stat-label-new">Years Experience</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hero-stat-card"
              >
                <div className="hero-stat-number-new">{stats.projectsCompleted}</div>
                <div className="hero-stat-label-new">Projects</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hero-stat-card"
              >
                <div className="hero-stat-number-new">{stats.openSourceContributions}</div>
                <div className="hero-stat-label-new">Open Source</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hero-stat-card"
              >
                <div className="hero-stat-number-new">{stats.hackathonsWon}</div>
                <div className="hero-stat-label-new">Hackathons</div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="footer-social-links">
              {personal.linkedin && (
                <motion.a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="hero-social-link"
                >
                  <Linkedin size={24} />
                </motion.a>
              )}
              
              {personal.github && (
                <motion.a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="hero-social-link"
                >
                  <Github size={24} />
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Right Column - Main candlestick widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-right-column hero-cube-column"
          >
            {cubePaneLabel?.trim() ? (
              <TerminalPaneLabel code={cubePaneLabel} align="center" dense />
            ) : null}
            <div className="terminal-widget terminal-widget--chart" aria-label="Market chart widget">
              <div className="terminal-widget__header">
                <span className="terminal-widget__title">AB</span>
                <span className="terminal-widget__meta">{personal.title}</span>
              </div>
              <div className="terminal-widget__body terminal-widget__body--chart">
                <svg className="candles" viewBox="0 0 520 260" role="img" aria-label="Candlestick chart">
                  <defs>
                    <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#00d4ff" stopOpacity="0.08" />
                      <stop offset="1" stopColor="#00d4ff" stopOpacity="0.00" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="520" height="260" fill="url(#gridFade)" />

                  {/* axes */}
                  <path d="M 30 20 L 30 230 L 500 230" stroke="#1a1f26" strokeWidth="2" fill="none" />

                  {/* moving avg */}
                  <path
                    className="chart-ma"
                    d="M 32 170 C 80 150, 120 175, 165 135 S 260 155, 315 112 S 410 140, 498 85"
                    stroke="#00d4ff"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />

                  {/* candles (static but animated flicker via CSS) */}
                  {[
                    { x: 70, o: 170, c: 140, h: 128, l: 182, up: true },
                    { x: 105, o: 140, c: 156, h: 132, l: 168, up: false },
                    { x: 140, o: 156, c: 120, h: 112, l: 170, up: true },
                    { x: 175, o: 120, c: 132, h: 104, l: 150, up: false },
                    { x: 210, o: 132, c: 98, h: 90, l: 150, up: true },
                    { x: 245, o: 98, c: 118, h: 86, l: 132, up: false },
                    { x: 280, o: 118, c: 78, h: 70, l: 136, up: true },
                    { x: 315, o: 78, c: 92, h: 62, l: 110, up: false },
                    { x: 350, o: 92, c: 58, h: 52, l: 106, up: true },
                    { x: 385, o: 58, c: 72, h: 44, l: 86, up: false },
                    { x: 420, o: 72, c: 46, h: 38, l: 92, up: true },
                    { x: 455, o: 46, c: 52, h: 28, l: 78, up: false },
                  ].map((k, i) => {
                    const top = Math.min(k.o, k.c);
                    const bot = Math.max(k.o, k.c);
                    return (
                      <g key={i} className={`candle ${k.up ? 'candle--up' : 'candle--down'}`}>
                        <line x1={k.x} y1={k.h} x2={k.x} y2={k.l} stroke="currentColor" strokeWidth="2" />
                        <rect x={k.x - 7} y={top} width="14" height={Math.max(6, bot - top)} fill="currentColor" opacity="0.9" />
                      </g>
                    );
                  })}

                  {/* last price line */}
                  <line x1="30" y1="85" x2="500" y2="85" stroke="#ffb020" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
                </svg>
              </div>
              <div className="terminal-widget__footer">
                <span className="terminal-chip terminal-chip--up">▲ UPTICK</span>
                <span className="terminal-chip terminal-chip--down">▼ DOWNTICK</span>
                <span className="terminal-chip terminal-chip--active">CYAN ACTIVE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
