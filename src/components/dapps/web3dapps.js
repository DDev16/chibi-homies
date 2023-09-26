import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';
import './dapps.modules.scss';
import chibi1 from '../../assets/chib (1).png';


const carsData = [
  {
    name: 'Car 1',
    description: 'This is Car 1. Lorem ipsum dolor sit amet.',
    imageUrl: chibi1,
    linkUrl: 'https://example.com/car1', // Add your desired URL here
  },
  {
    name: 'Car 2',
    description: 'This is Car 2. Lorem ipsum dolor sit amet.',
    imageUrl: chibi1,
    linkUrl: 'https://example.com/car2', // Add your desired URL here
  },
  {
    name: 'Car 1',
    description: 'This is Car 1. Lorem ipsum dolor sit amet.',
    imageUrl: chibi1,
    linkUrl: 'https://example.com/car1', // Add your desired URL here
  },
  {
    name: 'Car 2',
    description: 'This is Car 2. Lorem ipsum dolor sit amet.',
    imageUrl: chibi1,
    linkUrl: 'https://example.com/car2', // Add your desired URL here
  },
  {
    name: 'Car 1',
    description: 'This is Car 1. Lorem ipsum dolor sit amet.',
    imageUrl: chibi1,
    linkUrl: 'https://example.com/car1', // Add your desired URL here
  },
  {
    name: 'Car 2',
    description: 'This is Car 2. Lorem ipsum dolor sit amet.',
    imageUrl: chibi1,
    linkUrl: 'https://example.com/car2', // Add your desired URL here
  },
  // Add more car data entries here
];

function Web3DApps() {
  const [swiper, setSwiper] = useState(null);
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    if (swiper) {
      const handleScroll = (e) => {
        const delta = e.deltaY;

        if (delta > 0) {
          swiper.slideNext();
        } else if (delta < 0) {
          swiper.slidePrev();
        }
      };

      swiperContainerRef.current.addEventListener('wheel', handleScroll);

      return () => {
        swiperContainerRef.current.removeEventListener('wheel', handleScroll);
      };
    }
  }, [swiper]);

  return (
    <div className="web3dapps">
      <div ref={swiperContainerRef} className="swiper-container">
        <Swiper
          onSwiper={setSwiper}
          modules={[EffectCoverflow, Pagination, Navigation, Parallax]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          parallax={true}
        >
          {carsData.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="car">
                <img src={car.imageUrl} alt={car.name} />
                <h3>{car.name}</h3>
                <p>{car.description}</p>
                <a href={car.linkUrl} target="_blank" rel="noopener noreferrer">
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