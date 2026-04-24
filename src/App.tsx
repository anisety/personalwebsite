import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import type { ResumeData } from './types';
import resumeData from './data/resume.json';

const LazyDashboard = lazy(() => import('./components/TradingTerminalSPA.tsx'));

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
    setData(resumeData as unknown as ResumeData);
    
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
      <div className="App site-terminal">
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<LoadingFallback />}>
              <LazyDashboard data={data} />
            </Suspense>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
