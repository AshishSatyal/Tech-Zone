import React from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Trending from "../components/Trending.jsx";
import Newsletter from "../components/Newsletter.jsx";
import ProductInside from "../components/ProductInside.jsx";

const ProductPage = () => {
  return (
    <div>
      <Nav />
      <div className='product-info'>
        <ProductInside />
      </div>
      <Trending />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
