import React from 'react';
import bgImage from '../../assets/hero1bg.jpeg'; // Import your background image

const Hero1 = () => {
  return (
    <div
      className="hero1"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '180vh', // Adjust the height as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white', // Text color on the background
      }}
    >
      <div>
        <h1>Welcome to My Website</h1>
        <p>Discover amazing content here.</p>
        {/* Add any other content you want */}
      </div>
    </div>
  );
};

export default Hero1;
