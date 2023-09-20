import React from 'react';
import '../../App.scss';
import { Parallax } from 'react-parallax';
import Carasoule from '../../components/carosoule/carosoule1.js';
import Hero from '../../components/hero/Hero';
import Footer1 from '../../components/footer/Footer';
import Web3DApps from '../dapps/web3dapps';
import About from '../about/about';
import Spline from '@splinetool/react-spline';
import "./Home.scss"
import parallaxImage from '../../assets/zyro-image (1).png';
import parallaxBackground from '../../assets/clouds.png';
import "../home/Home.scss"
function Home() {
  return (
    <div>
      <Carasoule />
      <Hero />

      <Parallax
        strength={450}
        bgImage={parallaxBackground} // Replace with your background image path

        className="custom-parallax" // Add a CSS class for styling if needed
      >
        <div className="parallax-content">
          {/* <img
            src={parallaxImage}
            alt="Parallax Image"
            className="custom-image" // Add a CSS class for styling the image
          /> */}
       <div className="parallax-content">
 
       <div className='about-container'>
  <h1>Chibi Factory</h1>
  <p>Our first idea - a Chibi Factory.</p>
  <p>Craft you own 3D Chibi and Mint into your very own NFT to be used in our metaverse!</p>
</div>
</div>
<Spline
  scene="https://prod.spline.design/Vmu1n3CM401N0U-E/scene.splinecode"
  className="custom-image" // Add a CSS class for styling the image
/>
        </div>
      </Parallax>

      <Parallax strength={800}
              bgImage={parallaxImage} // Replace with your background image path
>
        <About />
      </Parallax>
      <Parallax 
        strength={600}
        bgImage={parallaxBackground} // Replace with your background image path
>
        <Web3DApps />
      </Parallax>
      <Footer1 />
    </div>
  );
}

export default Home;
