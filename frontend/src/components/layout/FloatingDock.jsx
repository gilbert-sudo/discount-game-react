import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, LayoutGrid, ShoppingCart, User, X, ChevronRight, Flame, Gamepad2, Disc, Film, Wand2, Music, Briefcase } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { openSearch } from '../../store/slices/searchSlice';

const FloatingDock = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  
  // Handle scroll to show/hide dock
  useEffect(() => {
    const handleScroll = () => {
      // Show dock when scrolled past the main navbar (roughly 120px)
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMenuOpen(false); // Close menu if scrolled back to top
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle browser back button to close menu
  useEffect(() => {
    const handlePopState = () => {
      // If user presses back button on phone, close the menu
      setIsMenuOpen(false);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openMenu = () => {
    window.history.pushState({ menuOpen: true }, '');
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    // If the state is still in history, pop it
    if (window.history.state && window.history.state.menuOpen) {
      window.history.back();
    }
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { icon: Home, label: 'Accueil', to: '/' },
    { icon: Search, label: 'Recherche', onClick: () => dispatch(openSearch()) },
    { icon: LayoutGrid, label: 'Catégories', onClick: toggleMenu, isSpecial: true },
    { icon: ShoppingCart, label: 'Panier', href: '#', badge: '0' },
    { icon: User, label: 'Compte', href: '#' },
  ];

  const categories = [
    { name: 'Jeux Vidéo', count: '1,240', color: 'bg-blue-500', icon: Gamepad2 },
    { name: 'Blu Ray', count: '856', color: 'bg-indigo-500', icon: Disc },
    { name: 'DVD', count: '3,102', color: 'bg-purple-500', icon: Film },
    { name: 'DVD Disney', count: '412', color: 'bg-pink-500', icon: Wand2 },
    { name: 'Musique', count: '12,045', color: 'bg-rose-500', icon: Music },
    { name: 'Déstockage', count: '89', color: 'bg-[#FF4D5A]', icon: Flame },
    { name: 'Pro', count: '', color: 'bg-slate-800', icon: Briefcase }
  ];

  return (
    <>
      {/* Overlay Menu */}
      <div 
        onClick={closeMenu}
        className={`fixed inset-0 z-[100] bg-white/80 dark:bg-[#2A3B50]/90 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-center cursor-pointer
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute top-0 w-full p-4 flex justify-end md:p-6">
          <button 
            onClick={closeMenu}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 dark:bg-dark-hover text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-[#334155] transition-colors shadow-sm font-semibold text-sm"
          >
            <span className="hidden sm:inline">Fermer</span>
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        
        <div 
          onClick={(e) => e.stopPropagation()} 
          className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 cursor-default flex flex-col max-h-screen overflow-y-auto no-scrollbar"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 text-center tracking-wide">
            EXPLOREZ LE <span className="text-gradient">CATALOGUE</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, idx) => (
              <a 
                key={idx} 
                href="#" 
                className={`group flex items-center justify-between p-5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-white/5 hover:border-[#FF4D5A]/50 dark:hover:border-[#FF4D5A]/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(255,77,90,0.15)] hover:-translate-y-1 transform
                  ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                `}
                style={{ transitionDelay: `${isMenuOpen ? idx * 50 : 0}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.color} text-white shadow-lg`}>
                    {cat.icon && <cat.icon className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-[#FF4D5A] transition-colors">
                      {cat.name}
                    </h3>
                    {cat.count && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{cat.count} articles</p>
                    )}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#FF4D5A] group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Dock */}
      <div 
        className={`fixed bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 z-[90] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          translate-y-0 opacity-100 scale-100 pointer-events-auto
          ${!isVisible ? 'md:translate-y-16 md:opacity-0 md:scale-95 md:pointer-events-none' : ''}
        `}
      >
        <div className="flex items-center gap-2 p-2 rounded-full bg-white/90 dark:bg-[#35485E]/90 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] dock-container">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group dock-item">
                {item.to ? (
                  <Link 
                    to={item.to}
                    className="flex items-center justify-center w-12 h-12 rounded-full text-slate-600 dark:text-slate-400 hover:text-[#FF4D5A] dark:hover:text-[#FF4D5A] transition-colors relative"
                  >
                    <Icon className="w-6 h-6 transition-transform duration-200 icon-scale" strokeWidth={2} />
                    {item.badge && (
                      <span className="absolute top-2 right-2 w-4 h-4 bg-[#FF4D5A] rounded-full text-[0.6rem] font-bold text-white flex items-center justify-center border-2 border-white dark:border-[#35485E] dock-badge">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ) : item.href ? (
                  <a 
                    href={item.href}
                    className="flex items-center justify-center w-12 h-12 rounded-full text-slate-600 dark:text-slate-400 hover:text-[#FF4D5A] dark:hover:text-[#FF4D5A] transition-colors relative"
                  >
                    <Icon className="w-6 h-6 transition-transform duration-200 icon-scale" strokeWidth={2} />
                    {item.badge && (
                      <span className="absolute top-2 right-2 w-4 h-4 bg-[#FF4D5A] rounded-full text-[0.6rem] font-bold text-white flex items-center justify-center border-2 border-white dark:border-[#35485E] dock-badge">
                        {item.badge}
                      </span>
                    )}
                  </a>
                ) : (
                  <button 
                    type="button"
                    onClick={item.onClick}
                    className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors relative ${
                      item.isSpecial 
                        ? 'bg-gradient-to-tr from-[#FF4D5A] to-[#FF7582] text-white shadow-lg shadow-purple-500/30' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-[#FF4D5A] dark:hover:text-[#FF4D5A]'
                    }`}
                  >
                    <Icon className={`w-6 h-6 transition-transform duration-500 icon-scale ${isMenuOpen && item.isSpecial ? 'rotate-[360deg]' : ''}`} strokeWidth={item.isSpecial ? 2.5 : 2} />
                  </button>
                )}
                
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                  {item.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-white rotate-45"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FloatingDock;
