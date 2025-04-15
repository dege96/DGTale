import React from 'react';
import './App.css';
import Header from '/src/components/Header';
import Hero from '/src/components/Hero';
import AboutSection from '/src/components/AboutSection';
import ServicesSection from '/src/components/ServicesSection';
import PortfolioSection from '/src/components/PortfolioSection';
import TestimonialsSection from '/src/components/TestimonialsSection';
import PricingSection from '/src/components/PricingSection';
import BlogSection from '/src/components/BlogSection';
import ContactSection from '/src/components/ContactSection';
import Footer from '/src/components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
