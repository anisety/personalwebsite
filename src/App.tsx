import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ResumeData } from './types';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Education from './components/Education.tsx';
import Contact from './components/Contact.tsx';
import Resume from './components/Resume.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  useEffect(() => {
    const loadResumeData = async () => {
      try {
        const response = await fetch('/src/data/resume.json');
        const data = await response.json();
        setResumeData(data);
        
        // Update document title and meta description for SEO
        document.title = `${data.personal.name} - ${data.personal.title}`;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', data.personal.summary);
        }
      } catch (error) {
        console.error('Error loading resume data:', error);
      }
    };

    loadResumeData();
  }, []);

  if (!resumeData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero personal={resumeData.personal} stats={resumeData.stats} />
              <About personal={resumeData.personal} stats={resumeData.stats} />
              <Skills skills={resumeData.skills} />
              <Experience experience={resumeData.experience} />
              <Projects projects={resumeData.projects} />
              <Education education={resumeData.education} awards={resumeData.awards} />
              <Contact personal={resumeData.personal} />
              <Footer personal={resumeData.personal} />
            </>
          } />
          <Route path="/resume" element={<Resume resumeData={resumeData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
