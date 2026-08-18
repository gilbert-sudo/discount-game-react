import React from 'react';
import { ShieldCheck, Zap, Phone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="hidden md:block w-full bg-white dark:bg-dark-nav border-b border-slate-200 dark:border-white/5 py-2 px-4 lg:px-8 text-xs font-semibold text-slate-600 dark:text-slate-400 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center gap-4">
        <div className="flex gap-4 lg:gap-6">
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
            <span className="hidden lg:inline">Protection Acheteur</span>
            <span className="lg:hidden">Acheteur</span>
          </a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors hidden sm:flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-[#FF4D5A]" />
            Arrivages<span className="hidden lg:inline"> du jour</span>
          </a>
        </div>
        <div className="flex gap-4 lg:gap-6 items-center">
          <a href="#" className="text-[#FF4D5A] hover:text-[#E63946] dark:hover:text-white transition-colors hidden md:inline">
            Revendez<span className="hidden lg:inline"> vos jeux</span>
          </a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors hidden lg:inline">
            Planning des foires
          </a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3" /> +33 6 80 41 76 56
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
