import React from 'react';
import "../../components/about/about.scss";
import rubberDuckyImage from '../../assets/chibichu.png'; // Import the image

const About = () => {
  return (
    <div className="about-image">
      <div className="about-container">
        <h1>Psycho Chibis: Building on Songbird and Flare Networks</h1>
        <p>
          At Psycho Chibis, we're on a mission to revolutionize the world of blockchain and decentralized finance.
          Our passion lies in the innovative ecosystems of Songbird and Flare Networks.
          Through cutting-edge technology and a commitment to the community, we're shaping the future of these networks.
        </p>
        <img  src={rubberDuckyImage} alt="Rubber Ducky" /> 

        <p>
          Join us on this exciting journey as we create new opportunities, enhance security, and empower individuals
          to take control of their financial freedom. Together, we're bringing Psycho Chibis to life on Songbird and Flare Networks.
        </p>
      </div>
    </div>
  );
};

export default About;
