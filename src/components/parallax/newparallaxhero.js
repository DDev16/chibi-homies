import React, { useState, useEffect } from 'react';
import './newscene.scss';

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
   
     
      <div className="parallax-layer bottom-layer" style={{ transform: `translateY(${calculateParallax(0)})` }} >
   
      </div>

      <div className="parallax-layer clouds1-layer" style={{ transform: `translateY(${calculateParallax(0.4)})` }}>
        {/* Content for Clouds 1 Layer */}
      </div>

      <div className="parallax-layer clouds2-layer" style={{ transform: `translateY(${calculateParallax(0.4)})` }}>
        {/* Content for Clouds 2 Layer */}
      </div>

      <div className="parallax-layer clouds3-layer" style={{ transform: `translateY(${calculateParallax(.7)})` }}>
        {/* Content for Clouds 3 Layer */}
      </div>

      <div className="parallax-layer moon-layer" style={{ transform: `translateY(${calculateParallax(0.1)})` }}>
    </div>

    </div>
  );
};

export default ParallaxScene;
