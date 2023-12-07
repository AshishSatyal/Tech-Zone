import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Proudprod from "./components/Proudprod";
import Banner from "./components/Banner";
import Trending from "./components/Trending";
import BannerTwo from "./components/BannerTwo";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Proudprod />
      <Banner />
      <Trending />
      <BannerTwo />
    </div>
  );
}

export default App;
