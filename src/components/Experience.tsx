import { motion } from 'framer-motion';

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
  experience: Experience[];
}

const Experience = ({ experience }: ExperienceProps) => {
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
          <h2 className="about-title">Work Experience</h2>
          <div className="about-title-underline"></div>
          <p className="experience-subtitle">
            My professional journey in software engineering and AI/ML
          </p>
        </motion.div>

        <div className="experience-timeline-container">
          {/* Timeline Line */}
          <div className="experience-timeline-line"></div>

          <div className="experience-items-wrapper">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.startDate}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`experience-item ${index % 2 === 0 ? 'experience-item-row' : 'experience-item-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="experience-timeline-dot"></div>

                {/* Content Card */}
                <div className={`experience-content-wrapper ${index % 2 === 0 ? 'experience-content-wrapper-left' : 'experience-content-wrapper-right'}`}>
                  <div className="experience-card">
                    {/* Header */}
                    <div className="experience-card-header">
                      <div className="experience-card-header-top">
                        <h3 className="experience-position">{job.position}</h3>
                        <span className="experience-company">{job.company}</span>
                      </div>
                      <div className="experience-location">
                        <svg className="experience-location-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </div>
                      <div className="experience-date">
                        {job.startDate} - {job.endDate}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="experience-description">
                      {job.description}
                    </p>

                    {/* Achievements */}
                    <div className="experience-achievements-container">
                      <h4 className="experience-achievements-title">Key Achievements:</h4>
                      <ul className="experience-achievements-list">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="experience-achievement-item">
                            <span className="experience-achievement-bullet">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="experience-technologies-title">Technologies:</h4>
                      <div className="experience-technologies-list">
                        {job.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="experience-tech-tag"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="experience-cta-container"
        >
          <div className="experience-cta-card">
            <h3 className="experience-cta-title">
              Looking for new opportunities
            </h3>
            <p className="experience-cta-description">
              I'm always interested in exciting new projects and opportunities to work with innovative teams.
            </p>
            <a
              href="#contact"
              className="experience-cta-button"
            >
              Get In Touch
              <svg className="experience-cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
//Edit Work Experience
