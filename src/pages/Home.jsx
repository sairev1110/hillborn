// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MarketingSection from '../components/MarketingSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MarketingSection />
      <Footer />
    </>
  );
};

export default Home;
