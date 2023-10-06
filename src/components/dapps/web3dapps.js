import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';
import './dapps.modules.scss';
import chibi1 from '../../assets/mint.jpeg';
import chibi2 from '../../assets/staking.jpeg';
import chibi3 from '../../assets/staking.jpeg';
import chibi4 from '../../assets/staking.jpeg';
import chibi5 from '../../assets/staking.jpeg';
import chibi6 from '../../assets/staking.jpeg';
import chibi7 from '../../assets/staking.jpeg';


const dappsData = [
  {
    name: 'ChibiPsycho Mint',
    description: 'Welcome to ChibiPsycho Mint, your exclusive destination for minting PsychoChibis – the perfect addition to your NFT collection. Dive into the world of collectibles with ease, and acquire these unique digital treasures effortlessly. Discover the madness of the PsychoChibis universe and begin your journey today with ChibiPsycho Mint, where every mint is a step closer to owning a piece of artistry!',
    imageUrl: chibi1,
    linkUrl: 'https://example.com/car1', // Add your desired URL here
  },
  {
    name: 'Gem Miner',
    description: 'Introducing ChibiGem Miner: Soft Stake Your PsychoChibis, Mine Precious Gems! Welcome to the ChibiGem Miner, where you can uncover the hidden potential of your cherished PsychoChibis NFTs. Immerse yourself in the world of digital collectibles and witness your Chibis evolve into valuable PsychoGems as you stake them with us',
    imageUrl: chibi2,
    linkUrl: 'https://example.com/car2', // Add your desired URL here
  },
  {
    name: 'DApp 1',
    description: 'This is Car 1. Lorem ipsum dolor sit amet.',
    imageUrl: chibi3,
    linkUrl: 'https://example.com/dapp1', // Add your desired URL here
  },
  {
    name: 'DApp 2',
    description: 'This is Car 2. Lorem ipsum dolor sit amet.',
    imageUrl: chibi4,
    linkUrl: 'https://example.com/dapp2', // Add your desired URL here
  },
  {
    name: 'DApp 3',
    description: 'This is Car 1. Lorem ipsum dolor sit amet.',
    imageUrl: chibi5,
    linkUrl: 'https://example.com/dapp1', // Add your desired URL here
  },
  {
    name: 'DApp 4',
    description: 'This is Car 2. Lorem ipsum dolor sit amet.',
    imageUrl: chibi6,
    linkUrl: 'https://example.com/dapp2', // Add your desired URL here
  },
  
];

function Web3DApps() {
  return (
    <div className="web3dapps">
      <div className="swiper-container">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Parallax]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          parallax={true}
        >
          {dappsData.map((dap, index) => (
            <SwiperSlide key={index}>
              <div className="dapps">
                <div className="dapps-image-container">
                  <img
                    src={dap.imageUrl}
                    alt={dap.name}
                    className="dapps-image swiper-parallax"
                    data-swiper-parallax="-50"
                  />
                  <div className="dapps-image-glow"></div>
                </div>
                <h3>{dap.name}</h3>
                <p>{dap.description}</p>
                <a href={dap.linkUrl} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Web3DApps;