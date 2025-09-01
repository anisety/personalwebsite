import { motion } from 'framer-motion';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillsProps {
  skills: {
    languages: Skill[];
    frameworks: Skill[];
    developerTools: Skill[];
    librariesTools: Skill[];
  };
}

const Skills = ({ skills }: SkillsProps) => {
  const skillCategories = [
    { title: 'Programming Languages', skills: skills.languages, color: 'blue' },
    { title: 'Frameworks & Libraries', skills: skills.frameworks, color: 'purple' },
    { title: 'Developer Tools', skills: skills.developerTools, color: 'green' },
    { title: 'Libraries & Tools', skills: skills.librariesTools, color: 'orange' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'skill-bar-blue',
      purple: 'skill-bar-purple',
      green: 'skill-bar-green',
      orange: 'skill-bar-orange',
    };
    return colors[color as keyof typeof colors] || 'skill-bar-blue';
  };

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
          <h2 className="about-title">Skills & Technologies</h2>
          <div className="about-title-underline"></div>
          <p className="skills-subtitle">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="skills-main-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="skill-category-card"
            >
              <h3 className="skill-category-title-new">{category.title}</h3>
              <div className="skill-list-wrapper">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-item"
                  >
                    <div className="skill-item-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-proficiency">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-progress-bar-bg">
                      <motion.div
                        className={`skill-progress-bar-fill ${getColorClasses(category.color)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="additional-skills-container"
        >
          <h3 className="additional-skills-title">Areas of Expertise</h3>
          <div className="additional-skills-grid">
            <div className="expertise-item">
              <div className="expertise-icon-container-blue">
                <svg className="expertise-icon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="expertise-title">Full-Stack Development</h4>
              <p className="expertise-description">
                Building scalable web applications with modern frameworks and best practices
              </p>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon-container-purple">
                <svg className="expertise-icon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="expertise-title">AI/ML Engineering</h4>
              <p className="expertise-description">
                Developing intelligent systems and optimizing machine learning pipelines
              </p>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon-container-green">
                <svg className="expertise-icon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="expertise-title">System Architecture</h4>
              <p className="expertise-description">
                Designing scalable and efficient system architectures for complex applications
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
