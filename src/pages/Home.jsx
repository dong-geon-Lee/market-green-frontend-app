import React from "react";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Information from "../components/Information/Information";
import Introduce from "../components/Introduce/Introduce";
import Products from "../components/Products/Products";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Introduce />
      <About />
      <Products />
      <Testimonials />
      <Information />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
