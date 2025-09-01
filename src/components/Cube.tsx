import React, { useState } from 'react';
import '../style.css'; // Import the CSS file for cube styling

const Cube = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cube-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`cube ${isHovered ? 'cube-hover' : ''}`}>
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
  );
};

export default Cube;
