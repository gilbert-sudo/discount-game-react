import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Mail, Lock, X, MoveRight, Eye, EyeOff } from 'lucide-react';

const LoginModal = () => {
  const { isLoginModalOpen, closeLoginModal, openSignupModal, openForgotPasswordModal } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isLoginModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoginModalOpen]);

  if (!isLoginModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 dark:bg-[#1A2530]/80 animate-backdrop-fade"
        onClick={closeLoginModal}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[850px] bg-white dark:bg-dark-bg rounded-[3rem] shadow-2xl overflow-hidden animate-modal-pop border border-slate-100 dark:border-white/10 flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button 
          onClick={closeLoginModal}
          className="absolute top-5 right-5 p-2 bg-slate-100 dark:bg-dark-hover hover:bg-slate-200 dark:hover:bg-[#435A73] text-slate-500 dark:text-slate-400 rounded-full transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Entertainment Image */}
        <div className="hidden md:block w-1/2 relative bg-slate-900 overflow-hidden">
          <img 
            src="/entertainment_shop.jpg" 
            alt="Entertainment Media" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-10">
            <div>
              <h3 className="text-white font-display font-bold text-3xl mb-2">Votre univers divertissement</h3>
              <p className="text-slate-300 text-sm">
                Connectez-vous pour profiter des meilleures offres sur les jeux vidéo, films Blu-ray/DVD, et la musique.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">Bon retour !</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Connectez-vous pour accéder à vos offres.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              {/* Email Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#FF4D5A] transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-dark-card border-2 border-transparent focus:border-[#FF4D5A]/20 dark:focus:border-[#FF4D5A]/30 rounded-full text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-dark-bg outline-none transition-all shadow-sm dark:shadow-none"
                  placeholder="Adresse e-mail"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#FF4D5A] transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="block w-full pl-11 pr-12 py-3.5 bg-slate-50 dark:bg-dark-card border-2 border-transparent focus:border-[#FF4D5A]/20 dark:focus:border-[#FF4D5A]/30 rounded-full text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-dark-bg outline-none transition-all shadow-sm dark:shadow-none"
                  placeholder="Mot de passe"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-[#FF4D5A] transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer w-4.5 h-4.5 appearance-none rounded-full border-2 border-slate-300 dark:border-slate-600 checked:bg-[#FF4D5A] checked:border-[#FF4D5A] focus:outline-none focus:ring-2 focus:ring-[#FF4D5A]/20 transition-all cursor-pointer bg-white dark:bg-dark-card" />
                  <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 14" fill="none">
                    <path d="M3 8L6 11L11 3.5" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">Se souvenir de moi</span>
              </label>
              <button type="button" onClick={openForgotPasswordModal} className="text-sm font-medium text-[#FF4D5A] hover:text-[#E63946] transition-colors">
                Mot de passe oublié ?
              </button>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold py-3.5 px-4 rounded-full shadow-lg shadow-[#FF4D5A]/30 hover:shadow-[#FF4D5A]/50 transition-all flex items-center justify-center gap-2 group"
            >
              Se connecter
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            Nouveau sur Discount Game ?{' '}
            <button type="button" onClick={openSignupModal} className="font-bold text-slate-900 dark:text-white hover:text-[#FF4D5A] dark:hover:text-[#FF4D5A] transition-colors">
              Créer un compte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
