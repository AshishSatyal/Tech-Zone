import React from "react";
import { items } from "./AllData";
import "./proudproduct.css";
import { Link } from "react-router-dom";

const ProductItem = () => {
  const filtereditems = items.filter((item) => item.id <= 8);

  return (
    <div className='proud-grid'>
      {filtereditems.map((item) => {
        return (
          <Link to={`/product/${item.id}`}>
            <div className='product' key={item.id}>
              <div className='product-header'>
                <img src={item.img} alt='product1' />
              </div>
              <div className='product-details'>
                <p>{item.description}</p>
                <p>{item.price}$</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductItem;
