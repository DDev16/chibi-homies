import React from 'react';
import '../../App.scss';
import { Parallax  } from 'react-parallax';
import Carasoule from '../../components/carosoule/carosoule1.js';
import Footer1 from '../../components/footer/Footer';
import Web3DApp  from "../../components/dapps/web3dapps";
import About from '../about/about';
import "./Home.scss"
import parallaxImage1 from '../../assets/1.jpeg';
import parallaxImage from '../../assets/gem.jpeg';
import parallaxBackground from '../../assets/brick.jpeg';
import "../home/Home.scss"
import Roadmap from '../roadmap/roadmap';
import ParallaxContainer from '../parallax/parallaxhero';
import DiscordWidget from '../discord/discord';
import Hero1 from '../hero/Hero1';
import NewParallax from '../parallax/newparallaxhero.js'
import EmblaCarousel from "../../components/carosoule/EmblaCarsoule.js";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function Home() {
  return (
    <div className='Home'>
      <Carasoule />
      <NewParallax />
     
      {/* Wrap Parallax component in a div with a specific background size */}
      <Parallax className="parallax-image-container" strength={800} bgImage={parallaxImage}>
  
    <About />
  
</Parallax>
      
      <Parallax strength={900}>
        <EmblaCarousel slides={slides} />
      </Parallax>
      
      <Parallax strength={800} bgImage={parallaxImage1}>
        <Roadmap />
      </Parallax>
      
      <Parallax className='parallaxImage' strength={400} bgImage={parallaxBackground}>
        <DiscordWidget />
      </Parallax>
     
      <Footer1 />
    </div>
  );
}

export default Home;
