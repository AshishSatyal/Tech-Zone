import React from "react";
import Trending from "../components/Trending.jsx";
import Newsletter from "../components/Newsletter.jsx";
import ProductInside from "../components/ProductInside.jsx";

const ProductPage = () => {
  return (
    <div>
      <div className='product-info'>
        <ProductInside />
      </div>
      <Trending />
      <Newsletter />
    </div>
  );
};

export default ProductPage;
