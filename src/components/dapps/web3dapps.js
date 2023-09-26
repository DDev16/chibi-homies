import React, { useState } from 'react';
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

function App() {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarClick = (index) => {
    const car = carsData[index];
    window.open(car.linkUrl, '_blank'); // Open the link in a new tab/window
    setSelectedCar(car);
  };

  return (
    <div className="container">
      <h1 className="heading">Web3 DApps</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 3.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Parallax]}
        parallax={true} // Enable the parallax effect for the entire carousel
        className="swiper_container"
      >
        {carsData.map((car, index) => (
          <SwiperSlide key={index} className="image-slide">
            <div onClick={() => handleCarClick(index)}>
              <img
                src={car.imageUrl}
                alt={car.name}
                data-swiper-parallax="-200" // Adjust the parallax value as needed
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedCar && (
        <div className="car-details">
          <h2>{selectedCar.name}</h2>
          <p>{selectedCar.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
