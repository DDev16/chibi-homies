import React, { lazy, Suspense } from 'react';
import '../../App.scss';
import { Parallax } from 'react-parallax';
import Carasoule from '../../components/carosoule/carosoule1.js';
import Hero from '../../components/hero/Hero';
import Footer1 from '../../components/footer/Footer';
import Web3DApps from '../dapps/web3dapps';
import About from '../about/about';
import "./Home.scss"
import parallaxImage from '../../assets/zyro-image (1).png';
import parallaxBackground from '../../assets/friends.png';
import "../home/Home.scss"
import Roadmap from '../roadmap/roadmap';
import ParallaxContainer from '../parallax/parallaxhero';



function Home() {
  return (
    <div className='Home'>
      {/* <Carasoule /> */}
      <ParallaxContainer />


      {/* <Parallax
        strength={450}
        // bgImage={parallaxBackground}
        className="custom-parallax"
      >
        <div className="parallax-content">
          <div className="parallax-content">
            <div className='about-container'>
              <h1>Chibi Factory</h1>
              <p>Our first idea - a Chibi Factory.</p>
              <p>Craft your own 3D Chibi and Mint into your very own NFT to be used in our metaverse!</p>
              <p>Craft your own 3D Chibi and Mint into your very own NFT to be used in our metaverse!</p>
              <p>Craft your own 3D Chibi and Mint into your very own NFT to be used in our metaverse!</p>
            </div>

            
          </div>
        </div> 
      </Parallax> */}

      <Parallax strength={800} bgImage={parallaxImage}>
        <About />
      </Parallax>
      <Parallax strength={600} >
        <Web3DApps />
      </Parallax>
      <Parallax strength={800} bgImage={parallaxBackground}>

      <Roadmap />
      </Parallax>

      <Footer1 />
    </div>
  );
}

export default Home;
