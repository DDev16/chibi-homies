import React from 'react';
import '../../components/fonts/blimey/blimeyfont.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./hero.scss"
const Hero = () => {
    const heroStyle = {
        backgroundColor: '',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        height: '55%', // You can adjust the height as needed
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'blimey',
        fontSize: '76px', // Adjust the font size as needed
        marginTop: '0rem',
        marginLeft: '0',
        textShadow: '2px 10px 10px rgba(0, 0, 0, 5)', // Black shadow with blur
      };
      
  return (
    <div style={heroStyle}>
     
  <div className="content">
  <h1 style={{ fontFamily: 'Blimey, cursive' }}>Welcome To Chibi & Friends</h1>
  <p>scroll down</p>
  <FontAwesomeIcon icon={faChevronDown} className="scroll-icon" />
</div>





              
           
    </div>
  );
};

export default Hero;
