import React from 'react';
import '../../App.scss';
import { Parallax  } from 'react-parallax';
import Carasoule from '../../components/carosoule/carosoule1.js';
import Footer1 from '../../components/footer/Footer';
import Web3DApp  from "../../assets/2d.jpeg";
import About from '../about/about';
import "./Home.scss"
import parallaxImage3 from '../../assets/boxillusion.jpeg';

import parallaxImage1 from '../../assets/backdrop.jpeg';
import parallaxImage from '../../assets/nightsky.jpeg';
import parallaxBackground from '../../assets/brick.jpeg';
import "../home/Home.scss"
import Roadmap from '../roadmap/roadmap';
import DiscordWidget from '../discord/discord';
import Hero1 from '../../assets/nightsky2.jpeg';
import NewParallax from '../parallax/newparallaxhero.js'
import EmblaCarousel from "../../components/carosoule/EmblaCarsoule.js";
import Team from '../team/Team';

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function Home() {
  return (
    <div className='Home'>
      <Carasoule />
      <NewParallax />
      <Parallax className="parallax-image-container" strength={500} bgImage={parallaxBackground}>
  
    <About />
  
</Parallax>
      
      <Parallax strength={800} bgImage={Hero1}>

        <EmblaCarousel slides={slides} />
        </Parallax>

      
      <Parallax className="parallaxImage" strength={800} bgImage={parallaxImage}>
        <Roadmap />
      </Parallax>
      
      <Parallax className='parallaxImage' strength={400} bgImage={parallaxImage1}>
        <DiscordWidget />
      </Parallax>
      <Parallax className='parallaxImage' strength={400} bgImage={Web3DApp}>
        <Team />
      </Parallax>
     
      <Footer1 />
    </div>
  );
}

export default Home;
