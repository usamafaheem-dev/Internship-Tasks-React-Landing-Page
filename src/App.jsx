import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CinematicHero from "./components/CinematicHero";
import About from "./components/About";
import FeaturedServices from "./components/FeaturedServices";
import ScrollingServices from "./components/ScrollingServices";
import WhyChooseCetro from "./components/WhyChooseCetro";
import TrustedPartnerSection from "./components/TrustedPartnerSection";
import whywechosehumanimage from "./assets/images/whywechosehumanpic.jpg";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden m-0 p-0">
      <Header />
      <Hero />
      <About />
      <ScrollingServices />
      <WhyChooseCetro whywechosehumanimage={whywechosehumanimage} />
      <FeaturedServices />
      <TrustedPartnerSection />
      <CinematicHero />
      <Footer/>
    </div>
  );
};

export default App;
