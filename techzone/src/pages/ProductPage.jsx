import React from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Trending from "../components/Trending.jsx";
import Newsletter from "../components/Newsletter.jsx";

const ProductPage = () => {
  return (
    <div>
      <Nav />
      <div className='product-info'>
        <h1>This is product page</h1>
      </div>
      <Trending />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
