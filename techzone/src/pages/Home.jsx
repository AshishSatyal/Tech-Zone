import React from "react";
import Hero from "../components/Hero";
import Proudprod from "../components/Proudprod";
import Banner from "../components/Banner";
import Trending from "../components/Trending";
import BannerTwo from "../components/BannerTwo";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Proudprod />
      <Banner />
      <Trending />
      <BannerTwo />
      <Newsletter />
    </div>
  );
};

export default Home;
