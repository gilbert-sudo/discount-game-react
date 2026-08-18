import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeForgotPasswordModal, openLoginModal } from '../../store/slices/authSlice';
import { Mail, X, MoveRight, ArrowLeft } from 'lucide-react';

const ForgotPasswordModal = () => {
  const dispatch = useDispatch();
  const isForgotPasswordModalOpen = useSelector((state) => state.auth.isForgotPasswordModalOpen);

  useEffect(() => {
    if (isForgotPasswordModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isForgotPasswordModalOpen]);

  if (!isForgotPasswordModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/40 dark:bg-[#1A2530]/80 animate-backdrop-fade" onClick={() => dispatch(closeForgotPasswordModal())} />

      {/* Modal */}
      <div className="relative w-full max-w-[850px] bg-white dark:bg-dark-bg rounded-[3rem] shadow-2xl overflow-hidden animate-modal-pop border border-slate-100 dark:border-white/10 flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button onClick={() => dispatch(closeForgotPasswordModal())} className="absolute top-5 right-5 p-2 bg-slate-100 dark:bg-dark-hover hover:bg-slate-200 dark:hover:bg-[#435A73] text-slate-500 dark:text-slate-400 rounded-full transition-colors z-20">
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Image */}
        <div className="hidden md:block w-1/2 relative bg-slate-900 overflow-hidden">
          <img src="/entertainment_shop.jpg" alt="Entertainment Media" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-10">
            <div>
              <h3 className="text-white font-display font-bold text-3xl mb-2">Pas de panique !</h3>
              <p className="text-slate-300 text-sm">
                Récupérez votre compte facilement pour continuer à profiter de nos offres exclusives.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">Mot de passe oublié ?</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Veuillez renseigner l'adresse e-mail que vous avez utilisée à la création de votre compte. Vous recevrez un lien temporaire pour réinitialiser votre mot de passe.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#FF4D5A] transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <input type="email" className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-dark-card border-2 border-transparent focus:border-[#FF4D5A]/20 dark:focus:border-[#FF4D5A]/30 rounded-full text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-dark-bg outline-none transition-all shadow-sm dark:shadow-none" placeholder="Adresse e-mail" required />
            </div>

            <button type="submit" className="w-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold py-3.5 px-4 rounded-full shadow-lg shadow-[#FF4D5A]/30 hover:shadow-[#FF4D5A]/50 transition-all flex items-center justify-center gap-2 group">
              Envoyer un lien de réinitialisation
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center text-sm">
            <button type="button" onClick={() => dispatch(openLoginModal())} className="font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Retour à la connexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
