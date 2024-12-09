import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Objectives from './components/Objectives';
import Stats from './components/Stats';
import Products from './components/Products';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Objectives />
        <Stats />
        <Products />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;