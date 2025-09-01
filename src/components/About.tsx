import { motion } from 'framer-motion';

interface AboutProps {
  personal: {
    name: string;
    title: string;
    summary: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    website: string;
  };
  stats: {
    yearsExperience: number;
    projectsCompleted: number;
    openSourceContributions: number;
    hackathonsWon: number;
  };
}

const About = ({ personal, stats }: AboutProps) => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-title-container"
        >
          <h2 className="about-title">About Me</h2>
          <div className="about-title-underline"></div>
        </motion.div>

        <div className="about-content-grid">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-left-column"
          >
            <div className="about-text-content">
              <h3 className="about-greeting">
                Hi, I'm {personal.name.split(' ')[0]} 👋
              </h3>
              <p className="about-summary">
                {personal.summary}
              </p>
              <p className="about-summary">
                I'm passionate about creating innovative solutions that make a real impact. 
                With expertise in full-stack development, AI/ML, and scalable systems, 
                I love tackling complex problems and turning ideas into reality.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="about-stats-grid">
              <div className="about-stat-card">
                <div className="about-stat-number-blue">{stats.yearsExperience}+</div>
                <div className="about-stat-label">Years Experience</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-number-purple">{stats.projectsCompleted}+</div>
                <div className="about-stat-label">Projects Completed</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="about-contact-info">
              <div className="about-contact-item">
                <svg className="about-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="about-stat-label">{personal.location}</span>
              </div>
              <div className="about-contact-item">
                <svg className="about-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${personal.email}`} className="about-email-link">
                  {personal.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="about-social-links">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link-github"
              >
                <svg className="about-social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link-linkedin"
              >
                <svg className="about-social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={personal.website}
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link-website"
              >
                <svg className="about-social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-right-column"
          >
            <div className="relative">
              <div className="about-outer-circle">
                <div className="about-outer-circle-content">
                  <div className="about-inner-circle">
                    <div className="about-initials">
                      {personal.name.split(' ').map(name => name[0]).join('')}
                    </div>
                  </div>
                  <div className="about-work-info">
                    <div className="about-work-label">Currently working at</div>
                    <div className="about-company-name">Outlier AI</div>
                    <div className="about-work-label">AI/ML Engineer</div>
                  </div>
                </div>
              </div>
              <div className="about-decorative-circle-top-right"></div>
              <div className="about-decorative-circle-bottom-left"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
