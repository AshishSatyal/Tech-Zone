import React from "react";
import TrendingProduct from "./TrendingProduct";
import "./trending.css";

const Trending = () => {
  return (
    <div className='trending-container'>
      <div className='trending-header'>
        <p>trending now</p>
      </div>
      <TrendingProduct />
    </div>
  );
};

export default Trending;
