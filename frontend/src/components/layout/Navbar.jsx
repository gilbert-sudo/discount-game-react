import React from 'react';
import { ChevronDown, Search, Moon, Sun, Bell, Heart, User, ShoppingCart, Menu, Flame } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';

const Navbar = () => {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <>
      <header className="w-full bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-4 flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src="/logo.png" alt="Discount Game" className="h-10 sm:h-12 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl tracking-[0.1em] font-display font-bold leading-none text-slate-900 dark:text-white">
                DISCOUNT<span className="text-[#c000ff]">GAME</span>
              </span>
            </div>
          </a>

          {/* Search Bar */}
          <div className="flex-grow max-w-2xl relative hidden md:flex items-center group mx-2 lg:mx-6">
            <div className="absolute left-0 top-0 bottom-0 bg-slate-100 dark:bg-dark-hover border-r border-slate-300 dark:border-white/10 rounded-l-full flex items-center px-4 lg:px-6 cursor-pointer hover:bg-slate-200 dark:hover:bg-[#334155] transition-colors z-10 text-sm font-medium text-slate-700 dark:text-slate-300">
              <span className="hidden lg:inline">Tout</span> <ChevronDown className="w-4 h-4 ml-1" />
            </div>
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="w-full bg-white dark:bg-dark-nav border border-slate-300 dark:border-white/10 rounded-full py-2.5 lg:py-3.5 pl-14 lg:pl-28 pr-12 lg:pr-16 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-[#c000ff] dark:focus:border-[#c000ff] focus:ring-2 focus:ring-[#c000ff]/20 transition-all shadow-sm dark:shadow-none"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-[#c000ff] hover:bg-[#9900cc] dark:hover:bg-white transition-colors rounded-full px-3 lg:px-5 flex items-center justify-center text-white dark:hover:text-[#0B0F19]">
              <Search className="w-4 h-4 lg:w-5 lg:h-5 font-bold" />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-5 shrink-0">
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode} 
              type="button" 
              className="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-hover rounded-full text-sm p-2 transition-colors"
            >
              {isDark ? (
                <Sun className="w-4 h-4 lg:w-5 lg:h-5" />
              ) : (
                <Moon className="w-4 h-4 lg:w-5 lg:h-5" />
              )}
            </button>

            <a href="#" className="flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-[#c000ff] dark:hover:text-[#c000ff] transition-colors relative p-1.5 lg:p-2 rounded-full hover:bg-slate-100 dark:hover:bg-dark-hover">
              <Bell className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 lg:w-4 lg:h-4 bg-[#ff4655] rounded-full text-[0.5rem] lg:text-[0.6rem] font-bold text-white flex items-center justify-center border-2 border-white dark:border-[#0B0F19]">1</span>
            </a>
            <a href="#" className="hidden lg:flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-[#c000ff] dark:hover:text-[#c000ff] transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-dark-hover">
              <Heart className="w-6 h-6" />
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors border-l border-slate-300 dark:border-white/10 pl-2 lg:pl-5 ml-1">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-slate-200 dark:border-white/20 bg-slate-100 dark:bg-dark-hover flex items-center justify-center">
                <User className="w-4 h-4 lg:w-5 lg:h-5" />
              </div>
              <div className="hidden xl:block text-xs">
                <p className="text-slate-500 font-medium">Connexion</p>
                <p className="font-bold text-slate-900 dark:text-white">Mon Compte</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 lg:gap-3 bg-slate-100 dark:bg-dark-hover hover:bg-slate-200 dark:hover:bg-[#334155] border border-slate-200 dark:border-white/10 py-1.5 lg:py-2.5 px-3 lg:px-5 rounded-full transition-colors ml-1">
              <div className="relative">
                <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5 text-slate-700 dark:text-white" />
                <span className="absolute -top-1.5 -right-1.5 lg:-top-2 lg:-right-2 w-3.5 h-3.5 lg:w-4 lg:h-4 bg-[#c000ff] rounded-full text-[0.55rem] lg:text-[0.65rem] font-bold text-white flex items-center justify-center">0</span>
              </div>
              <span className="font-bold text-sm hidden xl:block text-slate-900 dark:text-white">0,00 €</span>
            </a>
          </div>
        </div>

        {/* Secondary Nav (Categories) */}
        <nav className="w-full bg-slate-50 dark:bg-[#111827] border-t border-slate-200 dark:border-white/5 py-3 hidden md:block transition-colors duration-300 overflow-x-auto no-scrollbar">
          <div className="max-w-[1600px] mx-auto px-4 lg:px-8 flex items-center gap-5 lg:gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300 w-max min-w-full">
            <a href="#" className="text-[#c000ff] hover:text-[#9900cc] dark:hover:text-white flex items-center gap-2">
              <Menu className="w-4 h-4" /> Toutes les catégories
            </a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Jeux Vidéo</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Blu Ray</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">DVD</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">DVD Disney</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Musique</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors bg-slate-200 dark:bg-dark-hover px-3 py-1 rounded-full">Pro</a>
            <a href="#" className="text-[#ff4655] hover:text-[#e03a46] dark:hover:text-white transition-colors ml-auto flex items-center gap-1 bg-[#ff4655]/10 px-3 py-1 rounded-full">
              <Flame className="w-4 h-4" /> Déstockage
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Search */}
      <div className="md:hidden p-4 bg-white dark:bg-dark-bg border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
        <div className="relative">
          <input type="text" placeholder="Rechercher..." className="w-full bg-slate-100 dark:bg-dark-card border border-slate-300 dark:border-white/10 rounded-full py-3 px-4 pl-12 text-sm text-slate-900 dark:text-white outline-none focus:border-[#c000ff]" />
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
