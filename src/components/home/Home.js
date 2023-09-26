import React, { lazy, Suspense } from 'react';
import '../../App.scss';
import { Parallax } from 'react-parallax';
import Carasoule from '../../components/carosoule/carosoule1.js';
import Footer1 from '../../components/footer/Footer';
import Web3DApp  from "../../components/dapps/web3dapps"; // Import the default export Web3DApp
import About from '../about/about';
import "./Home.scss"
import parallaxImage from '../../assets/test.png';
import parallaxBackground from '../../assets/friends.png';
import "../home/Home.scss"
import Roadmap from '../roadmap/roadmap';
import ParallaxContainer from '../parallax/parallaxhero';
import DiscordWidget from '../discord/discord';


function Home() {
  return (
    <div className='Home'>
      <Carasoule />
      <ParallaxContainer />


      

      <Parallax strength={800} bgImage={parallaxImage}>
        <About />
      </Parallax>
      <Parallax strength={900} >
        <Web3DApp />
      </Parallax>
      <Parallax strength={800} bgImage={parallaxBackground}>

      <Roadmap />
      </Parallax>
      <Parallax className='parallaxImage' strength={400} bgImage={parallaxImage} >

      <DiscordWidget />
      </Parallax>

      <Footer1 />
    </div>
  );
}

export default Home;
