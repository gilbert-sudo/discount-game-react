import React from 'react';
import { Map, CalendarDays, Navigation, Calendar, MapPin } from 'lucide-react';

const TradeFairs = () => {
  return (
    <section className="bg-gradient-border rounded-[2.5rem] p-6 sm:p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden shadow-sm dark:shadow-none text-center lg:text-left mt-12 mb-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-right opacity-30 dark:opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-[#111827] dark:via-[#111827]/80 dark:to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-[#c000ff]/10 text-[#c000ff] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-[#c000ff]/20">
          <Map className="w-4 h-4" /> Sur les routes de France
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black uppercase mb-4 text-slate-900 dark:text-white">
          Venez nous rencontrer <br className="hidden sm:block" /><span className="text-gradient">en direct !</span>
        </h2>
        <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 font-medium">
          Retrouvez Discount Game sur les foires et salons de votre région. Découvrez nos produits en personne, échangez avec notre équipe et profitez d'offres exclusives sur notre stand.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <button className="bg-[#0B0F19] dark:bg-white text-white dark:text-[#0B0F19] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#9900cc] dark:hover:bg-[#c000ff] hover:text-white transition-colors shadow-lg flex items-center gap-2">
            <CalendarDays className="w-5 h-5" /> Voir le planning des foires
          </button>
        </div>
      </div>
      <div className="relative z-10 hidden lg:block">
        <div className="bg-white dark:bg-dark-hover border border-slate-200 dark:border-white/10 p-6 rounded-3xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold uppercase tracking-wider text-sm flex items-center text-slate-700 dark:text-slate-300">
              <Navigation className="w-5 h-5 mr-2 text-[#c000ff]" /> Prochain arrêt
            </div>
          </div>
          <div className="text-2xl font-black font-display uppercase mb-2 text-slate-900 dark:text-white">Foire du Geek</div>
          <div className="text-slate-600 dark:text-slate-400 text-sm font-medium flex flex-col gap-2">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#c000ff]" /> Ce week-end</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#c000ff]" /> Expo Center</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeFairs;
