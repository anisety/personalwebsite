import { motion } from 'framer-motion';

interface Education {
  university: string;
  degree: string;
  gpa: string;
  relevantCoursework: string[];
}

interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
}

interface EducationProps {
  education: Education;
  awards: Award[];
}

const Education = ({ education, awards }: EducationProps) => {
  return (
    <section id="education" className="education-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-title-container"
        >
          <h2 className="about-title">Education & Awards</h2>
          <div className="about-title-underline"></div>
          <p className="education-subtitle">
            My academic background and recognition for excellence
          </p>
        </motion.div>

        <div className="education-grid">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="education-card"
          >
            <div className="education-card-header">
              <div className="education-icon-container">
                <svg className="education-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="education-card-title">Education</h3>
            </div>

            <div className="education-details">
              <div>
                <h4 className="education-university">{education.university}</h4>
                <p className="education-degree">{education.degree}</p>
                <div className="education-meta">
                  <span className="education-gpa">GPA: {education.gpa}</span>
                </div>
              </div>

              <div>
                <h5 className="education-coursework-title">Relevant Coursework</h5>
                <div className="education-coursework-grid">
                  {education.relevantCoursework.map((course, index) => (
                    <div key={index} className="education-course-item">
                      <span className="education-course-bullet">•</span>
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-left-column"
          >
            <div className="education-card-header">
              <div className="education-icon-container-purple">
                <svg className="education-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="education-card-title">Awards & Recognition</h3>
            </div>

            <div className="awards-list">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="award-card"
                >
                  <div className="award-header">
                    <h4 className="award-title">{award.title}</h4>
                    <span className="award-date-tag">
                      {award.date}
                    </span>
                  </div>
                  <p className="award-organization">{award.organization}</p>
                  <p className="award-description">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="education-additional-info"
        >
          <div className="education-stats-grid">
            <div>
              <div className="education-stat-number-blue">4.0</div>
              <div className="about-stat-label">GPA</div>
            </div>
            <div>
              <div className="education-stat-number-green">7</div>
              <div className="about-stat-label">Relevant Courses</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
