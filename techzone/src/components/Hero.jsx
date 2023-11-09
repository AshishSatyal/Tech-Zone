import React from "react";
import "./hero.css";
import Main1 from "../img/header/home-img-1.jpg";
import Main2 from "../img/header/home-img-2.jpg";
import Main3 from "../img/header/home-img-3.jpg";
import Main4 from "../img/header/home-img-4.jpg";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='grid-container'>
          <div className='grid-one listed'>
            <div className='img1 hero-overlay'>
              <img src={Main1} alt='img1' />
              <p className='img-description uppercase'>Home Decoration</p>
            </div>
          </div>
          <div className='grid-two listed'>
            <div className='img2 hero-overlay'>
              <img src={Main2} alt='img1' />
              <p className='img-description uppercase'>skin care</p>
            </div>
          </div>
          <div className='grid-three listed'>
            <div className='img3 hero-overlay'>
              <img src={Main3} alt='img1' />
              <p className='img-description uppercase'>Kitchen</p>
            </div>
          </div>
          <div className='grid-four listed'>
            <div className='img4 hero-overlay'>
              <img src={Main4} alt='img1' />
              <p className='img-description uppercase'>electronics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
