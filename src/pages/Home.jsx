import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Information from "../components/Information";
import Introduce from "../components/Introduce";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Hero></Hero>
      <Introduce></Introduce>
      <About></About>
      <Products></Products>
      <Testimonials></Testimonials>
      <Information></Information>
      <Gallery></Gallery>
      <Footer></Footer>
    </>
  );
};

export default Home;
