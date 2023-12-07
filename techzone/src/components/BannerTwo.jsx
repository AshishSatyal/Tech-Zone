import React from "react";
import Banner2 from "../img/banner/banner2.jpg";
import "./banner.css";

const BannerTwo = () => {
  return (
    <div className='banner-container'>
      <div className='flex-container'>
        <div className='banner-img'>
          <img src={Banner2} alt='banner img' />
        </div>
        <div className='banner-details'>
          <p className='banner-header'>Comfortable & Elegante Living</p>

          <p className='banner-para'>
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </p>
          <button className='banner-btn'>shop now</button>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
