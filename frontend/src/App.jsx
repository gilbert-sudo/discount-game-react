import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingDock from './components/layout/FloatingDock';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import LoginModal from './components/auth/LoginModal';
import SignupModal from './components/auth/SignupModal';
import ForgotPasswordModal from './components/auth/ForgotPasswordModal';
import SearchModal from './components/layout/SearchModal';
import CartModal from './components/layout/CartModal';
import WhatsAppButton from './components/layout/WhatsAppButton';

function App() {
  return (
      <Router>
      <div className="antialiased selection:bg-[#FF4D5A] selection:text-white text-slate-900 dark:text-slate-50 transition-colors duration-300 relative min-h-screen flex flex-col">
        <FloatingDock />
        <WhatsAppButton />
        <LoginModal />
        <SignupModal />
        <ForgotPasswordModal />
        <SearchModal />
        <CartModal />
        
        {/* Gaming Background */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2560&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-100 dark:opacity-100" 
            alt="Background" 
          />
          <div className="absolute inset-0 bg-slate-50/80 dark:bg-[#2A3B50]/75 backdrop-blur-[6px]"></div>
        </div>

        <TopBar />
        <Navbar />

        <main className="max-w-[1600px] mx-auto px-4 lg:px-8 py-8 flex flex-col gap-12 w-full flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
      </Router>
  );
}

export default App;
