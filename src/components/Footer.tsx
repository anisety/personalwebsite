import { motion } from 'framer-motion';

interface FooterProps {
  personal: {
    name: string;
    email: string;
    github: string;
    linkedin: string;
    website: string;
  };
}

const Footer = ({ personal }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="about-container footer-container-padding">
        <div className="footer-grid">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="footer-brand"
          >
            <h3 className="footer-brand-title">
              {personal.name}
            </h3>
            <p className="footer-brand-description">
              Software Engineer passionate about creating innovative solutions and building the future of technology.
            </p>
            <div className="footer-social-links">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <svg className="about-social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <svg className="about-social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="footer-social-link"
              >
                <svg className="about-social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="footer-quick-links"
          >
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#about" className="footer-social-link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="footer-social-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="footer-social-link">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="footer-social-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" className="footer-social-link">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-social-link">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="footer-contact-info"
          >
            <h4 className="footer-links-title">Contact Info</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <svg className="footer-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${personal.email}`} className="footer-social-link">
                  {personal.email}
                </a>
              </div>
              <div className="footer-contact-item">
                <svg className="footer-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="footer-contact-text">Champaign, IL</span>
              </div>
              <div className="footer-contact-item">
                <svg className="footer-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="footer-contact-text">Available for opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="footer-bottom-bar"
        >
          <div className="footer-bottom-content">
            <p className="footer-copyright-text">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
            <p className="footer-tech-stack">
              Built with ❤️ using React, TypeScript & CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
