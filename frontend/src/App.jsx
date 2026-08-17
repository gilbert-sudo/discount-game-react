import React from 'react';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import HeroCarousel from './components/home/HeroCarousel';
import CategoryLinks from './components/home/CategoryLinks';
import TrendingDeals from './components/home/TrendingDeals';
import Newsletter from './components/home/Newsletter';
import Reviews from './components/home/Reviews';
import Footer from './components/layout/Footer';
import FloatingDock from './components/layout/FloatingDock';

function App() {
  return (
    <div className="antialiased selection:bg-[#c000ff] selection:text-white text-slate-900 dark:text-slate-50 transition-colors duration-300 relative min-h-screen flex flex-col">
      <FloatingDock />
      
      {/* Gaming Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2560&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-50 dark:opacity-20 mix-blend-overlay" 
          alt="Background" 
        />
        <div className="absolute inset-0 bg-slate-50/90 dark:bg-[#0B0F19]/95 backdrop-blur-[2px]"></div>
      </div>

      <TopBar />
      <Navbar />

      <main className="max-w-[1600px] mx-auto px-4 lg:px-8 py-8 flex flex-col gap-12 w-full flex-grow">
        <HeroCarousel />
        <CategoryLinks />
        <TrendingDeals />
        <Newsletter />
        <Reviews />
      </main>

      <Footer />
    </div>
  );
}

export default App;
