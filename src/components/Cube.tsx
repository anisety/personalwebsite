import { useState } from 'react';
import '../style.css'; // Import the CSS file for cube styling

const Cube = () => {
  const [isHovered, setIsHovered] = useState(false);
  const roles = [
    "Full-Stack Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "DevOps Engineer",
    "ML Engineer",
    "AI Engineer",
    "Software Engineer",
    "Data Engineer",
  ];

  const getRandomRole = () => {
    const randomIndex = Math.floor(Math.random() * roles.length);
    return roles[randomIndex];
  };

  return (
    <div
      className="cube-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`cube ${isHovered ? 'cube-hover' : ''}`}>
        <div className="face front">{getRandomRole()}</div>
        <div className="face back">{getRandomRole()}</div>
        <div className="face right">{getRandomRole()}</div>
        <div className="face left">{getRandomRole()}</div>
        <div className="face top">{getRandomRole()}</div>
        <div className="face bottom">{getRandomRole()}</div>
      </div>
    </div>
  );
};

export default Cube;
