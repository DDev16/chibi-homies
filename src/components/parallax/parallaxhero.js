import React, { useState, useEffect } from 'react';
import './AnimatedScene.scss';

import Nav from '../nav/Navbar';
const ParallaxScene = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateParallax = (speed) => {
    return -scrollY * speed + 'px';
  };

  return (
    <div className="parallax-container">
    <div className='nav'>
        <Nav />
    </div>
     <div className="welcome-message">
   
        <h1>Welcome To Chibi & Friends</h1>
      </div>
      <div className="parallax-layer bottom-layer" >
   
      </div>

      <div className="parallax-layer clouds1-layer" style={{ transform: `translateY(${calculateParallax(0.1)})` }}>
        {/* Content for Clouds 1 Layer */}
      </div>

      <div className="parallax-layer clouds2-layer" style={{ transform: `translateY(${calculateParallax(0.2)})` }}>
        {/* Content for Clouds 2 Layer */}
      </div>

      <div className="parallax-layer clouds3-layer" style={{ transform: `translateY(${calculateParallax(0.6)})` }}>
        {/* Content for Clouds 3 Layer */}
      </div>

      <div className="parallax-layer moon-layer" style={{ transform: `translateY(${calculateParallax(0.1)})` }}>
    </div>

      <div className="parallax-layer nightsky-layer" style={{ transform: `translateY(${calculateParallax(0.3)})` }}>
        {/* Content for Night Sky Layer */}
      </div>

      <div className="parallax-layer topclouds-layer" style={{ transform: `translateY(${calculateParallax(0.5)})` }}>
        {/* Content for Top Clouds Layer */}
      </div>
    </div>
  );
};

export default ParallaxScene;
