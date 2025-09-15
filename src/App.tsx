import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { ResumeData } from './types';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import resumeData from './data/resume.json';

const LazyHero = lazy(() => import('./components/Hero.tsx'));
const LazyAbout = lazy(() => import('./components/About.tsx'));
const LazySkills = lazy(() => import('./components/Skills.tsx'));
const LazyExperience = lazy(() => import('./components/Experience.tsx'));
const LazyProjects = lazy(() => import('./components/Projects.tsx'));
const LazyEducation = lazy(() => import('./components/Education.tsx'));
const LazyContact = lazy(() => import('./components/Contact.tsx'));

function LoadingFallback() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );
}

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
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<LoadingFallback />}>
              <LazyHero personal={data.personal} stats={data.stats} />
              <LazyAbout personal={data.personal} stats={data.stats} />
              <LazySkills skills={data.skills} />
              <LazyExperience experience={data.experience} />
              <LazyProjects projects={data.projects} />
              <LazyEducation education={data.education} awards={data.awards} />
              <LazyContact personal={data.personal} />
              <Footer personal={data.personal} />
            </Suspense>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
