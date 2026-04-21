import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedServices from "./components/FeaturedServices";
import ScrollingServices from "./components/ScrollingServices";
import WhyChooseCetro from "./components/WhyChooseCetro";
import whywechosehumanimage from "./assets/images/whywechosehumanpic.jpg";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden m-0 p-0">
      <Header />
      <Hero />
      <About />
      <ScrollingServices />
      <WhyChooseCetro whywechosehumanimage={whywechosehumanimage} />
      <FeaturedServices />
    </div>
  );
};

export default App;
