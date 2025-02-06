import React from 'react';
import './App.css';
import Header from '/src/components/Header';
import Hero from '/src/components/Hero';
import Section1 from '/src/components/Section1';
import Section2 from '/src/components/Section2';
import Section3 from '/src/components/Section3';
import Section4 from '/src/components/Section4';
import Section5 from '/src/components/Section5';
import Section6 from '/src/components/Section6';
import Section7 from '/src/components/Section7';
import Footer from '/src/components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
}

export default App;
