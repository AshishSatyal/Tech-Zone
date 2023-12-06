import React from "react";
import { items } from "./AllData";

const TrendingProduct = () => {
  const trendingItems = items.filter((item) => item.id >= 9 && item.id <= 19);

  return (
    <div className='slider-container'>
      {trendingItems.map((item) => {
        return (
          <div className='slider-product' key={item.id}>
            <div className='product-img'>
              <img src={item.img} alt='trending product' />
            </div>
            <div className='product-detail'>
              <p>{item.description}</p>
            </div>
            <div className='price'>
              <p>{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrendingProduct;
