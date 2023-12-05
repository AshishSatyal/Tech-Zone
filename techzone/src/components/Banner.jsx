import React from "react";
import Banner1 from "../img/banner/banner1.jpg";
import "./banner.css";

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='flex-container'>
        <div className='banner-details'>
          <p className='banner-header'>Creative harmonious living</p>

          <p className='banner-para'>
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </p>
          <button className='banner-btn'>shop now</button>
        </div>
        <div className='banner-img'>
          <img src={Banner1} alt='banner img' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
