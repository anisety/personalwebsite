import { motion } from 'framer-motion';
import TerminalPaneLabel from './TerminalPaneLabel';

interface HonorsActivitiesTerminalActivity {
  name: string;
  role: string;
  location: string;
  dates: string;
}

interface HonorsActivitiesTerminal {
  honors: string[];
  activities: HonorsActivitiesTerminalActivity[];
}

interface AlertsWatchlistProps {
  paneLabel: string;
  data: HonorsActivitiesTerminal;
}

const AlertsWatchlist = ({ paneLabel, data }: AlertsWatchlistProps) => {
  return (
    <section id="alerts" className="alerts-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-title-container"
        >
          <TerminalPaneLabel code={paneLabel} align="center" />
          <h2 className="about-title">Activities &amp; Honors</h2>
          <div className="about-title-underline" />
          <p className="projects-subtitle">Watchlist &amp; Alerts</p>
        </motion.div>

        <div className="alerts-grid">
          <div className="terminal-widget terminal-widget--alerts terminal-pane">
            <div className="terminal-widget__header">
              <span className="terminal-widget__title">ALERTS</span>
              <span className="terminal-widget__meta">Honors</span>
            </div>
            <div className="terminal-widget__body terminal-widget__body--scroll">
              {data.honors.map((h, i) => (
                <div key={`${h}-${i}`} className="alert-row">
                  <span className="alert-pill alert-pill--amber">!</span>
                  <span className="alert-text">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="terminal-widget terminal-widget--watch terminal-pane">
            <div className="terminal-widget__header">
              <span className="terminal-widget__title">WATCHLIST</span>
              <span className="terminal-widget__meta">Activities</span>
            </div>
            <div className="terminal-widget__body terminal-widget__body--scroll">
              <div className="watch-grid watch-grid--head" role="row">
                <div className="watch-cell watch-cell--muted">Asset</div>
                <div className="watch-cell watch-cell--muted">Position</div>
                <div className="watch-cell watch-cell--muted">Venue</div>
                <div className="watch-cell watch-cell--muted watch-cell--right">Window</div>
              </div>
              {data.activities.map((a) => (
                <div key={`${a.name}-${a.dates}`} className="watch-grid" role="row">
                  <div className="watch-cell watch-cell--asset">{a.name}</div>
                  <div className="watch-cell watch-cell--pos">{a.role}</div>
                  <div className="watch-cell watch-cell--venue">{a.location}</div>
                  <div className="watch-cell watch-cell--right watch-cell--time">{a.dates}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlertsWatchlist;

