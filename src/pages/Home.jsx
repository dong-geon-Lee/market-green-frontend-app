import React from "react";
import About from "../components/About/About";
import Hero from "../components/Hero";
import Information from "../components/Information";
import Introduce from "../components/Introduce";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

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
