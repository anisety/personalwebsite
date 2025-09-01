import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import Cube from './Cube'; // Import the new Cube component

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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {personal.name}
                </span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-gray-300">
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
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              {personal.summary}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-purple-400">{stats.yearsExperience}</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-purple-400">{stats.projectsCompleted}</div>
                <div className="text-sm text-gray-300">Projects</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-purple-400">{stats.openSourceContributions}</div>
                <div className="text-sm text-gray-300">Open Source</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-purple-400">{stats.hackathonsWon}</div>
                <div className="text-sm text-gray-300">Hackathons</div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <Download size={20} />
                View Resume
              </motion.a>
              
              <motion.a
                href={`mailto:${personal.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <Mail size={20} />
                Contact Me
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {personal.linkedin && (
                <motion.a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition-colors duration-300"
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
                  className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition-colors duration-300"
                >
                  <Github size={24} />
                </motion.a>
              )}
              
              {personal.website && (
                <motion.a
                  href={personal.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition-colors duration-300"
                >
                  <ExternalLink size={24} />
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Right Column - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                <Cube />
            </div>

            {/* Floating elements */}
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-500 rounded-full opacity-20"
              />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
