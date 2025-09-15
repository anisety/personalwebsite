import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import Cube from './Cube'; // Import the new Cube components

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
}

const Hero = ({ personal, stats }: HeroProps) => {
  return (
    <section className="hero-section-new">
      <div className="about-container hero-container-padding">
        <div className="hero-grid">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-left-column"
          >
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

          {/* Right Column - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-right-column"
          >
            <Cube />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
