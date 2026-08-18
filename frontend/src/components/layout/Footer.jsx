import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-nav border-t border-slate-200 dark:border-white/5 pt-16 pb-8 mt-12 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Discount Game" className="h-12 sm:h-16 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-2xl tracking-[0.1em] font-display font-bold leading-none text-slate-900 dark:text-white">
                  DISCOUNT<span className="text-[#FF4D5A]">GAME</span>
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 max-w-sm">
              Discount Game vous propose une large sélection de Blu Ray pas cher, DVD et JEUX VIDÉOS pour PS4, Xbox, Wii, PS3, Nintendo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-slate-100 dark:bg-dark-hover flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#E63946] dark:hover:text-[#FF4D5A] hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-slate-100 dark:bg-dark-hover flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#E63946] dark:hover:text-[#FF4D5A] hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-slate-100 dark:bg-dark-hover flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#E63946] dark:hover:text-[#FF4D5A] hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Acheteurs</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-[#E63946] dark:hover:text-[#FF4D5A] transition-colors">Protection Acheteur</a></li>
              <li><a href="#" className="hover:text-[#E63946] dark:hover:text-[#FF4D5A] transition-colors">Livraison</a></li>
              <li><a href="#" className="hover:text-[#E63946] dark:hover:text-[#FF4D5A] transition-colors">Suivi de commande</a></li>
              <li><a href="#" className="hover:text-[#E63946] dark:hover:text-[#FF4D5A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Vendeurs</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-[#E63946] dark:hover:text-[#FF4D5A] transition-colors">Comment vendre</a></li>
              <li><a href="#" className="hover:text-[#E63946] dark:hover:text-[#FF4D5A] transition-colors">Conditions de rachat</a></li>
              <li><a href="#" className="hover:text-[#E63946] dark:hover:text-[#FF4D5A] transition-colors">Tableau de bord</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Discount Game</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-[#E63946] dark:hover:text-[#FF4D5A] transition-colors">Qui sommes-nous ?</a></li>
              <li><a href="#" className="hover:text-[#E63946] dark:hover:text-[#FF4D5A] transition-colors">S.A.V</a></li>
              <li><a href="#" className="hover:text-[#E63946] dark:hover:text-[#FF4D5A] transition-colors">Mentions légales & CGV</a></li>
              <li><a href="#" className="hover:text-[#E63946] dark:hover:text-[#FF4D5A] transition-colors">Nous contacter</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 font-medium">© 2026 Discount-game.fr - 17 route d'Avenay, 14210 ESQUAY NOTRE DAME - France</p>
          <div className="flex items-center gap-4 opacity-80 dark:opacity-50 grayscale">
            <div className="w-12 h-8 bg-slate-200 dark:bg-white rounded-md flex items-center justify-center text-[0.6rem] font-bold text-slate-600 dark:text-black">VISA</div>
            <div className="w-12 h-8 bg-slate-200 dark:bg-white rounded-md flex items-center justify-center text-[0.6rem] font-bold text-slate-600 dark:text-black">MC</div>
            <div className="w-12 h-8 bg-slate-200 dark:bg-white rounded-md flex items-center justify-center text-[0.6rem] font-bold text-slate-600 dark:text-black">AMEX</div>
            <div className="w-12 h-8 bg-slate-200 dark:bg-white rounded-md flex items-center justify-center text-[0.6rem] font-bold text-slate-600 dark:text-black">PAYPAL</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
