import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import Confetti from 'react-confetti';
import './nav.scss';

function Nav() {
  const [easterEggFound, setEasterEggFound] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  const toggleEasterEgg = () => {
    setEasterEggFound(!easterEggFound);
    setConfettiActive(true); // Activate confetti when the logo is clicked
  };

  // Reset confetti after a delay
  const resetConfetti = () => {
    setConfettiActive(false);
    setTimeout(() => {
      setEasterEggFound(false);
    }, 3000); // Adjust the delay as needed
  };

  return (
    <nav className="app-navigation">
      <ul className="nav-list left">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <a href="/gallery">Staking</a>
        </li>
        <li className="nav-item">
          <a href="/minting">Mint</a>
        </li>
      </ul>

      <div className={`app-logo ${easterEggFound ? 'easter-egg-found' : ''}`} onClick={toggleEasterEgg}>
        <img src={logo} alt="logo" />
      </div>

      <ul className="nav-list right">
        <li className="nav-item">
          <a href="/market">Market</a>
        </li>
        <li className="nav-item">
          <a href="/dapps
          ">Web3 Dapps</a>
        </li>
        <li className="nav-item">
          <a href="/shop">Shop</a>
        </li>
        <li className="nav-item">
          <a href="/faqs">FAQS</a>
        </li>
       
      </ul>

      {easterEggFound && (
        <div className="easter-egg-message">You found your first Easter egg!</div>
      )}

      {confettiActive && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          recycle={false}
          onConfettiComplete={resetConfetti}
        />
      )}
    </nav>
  );
}

export default Nav;