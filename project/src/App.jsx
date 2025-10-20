import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import AppleTV from './components/AppleTV';
import TradeIn from './components/TradeIn';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Products />
      <AppleTV />
      <TradeIn />
      <Footer />
    </div>
  );
}

export default App;