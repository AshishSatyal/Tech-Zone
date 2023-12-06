import React from "react";
import TrendingProduct from "./TrendingProduct";
import "./trending.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Trending = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 240;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 240;
  };
  return (
    <div className='trending-container'>
      <div className='trending-header'>
        <p>trending now</p>
        <div className='arrows'>
          <button title='scroll left' onClick={slideLeft}>
            <FaArrowLeft />
          </button>
          <button title='scroll right' onClick={slideRight}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className='slider-container' id='slider'>
        <TrendingProduct />
      </div>
    </div>
  );
};

export default Trending;
