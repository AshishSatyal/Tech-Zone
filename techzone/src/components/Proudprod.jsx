import React from "react";
import ProductItem from "./ProductItem";
import "./proudproduct.css";
import { Link } from "react-router-dom";

const Proudprod = () => {
  return (
    <div className='proud-container'>
      <div className='container'>
        <div className='proud-header'>Products we are proud of</div>
        <div>
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default Proudprod;
