import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import NFTMintingContract from '../../components/abi/abi.json'; // Import the contract ABI
import './Minting.scss'; // Import the SCSS file

const contractAddress = '0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47';

const Minting = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('');
  const [mintPrice, setMintPrice] = useState(0);
  const [numberOfNFTs, setNumberOfNFTs] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize Web3
    async function initWeb3() {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWeb3(web3Instance);

        // Initialize Contract
        const networkId = await web3Instance.eth.net.getId();
        const contractData = NFTMintingContract.networks[networkId];
        if (contractData) {
          const contractInstance = new web3Instance.eth.Contract(
            NFTMintingContract.abi,
            contractAddress
          );
          setContract(contractInstance);

          // Fetch Mint Price
          const mintPrice = await contractInstance.methods.mintPrice().call();
          setMintPrice(web3Instance.utils.fromWei(mintPrice, 'ether'));
        }
      } else {
        console.error('Web3 not detected. Please install MetaMask or use a web3-enabled browser.');
      }
    }

    initWeb3();
  }, []);

  const handleMint = async () => {
    setLoading(true);
    try {
      await contract.methods.mintNFT(account, numberOfNFTs).send({
        from: account,
        value: web3.utils.toWei((mintPrice * numberOfNFTs).toString(), 'ether'),
      });
      alert(`${numberOfNFTs} NFT(s) minted successfully!`);
    } catch (error) {
      console.error('Error minting NFTs:', error);
      alert('Error minting NFTs. Please check the console for details.');
    }
    setLoading(false);
  };

  const handleAccountChange = (e) => {
    setAccount(e.target.value);
  };

  const handleNumberOfNFTsChange = (e) => {
    setNumberOfNFTs(e.target.value);
  };

  return (
    <div className="minting-container">
      <h1 className="minting-title">NFT Minting</h1>
      <p className="minting-info">Account: {account}</p>
      <p className="minting-info">Mint Price: {mintPrice} Songbird </p>
      
      <input
        className="minting-input"
        type="number"
        placeholder="Number of NFTs"
        onChange={handleNumberOfNFTsChange}
      />
      <button
        className="minting-button"
        onClick={handleMint}
        disabled={!web3 || !contract || loading}
      >
        Mint NFT(s)
      </button>
    </div>
  );
};

export default Minting;
