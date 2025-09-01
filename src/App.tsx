import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
import Footer from './components/Footer.tsx';
import resumeData from './data/resume.json';

function App() {
  const [data, setData] = useState<ResumeData | null>(null);

  useEffect(() => {
    // Set the resume data directly since we're importing it
    setData(resumeData as ResumeData);
    
    // Update document title and meta description for SEO
    document.title = `${resumeData.personal.name} - ${resumeData.personal.title}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', resumeData.personal.summary);
    }
  }, []);

  if (!data) {
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
              <Hero personal={data.personal} stats={data.stats} />
              <About personal={data.personal} stats={data.stats} />
              <Skills skills={data.skills} />
              <Experience experience={data.experience} />
              <Projects projects={data.projects} />
              <Education education={data.education} awards={data.awards} />
              <Contact personal={data.personal} />
              <Footer personal={data.personal} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
