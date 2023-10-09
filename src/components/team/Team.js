import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Step, Scrollama } from 'react-scrollama';
import '../../components/team/teams.scss'; // Import your SCSS file

// Import the images
import arturoImage from '../../assets/psychib.jpeg';
import chaosImage from '../../assets/psychib3.jpeg';

const Team = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Listen to the scroll event and update scrollY
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Create a spring animation for the header rotation
  const h1Animation = useSpring({
    transform: `scale(${1 + scrollY * 0.0015})`, // Scale up the header as you scroll
    config: config.molasses, // You can adjust the animation config as needed
  });

  // Style for the animated h1 element
  const h1Style = {
    fontSize: "1.7rem", // Adjust the font size
    color: "white",
    textAlign: "center",
    textShadow: "0 0 2px black",
    marginBottom: "350px" // Adjust the text shadow
    // Add any other CSS properties you want to style the h1 element
  };

  const steps = [
    { name: 'Arturo', subtitle: 'Founder' },
    { name: 'Chaos', subtitle: 'Co-founder' },
  ];

  const arturoProps = useSpring({
    opacity: currentStep === 0 ? 1 : 0,
    transform: currentStep === 0 ? 'translateY(0px)' : 'translateY(-50px)',
  });

  const chaosProps = useSpring({
    opacity: currentStep === 1 ? 1 : 0,
    transform: currentStep === 1 ? 'translateY(0px)' : 'translateY(-50px)',
  });

  const onStepEnter = ({ data }) => {
    setCurrentStep(data);
  };

  return (
    <div className="team">
      <animated.header
        style={{
          ...h1Style,
          ...h1Animation,
          // Apply the scroll-based animation here
        }}
      >
        The Team
      </animated.header>
      <Scrollama onStepEnter={onStepEnter}>
        {steps.map((step, index) => (
          <Step data={index} key={index}>
            <animated.div
              style={index === 0 ? arturoProps : chaosProps}
              className="team-member"
            >
              <img src={index === 0 ? arturoImage : chaosImage} alt={step.name} />
              <h2>{step.name}</h2>
              <p>{step.subtitle}</p> {/* Subtitle */}
            </animated.div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default Team;
