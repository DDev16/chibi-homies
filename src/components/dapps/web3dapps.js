// Web3DApps.js

import React from 'react';
import styles from '../../components/dapps/dapps.modules.scss'; // Import the scoped CSS module

const Web3DApps = () => {
  const dApps = [
    {
      name: 'Chibi Minting',
      url: 'https://dapp1.example.com',
      image: 'https://source.unsplash.com/featured/?blockchain',
      description: 'Minting a Chibi, gets you 1 free',
    },
    {
      name: 'DApp 2',
      url: 'https://dapp2.example.com',
      image: 'https://source.unsplash.com/featured/?blockchain',
      description: 'Description for DApp 2 goes here.',
    },
    {
      name: 'DApp 3',
      url: 'https://dapp3.example.com',
      image: 'https://source.unsplash.com/featured/?blockchain',
      description: 'Description for DApp 3 goes here.',
    },
    // Add more DApps as needed
  ];

  return (
    <div className="web3container"> {/* Use scoped class name */}
      <h1 className="dappsh1">Chibi Homies NFT DApps Showcase</h1>
      <ul className="dapp"> {/* Use scoped class name */}
        {dApps.map((dApp, index) => (
          <li key={index}>
            <a
              href={dApp.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <div className="dapp-item">
                <img
                  src={dApp.image}
                  alt={`Image for ${dApp.name}`}
                  className="dapp-image"
                />
                <h2 className="dapp-name">{dApp.name}</h2>
                <p className="dapp-description">{dApp.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Web3DApps;
