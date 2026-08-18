import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSignupModal, openLoginModal } from '../../store/slices/authSlice';
import { Mail, Lock, X, MoveRight, User, Calendar, Tag, Eye, EyeOff } from 'lucide-react';

const SignupModal = () => {
  const dispatch = useDispatch();
  const isSignupModalOpen = useSelector((state) => state.auth.isSignupModalOpen);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isSignupModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSignupModalOpen]);

  if (!isSignupModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900/40 dark:bg-[#1A2530]/80 animate-backdrop-fade" onClick={() => dispatch(closeSignupModal())} />

      <div className="relative w-full max-w-[950px] max-h-[95vh] bg-white dark:bg-dark-bg rounded-[3rem] shadow-2xl overflow-hidden animate-modal-pop border border-slate-100 dark:border-white/10 flex flex-col md:flex-row">
        
        <button onClick={() => dispatch(closeSignupModal())} className="absolute top-5 right-5 p-2 bg-slate-100 dark:bg-dark-hover hover:bg-slate-200 dark:hover:bg-[#435A73] text-slate-500 dark:text-slate-400 rounded-full transition-colors z-20">
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Entertainment Image */}
        <div className="hidden md:block w-2/5 relative bg-slate-900 overflow-hidden shrink-0">
          <img src="/entertainment_shop.jpg" alt="Entertainment Media" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8 lg:p-10">
            <div>
              <h3 className="text-white font-display font-bold text-3xl mb-2">Rejoignez-nous</h3>
              <p className="text-slate-300 text-sm">
                Créez votre compte pour accéder aux meilleures offres sur vos divertissements préférés.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <div className="w-full md:w-3/5 p-6 sm:p-8 lg:p-10 flex flex-col overflow-y-auto no-scrollbar relative">
          <div className="mb-6">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">Créer votre compte</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Vous avez déjà un compte ?{' '}
              <button type="button" onClick={() => dispatch(openLoginModal())} className="font-bold text-[#FF4D5A] hover:text-[#E63946] transition-colors">
                Connectez-vous !
              </button>
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Civilité */}
            <div className="flex items-center gap-6">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Civilité :</span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="civilite" value="M" className="w-4.5 h-4.5 appearance-none rounded-full border-2 border-slate-300 dark:border-slate-600 checked:border-[5px] checked:border-[#FF4D5A] transition-all cursor-pointer bg-white dark:bg-dark-card" defaultChecked />
                <span className="text-sm text-slate-600 dark:text-slate-400">M</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="civilite" value="Mme" className="w-4.5 h-4.5 appearance-none rounded-full border-2 border-slate-300 dark:border-slate-600 checked:border-[5px] checked:border-[#FF4D5A] transition-all cursor-pointer bg-white dark:bg-dark-card" />
                <span className="text-sm text-slate-600 dark:text-slate-400">Mme</span>
              </label>
            </div>

            {/* Name / Last Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#FF4D5A] transition-colors">
                  <User className="h-5 w-5" />
                </div>
                <input type="text" className="block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-dark-card border-2 border-transparent focus:border-[#FF4D5A]/20 dark:focus:border-[#FF4D5A]/30 rounded-full text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-dark-bg outline-none transition-all shadow-sm dark:shadow-none" placeholder="Prénom" required />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#FF4D5A] transition-colors">
                  <User className="h-5 w-5" />
                </div>
                <input type="text" className="block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-dark-card border-2 border-transparent focus:border-[#FF4D5A]/20 dark:focus:border-[#FF4D5A]/30 rounded-full text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-dark-bg outline-none transition-all shadow-sm dark:shadow-none" placeholder="Nom" required />
              </div>
            </div>

            {/* Email */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#FF4D5A] transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <input type="email" className="block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-dark-card border-2 border-transparent focus:border-[#FF4D5A]/20 dark:focus:border-[#FF4D5A]/30 rounded-full text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-dark-bg outline-none transition-all shadow-sm dark:shadow-none" placeholder="Adresse e-mail" required />
            </div>

            {/* Password */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#FF4D5A] transition-colors">
                <Lock className="h-5 w-5" />
              </div>
              <input type={showPassword ? "text" : "password"} className="block w-full pl-11 pr-12 py-3 bg-slate-50 dark:bg-dark-card border-2 border-transparent focus:border-[#FF4D5A]/20 dark:focus:border-[#FF4D5A]/30 rounded-full text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-dark-bg outline-none transition-all shadow-sm dark:shadow-none" placeholder="Mot de passe" required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-[#FF4D5A] transition-colors">
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            {/* Birthdate & Sponsor */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#FF4D5A] transition-colors">
                  <Calendar className="h-5 w-5" />
                </div>
                <input 
                  type="text" 
                  onFocus={(e) => (e.target.type = 'date')} 
                  onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }} 
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-dark-card border-2 border-transparent focus:border-[#FF4D5A]/20 dark:focus:border-[#FF4D5A]/30 rounded-full text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-dark-bg outline-none transition-all shadow-sm dark:shadow-none" 
                  placeholder="Date nais. (Facultatif)" 
                />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#FF4D5A] transition-colors">
                  <Tag className="h-5 w-5" />
                </div>
                <input type="text" className="block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-dark-card border-2 border-transparent focus:border-[#FF4D5A]/20 dark:focus:border-[#FF4D5A]/30 rounded-full text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-dark-bg outline-none transition-all shadow-sm dark:shadow-none" placeholder="Sponsor (Facultatif)" />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 mt-6">
              {[
                { id: 'partner', label: 'Recevoir les offres de nos partenaires' },
                { id: 'newsletter', label: 'Recevoir notre newsletter. Vous pouvez vous désinscrire à tout moment.' },
                { id: 'privacy', label: "J'accepte la politique de confidentialité et l'utilisation de mes données." },
                { id: 'terms', label: "J'accepte les conditions générales de vente." },
              ].map((item) => (
                <label key={item.id} className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                    <input type="checkbox" required={item.id === 'terms' || item.id === 'privacy'} className="peer w-4.5 h-4.5 appearance-none rounded-full border-2 border-slate-300 dark:border-slate-600 checked:bg-[#FF4D5A] checked:border-[#FF4D5A] focus:outline-none focus:ring-2 focus:ring-[#FF4D5A]/20 transition-all cursor-pointer bg-white dark:bg-dark-card" />
                    <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 14" fill="none">
                      <path d="M3 8L6 11L11 3.5" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-tight group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{item.label}</span>
                </label>
              ))}
            </div>

            <button type="submit" className="w-full mt-6 bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold py-3.5 px-4 rounded-full shadow-lg shadow-[#FF4D5A]/30 hover:shadow-[#FF4D5A]/50 transition-all flex items-center justify-center gap-2 group">
              S'inscrire
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
