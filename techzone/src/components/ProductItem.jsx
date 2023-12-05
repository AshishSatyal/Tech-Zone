import React from "react";
import { items } from "./AllData";
import "./proudproduct.css";

const ProductItem = () => {
  const filtereditems = items.filter((item) => item.id <= 8);
  console.log(filtereditems);
  return (
    <div className='proud-grid'>
      {filtereditems.map((item) => {
        return (
          <div className='product' key={item.id}>
            <div className='product-header'>
              <img src={item.img} alt='product1' />
            </div>
            <div className='product-details'>
              <p>{item.description}</p>
              <p>{item.price}$</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductItem;
