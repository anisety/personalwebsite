import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  role: string;
  category: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  technologies: string[];
  github: string;
  demo: string | null;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      'Hackathon': 'project-category-hackathon',
      'Mobile': 'project-category-mobile',
      'Web': 'project-category-web',
      'Academic': 'project-category-academic',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'; // Fallback class
  };

  return (
    <section id="projects" className="projects-section-new">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-title-container"
        >
          <h2 className="about-title">Featured Projects</h2>
          <div className="about-title-underline"></div>
          <p className="projects-subtitle">
            A collection of projects that showcase my skills and passion for innovation
          </p>
        </motion.div>

        <div className="projects-grid-new">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card-new"
            >
              {/* Project Title as Image Placeholder */}
              <div className="project-image-container project-title-image-placeholder">
                <h3 className="project-image-title-text">{project.title}</h3>
                <div className="project-category-tag-wrapper">
                  <span className={`project-category-tag ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content-new">
                <div className="project-details-header">
                  <h3 className="project-title-new">{project.title}</h3>
                  <p className="project-description-new">
                    {project.description}
                  </p>
                  <div className="project-meta">
                    <span className="project-role">{project.role}</span>
                    <span>{project.startDate} - {project.endDate}</span>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="project-achievements-container">
                  <h4 className="project-achievements-title">Key Achievements:</h4>
                  <ul className="experience-achievements-list">
                    {project.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="project-achievement-item">
                        <span className="experience-achievement-bullet">•</span>
                        {achievement}
                      </li>
                    ))}
                    {project.achievements.length > 2 && (
                      <li className="project-more-achievements">
                        +{project.achievements.length - 2} more achievements
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="project-technologies-container">
                  <h4 className="project-achievements-title">Technologies:</h4>
                  <div className="project-tech-list">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="project-tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="project-tech-tag project-tech-tag-more">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Links */}
                <div className="project-links-container">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-base project-link-github"
                  >
                    <svg className="project-link-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="experience-cta-container"
        >
          <a
            href="https://github.com/anishbasety"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-view-all-button"
          >
            View All Projects on GitHub
            <svg className="experience-cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
