import { motion } from 'framer-motion';
import TerminalPaneLabel from './TerminalPaneLabel';

interface Experience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceProps {
  paneLabel: string;
  experience: Experience[];
}

const Experience = ({ experience, paneLabel }: ExperienceProps) => {
  return (
    <section id="experience" className="experience-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-title-container"
        >
          <TerminalPaneLabel code={paneLabel} align="center" />
          <h2 className="about-title">Experience</h2>
          <div className="about-title-underline" />
          <p className="experience-subtitle">
            Time of Sales / Active Positions
          </p>
        </motion.div>

        <div className="terminal-widget terminal-widget--tape terminal-pane">
          <div className="terminal-widget__header">
            <span className="terminal-widget__title">T&amp;S</span>
            <span className="terminal-widget__meta">Blotter</span>
          </div>

          <div className="terminal-widget__body terminal-widget__body--scroll">
            <div className="tape-grid tape-grid--head" role="row">
              <div className="tape-cell tape-cell--muted">Time</div>
              <div className="tape-cell tape-cell--muted">Symbol</div>
              <div className="tape-cell tape-cell--muted">Action</div>
              <div className="tape-cell tape-cell--muted">Size/Details</div>
            </div>

            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.startDate}-${job.position}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.25) }}
                viewport={{ once: true }}
                className="tape-grid"
                role="row"
              >
                <div className="tape-cell tape-cell--time">
                  {job.startDate} - {job.endDate}
                </div>
                <div className="tape-cell tape-cell--sym">{job.company}</div>
                <div className="tape-cell tape-cell--action">{job.position}</div>
                <div className="tape-cell tape-cell--details">
                  <div className="tape-cell__desc">{job.description}</div>
                  {job.location?.trim() ? (
                    <div className="tape-cell__loc">{job.location}</div>
                  ) : null}
                  {job.technologies.length > 0 ? (
                    <div className="tape-tags">
                      {job.technologies.map((t) => (
                        <span key={t} className="tape-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
