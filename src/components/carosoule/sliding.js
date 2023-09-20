import React from 'react';
import './sliding.css';
import Image1 from "../../assets/chib (1).png"
import Image2 from "../../assets/chib (2).png"
import Image3 from "../../assets/chib (3).png"
import Image4 from "../../assets/chib (4).png"
import Image5 from "../../assets/chib (5).png"
import Image6 from "../../assets/chib (6).png"
import Image7 from "../../assets/chib (7).png"

const SlidingGallery = () => {
    return (
        <div className="gallery">
            <div className="gallery-container">
                <div className="gallery-item"><img src={Image1} alt="Image 1" /></div>
                <div className="gallery-item"><img src={Image2} alt="Image 2" /></div>
                <div className="gallery-item"><img src={Image3} alt="Image 3" /></div>
                <div className="gallery-item"><img src={Image4} alt="Image 4" /></div>
                <div className="gallery-item"><img src={Image5} alt="Image 5" /></div>
                <div className="gallery-item"><img src={Image6} alt="Image 6" /></div>
                <div className="gallery-item"><img src={Image7} alt="Image 7" /></div>

                            </div>
        </div>
    );
};

export default SlidingGallery;
