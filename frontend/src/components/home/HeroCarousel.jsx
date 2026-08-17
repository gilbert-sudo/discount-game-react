import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Gamepad2, Crown, Gamepad, ShieldCheck, Headphones, Truck, ThumbsUp, ShoppingCart, Calendar, Megaphone, Star, MessageSquare, Gift, ArrowRight, Check, Award, PenTool, Lock, Euro, Mic, Heart, Trophy } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[450px] sm:h-[400px] lg:h-[550px] rounded-[2rem] overflow-hidden group shadow-lg dark:shadow-none border border-slate-200 dark:border-transparent">
      <div 
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        
        {/* Slide 1: Jeux Vidéo */}
        <div className="min-w-full h-full relative shrink-0 bg-[#0B0F19] overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Slide 1 bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/80 to-transparent"></div>
          
          <div className="absolute inset-0 z-10 p-4 sm:p-8 lg:p-16 flex flex-col justify-center max-w-5xl">
            <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 lg:ml-32 scale-75 sm:scale-100 origin-left">
              <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)] bg-[#0B0F19]/90 text-center leading-tight transform -rotate-12">
                <span className="text-white font-bold text-xs">GRAND<br/>CHOIX</span>
                <span className="text-yellow-400 font-bold text-xs">PETITS<br/>PRIX !</span>
              </div>
              <div className="border-[3px] border-white rounded-xl px-5 py-2 transform rotate-6 bg-black/60 backdrop-blur-sm">
                <span className="text-white font-black text-xl uppercase tracking-wider">À Petits Prix !</span>
              </div>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-display font-black uppercase italic leading-[0.8] mb-1 text-white tracking-tighter drop-shadow-2xl lg:ml-32">
              Jeux Vidéo
            </h2>
            <div className="relative w-fit lg:ml-32">
              <div className="absolute inset-0 bg-yellow-400/20 blur-xl"></div>
              <h3 className="relative text-3xl sm:text-5xl lg:text-[5.5rem] font-display font-black uppercase italic leading-[0.9] mb-4 sm:mb-8 text-yellow-400 tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                À Petit Prix !
              </h3>
            </div>
            
            <a href="#" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all font-bold uppercase tracking-widest px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm rounded-full w-fit flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.5)] lg:ml-32 z-20">
              Découvrir le catalogue <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-6">
            <div className="w-28 h-28 rounded-full border-2 border-white flex flex-col items-center justify-center bg-black backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <Crown className="w-7 h-7 text-white mb-1" />
              <span className="text-white font-black text-2xl leading-none">D.G</span>
              <span className="text-blue-400 font-bold text-[11px] uppercase tracking-wider">discount-</span>
              <span className="text-white font-bold text-[11px] uppercase tracking-wider">game.fr</span>
            </div>
            <Gamepad className="w-24 h-24 text-blue-400 filter drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
          </div>

          <div className="absolute bottom-0 left-0 w-full bg-[#06090F]/95 backdrop-blur-xl border-t border-white/10 z-20 py-2 sm:py-3 px-2 sm:px-4 lg:px-12 flex flex-wrap items-center justify-center lg:justify-between gap-2 sm:gap-6 pb-6 sm:pb-3 scale-90 sm:scale-100 origin-bottom">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-blue-400/50 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-black text-sm uppercase">Paiement Sécurisé</div>
                <div className="text-slate-400 text-xs">100% sécurisé</div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-purple-400/50 flex items-center justify-center">
                <Headphones className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-white font-black text-sm uppercase">Service Client Français</div>
                <div className="text-slate-400 text-xs">à votre écoute</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-green-400/50 flex items-center justify-center">
                <Truck className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-white font-black text-sm uppercase">Expédition Rapide</div>
                <div className="text-slate-400 text-xs">sous 24/48h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2: Blu-Ray Offert */}
        <div className="min-w-full h-full relative shrink-0 bg-[#0B0F19] overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Slide 2 bg" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-blue-900/60 to-red-900/80"></div>
          
          <div className="absolute inset-0 z-10 p-4 sm:p-6 lg:p-12 flex flex-col justify-between max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-2 sm:gap-6 mt-2 sm:mt-4 scale-90 sm:scale-100 origin-top">
              
              <div className="bg-gradient-to-b from-blue-900 to-[#0B0F19] border-2 border-blue-400 rounded-xl p-4 flex items-center gap-4 shadow-[0_0_20px_rgba(59,130,246,0.5)] transform -rotate-2">
                <div className="bg-white text-blue-600 rounded-full p-3"><ThumbsUp className="w-8 h-8 fill-current" /></div>
                <div className="flex flex-col">
                  <span className="text-white font-black text-2xl uppercase italic leading-none mb-1">Postez<br/>un avis</span>
                  <span className="text-white text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded">sur Trustpilot ou Google</span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="text-white font-bold tracking-widest uppercase mb-1 text-xs sm:text-base">Et recevez un</span>
                <h2 className="text-4xl sm:text-6xl lg:text-9xl font-display font-black uppercase italic leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] filter">
                  Blu-Ray
                </h2>
                <h2 className="text-4xl sm:text-6xl lg:text-8xl font-display font-black uppercase italic leading-[0.9] text-white drop-shadow-[0_5px_5px_rgba(220,38,38,0.8)] mb-2 relative">
                  <span className="absolute inset-0 text-red-600 blur-[4px] -z-10">Offert !</span>
                  Offert !
                </h2>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 bg-black/80 rounded-full border border-white/20 px-4 py-1.5"><ShoppingCart className="text-white w-4 h-4" /><span className="text-yellow-400 font-bold text-xs">DÈS 50€ D'ACHAT</span></div>
                  <div className="flex items-center gap-2 bg-black/80 rounded-full border border-white/20 px-4 py-1.5"><Calendar className="text-white w-4 h-4" /><span className="text-yellow-400 font-bold text-xs">DU 10 AU 17 AOÛT</span></div>
                </div>
              </div>

              <div className="hidden lg:flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.5)] bg-[#0B0F19]/90 text-center leading-tight">
                <Megaphone className="text-red-500 w-6 h-6 mb-1" />
                <span className="text-white font-bold text-[10px]">VOTRE AVIS<br/>NOUS AIDE,</span>
                <span className="text-yellow-400 font-black text-[10px]">VOTRE CADEAU<br/>VOUS RÉCOMPENSE !</span>
                <div className="flex text-yellow-400 mt-1"><Star className="w-2 h-2 fill-current" /><Star className="w-2 h-2 fill-current" /><Star className="w-2 h-2 fill-current" /><Star className="w-2 h-2 fill-current" /><Star className="w-2 h-2 fill-current" /></div>
              </div>
            </div>

            <div className="w-full bg-white rounded-3xl lg:rounded-full shadow-2xl p-1.5 flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-2 border border-blue-200 mb-4 z-20">
              <div className="flex items-center gap-2 px-2">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                <MessageSquare className="text-blue-600 w-5 h-5" />
                <div className="text-[10px] font-bold leading-tight uppercase"><span className="text-blue-700 text-xs">Postez un avis</span><br/><span className="text-slate-500 font-medium">sur Trustpilot/Google</span></div>
              </div>
              <ArrowRight className="text-slate-300 w-4 h-4 hidden lg:block" />
              <div className="flex items-center gap-2 px-2">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                <ShoppingCart className="text-blue-600 w-5 h-5" />
                <div className="text-[10px] font-bold leading-tight uppercase"><span className="text-blue-700 text-xs">Passez Commande</span><br/><span className="text-slate-500 font-medium">minimum 50€*</span></div>
              </div>
              <ArrowRight className="text-slate-300 w-4 h-4 hidden lg:block" />
              <div className="flex items-center gap-2 px-2">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                <Gift className="text-blue-600 w-5 h-5" />
                <div className="text-[10px] font-bold leading-tight uppercase"><span className="text-blue-700 text-xs">Recevez un Blu-Ray*</span><br/><span className="text-slate-500 font-medium">Parmi la sélection</span></div>
              </div>
              <div className="bg-red-600 text-white px-4 py-1.5 rounded-full text-center hidden xl:block shadow-inner ml-auto">
                <div className="font-black italic uppercase text-xs leading-tight">Votre avis fait la différence,</div>
                <div className="text-yellow-300 font-black italic uppercase text-xs">Votre cadeau aussi !</div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full bg-[#06090F]/95 backdrop-blur-xl border-t border-white/10 z-20 py-3 px-4 lg:px-12 flex flex-wrap items-center justify-center gap-8 pb-8 lg:pb-3">
            <div className="flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-blue-500" /><div className="text-white font-black text-sm uppercase leading-tight">100%<br/>Satisfaction</div></div>
            <div className="flex items-center gap-3"><Lock className="w-6 h-6 text-blue-500" /><div className="text-white font-black text-sm uppercase leading-tight">Paiement<br/>Sécurisé</div></div>
            <div className="flex items-center gap-3"><Truck className="w-6 h-6 text-blue-500" /><div className="text-white font-black text-sm uppercase leading-tight">Expédition<br/>Rapide</div></div>
            <div className="text-[9px] text-slate-500 max-w-xl hidden lg:block">*Hors frais de port. Offre valable une seule fois par client pendant la période indiquée. Dans la limite des stocks disponibles. Un seul Blu-ray offert par commande éligible.</div>
          </div>
        </div>

        {/* Slide 3: GTA VI */}
        <div className="min-w-full h-full relative shrink-0 bg-slate-900 overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="GTA VI bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/80 to-transparent"></div>
          
          <div className="absolute inset-0 z-10 p-4 sm:p-6 lg:p-12 flex flex-col justify-between max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row justify-between w-full h-full">
              <div className="flex flex-col justify-center h-full max-w-xl relative mt-[-20px] sm:mt-[-40px]">
                <span className="text-white font-bold tracking-widest uppercase mb-1 ml-2 text-sm sm:text-xl drop-shadow">PRÊT POUR</span>
                <h2 className="text-5xl sm:text-7xl lg:text-[8rem] font-display font-black uppercase italic leading-[0.8] mb-2 relative group-hover:scale-105 transition-transform duration-500">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-pink-200 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]">GTA</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-t from-pink-500 to-purple-500">VI</span>
                  <span className="text-pink-500">?</span>
                </h2>
                <div className="bg-pink-600 text-white font-black italic uppercase px-6 py-2 rounded shadow-lg transform -skew-x-12 w-fit mb-8 ml-2">
                  <span className="transform skew-x-12 block">Équipez-vous comme un pro !</span>
                </div>
              </div>
            </div>
            
            <div className="w-full bg-black/90 border border-yellow-500/50 rounded-xl p-2 flex flex-col lg:flex-row items-center gap-2 sm:gap-4 shadow-[0_0_30px_rgba(0,0,0,0.8)] mb-6 sm:mb-8 z-20 scale-90 sm:scale-100 origin-bottom">
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black p-3 rounded-lg flex items-center gap-3 shrink-0">
                <div className="bg-black text-yellow-400 rounded-full p-1"><Check className="w-5 h-5" /></div>
                <div className="font-black uppercase text-xs leading-tight pr-4">Remboursement de la différence<br/><span className="text-[10px]">Si vous trouvez moins cher !*</span></div>
              </div>
              
              <div className="flex items-center justify-around w-full gap-2 px-2 flex-wrap">
                <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full border border-purple-500/50 flex items-center justify-center"><Headphones className="w-4 h-4 text-white" /></div><div className="text-white text-[9px] font-bold uppercase leading-tight">Son immersif<br/><span className="text-purple-400 font-normal capitalize">Vivez chaque détail</span></div></div>
                <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full border border-blue-500/50 flex items-center justify-center"><Mic className="w-4 h-4 text-white" /></div><div className="text-white text-[9px] font-bold uppercase leading-tight">Micro intégré<br/><span className="text-blue-400 font-normal capitalize">Communication claire</span></div></div>
                <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full border border-pink-500/50 flex items-center justify-center"><Gamepad2 className="w-4 h-4 text-white" /></div><div className="text-white text-[9px] font-bold uppercase leading-tight">Compatibles<br/><span className="text-pink-400 font-normal capitalize">PC - PS - Xbox - Switch</span></div></div>
                <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full border border-yellow-500/50 flex items-center justify-center"><Euro className="w-4 h-4 text-white" /></div><div className="text-white text-[9px] font-bold uppercase leading-tight">Petits prix<br/><span className="text-yellow-400 font-normal capitalize">Le top du gaming !</span></div></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full bg-white z-20 py-2 px-4 lg:px-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2"><Award className="w-6 h-6 text-[#0B0F19]" /><div className="text-[#0B0F19] font-black text-xs uppercase leading-tight">Top Fiabilité<br/><span className="text-blue-600">discount-game.fr</span></div></div>
              <div className="flex items-center gap-2"><ThumbsUp className="w-6 h-6 text-[#0B0F19]" /><div className="text-[#0B0F19] font-black text-xs uppercase leading-tight">Postez un avis<br/><span className="text-blue-600">= 10 %</span></div></div>
              <div className="flex items-center gap-2 hidden lg:flex"><img src="https://flagcdn.com/w20/fr.png" alt="FR" className="w-5 h-auto rounded" /><div className="text-[#0B0F19] font-black text-[10px] uppercase leading-tight">Service Client<br/>Français</div></div>
              <div className="flex items-center gap-2 hidden lg:flex"><Lock className="w-5 h-5 text-[#0B0F19]" /><div className="text-[#0B0F19] font-black text-[10px] uppercase leading-tight">Paiement<br/>Sécurisé</div></div>
            </div>
            <div className="bg-[#0B0F19] text-white rounded-full pl-5 pr-1.5 py-1.5 flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform border border-white/5 shadow-[0_0_20px_rgba(236,72,153,0.15)] group">
              <div className="flex items-center gap-2">
                 <span className="font-bold text-[10px] uppercase tracking-widest text-gray-200 mt-1">Prêt pour</span>
                 <span className="font-black italic text-lg leading-none tracking-tighter">
                   <span className="text-white drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">GTA</span>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b964d8] to-[#ea3c7c] ml-1">VI ?</span>
                 </span>
              </div>
              <div className="bg-[#da2969] transform -skew-x-12 px-4 py-1.5 shadow-md rounded-sm group-hover:bg-[#eb3375] transition-colors">
                <span className="transform skew-x-12 block font-black italic uppercase text-[10px] text-white tracking-wide">Équipez-vous comme un pro !</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4: Tirage au sort */}
        <div className="min-w-full h-full relative shrink-0 bg-[#0B0F19] overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Tirage bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0B0F19]/80 to-[#0B0F19]/90"></div>
          
          <div className="absolute inset-0 z-10 p-4 sm:p-6 lg:p-12 flex flex-col justify-between max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row justify-end items-center w-full h-full pr-4 sm:pr-8">
              <div className="max-w-2xl flex flex-col items-end text-right relative mt-[-10px] sm:mt-[-20px]">
                <div className="bg-red-600 text-white font-black italic uppercase px-4 sm:px-6 py-1.5 sm:py-2 rounded-xl shadow-lg transform -skew-x-12 w-fit mb-4 sm:mb-6 border-2 border-white/20 self-end relative z-20 text-xs sm:text-base">
                  <span className="transform skew-x-12 block flex items-center gap-2"><Gift className="w-4 h-4 sm:w-5 sm:h-5" /> Tirage au sort mensuel</span>
                </div>

                <h2 className="text-4xl sm:text-6xl lg:text-[6.5rem] font-display font-black uppercase leading-[0.85] mb-2 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                  POSTEZ <br/><span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-300 to-blue-600">UN AVIS</span>
                </h2>
                <div className="bg-blue-700 text-white font-black uppercase px-6 py-2 rounded-full mb-8 shadow-lg">
                  Sur un site dédié
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-blue-400/30 rounded-xl p-4 shadow-2xl flex items-center gap-3 mb-4 w-fit ml-auto">
                  <div className="bg-blue-600 rounded-full p-1.5 shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.8)]"><Check className="text-white w-4 h-4" /></div>
                  <div className="text-left">
                    <div className="text-white font-black uppercase text-sm leading-tight mb-0.5">Votre avis valide votre participation au tirage !</div>
                    <div className="text-blue-200 font-bold text-xs">Tentez de gagner des <span className="text-yellow-400">produits exclusifs !</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full bg-[#0B0F19]/95 backdrop-blur-md border-t border-blue-500/20 z-20 py-3 px-4 lg:px-8 flex flex-wrap items-center justify-around gap-4 pb-8 lg:pb-3 shadow-[0_-10px_30px_rgba(37,99,235,0.1)]">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600/20 p-2 rounded-full"><ShieldCheck className="w-5 h-5 text-blue-400" /></div>
              <div className="text-white font-black text-[10px] uppercase leading-tight">Vos avis nous aident<br/><span className="text-blue-400">à nous améliorer</span></div>
            </div>
            <div className="flex items-center gap-3 hidden sm:flex">
              <div className="bg-red-600/20 p-2 rounded-full"><Heart className="w-5 h-5 text-red-400" /></div>
              <div className="text-white font-black text-[10px] uppercase leading-tight">Partagez votre<br/><span className="text-red-400">expérience</span></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-yellow-500/20 p-2 rounded-full"><Trophy className="w-5 h-5 text-yellow-400" /></div>
              <div className="text-white font-black text-[10px] uppercase leading-tight">Tentez de gagner<br/><span className="text-yellow-400">Tous les mois</span></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-purple-600/20 p-2 rounded-full"><PenTool className="w-5 h-5 text-purple-400" /></div>
              <div className="text-white font-black text-[10px] uppercase leading-tight">Votre avis compte,<br/><span className="text-purple-400">Merci pour votre soutien !</span></div>
            </div>
          </div>
        </div>

        {/* Slide 5: 10% Reduction */}
        <div className="min-w-full h-full relative shrink-0 bg-[#0B0F19] overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Reduction bg" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent"></div>
          
          <div className="absolute inset-0 z-10 p-4 sm:p-6 lg:p-12 flex flex-col justify-center items-center text-center max-w-7xl mx-auto w-full">
            <h2 className="text-3xl sm:text-5xl lg:text-[5rem] font-display font-black uppercase italic leading-[0.85] mb-2 text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.9)] filter mt-[-20px] sm:mt-[-40px]">
              20 Blu-Ray <span className="text-xl sm:text-3xl lg:text-4xl text-slate-300 mx-2">OU</span> DVD
            </h2>
            <div className="bg-red-600 text-white font-black uppercase italic px-4 sm:px-6 py-1 sm:py-2 transform -skew-x-12 w-fit mb-4 sm:mb-6 shadow-[0_0_20px_rgba(220,38,38,0.6)]">
              <span className="transform skew-x-12 block text-2xl sm:text-4xl lg:text-5xl leading-none">= 10% DE RÉDUCTION !</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-black/60 px-8 py-4 rounded-full backdrop-blur-md border border-white/10 mb-8 shadow-2xl">
              <span className="text-white font-black text-xl uppercase tracking-wide">À partir de 200€ d'achat</span>
              <div className="w-2 h-2 rounded-full bg-red-500 hidden sm:block"></div>
              <span className="text-[#c000ff] font-black text-xl uppercase tracking-widest drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">Frais de port offerts !</span>
            </div>

            <div className="bg-white/10 px-8 py-3 rounded-3xl sm:rounded-full border border-white/20 backdrop-blur-md flex flex-col sm:flex-row items-center gap-4 shadow-lg">
              <span className="text-white font-bold uppercase tracking-widest">Avec le code :</span>
              <div className="flex items-center gap-2">
                <span className="bg-blue-600 text-white font-black text-xl px-6 py-1.5 rounded-full shadow-inner">BLU-RAY</span>
                <span className="text-slate-400 font-bold uppercase mx-1">ou</span>
                <span className="bg-red-600 text-white font-black text-xl px-6 py-1.5 rounded-full shadow-inner">DVD</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full bg-[#06090F]/95 backdrop-blur-xl border-t border-white/10 z-20 py-3 px-4 lg:px-8 flex flex-wrap items-center justify-around gap-4 pb-8 lg:pb-3">
            <div className="flex items-center gap-3"><div className="bg-blue-600/20 p-2 rounded-full"><ShieldCheck className="w-5 h-5 text-blue-400" /></div><div className="text-white font-black text-[10px] uppercase leading-tight">Produits<br/><span className="text-blue-400">100% Neufs</span></div></div>
            <div className="flex items-center gap-3 hidden lg:flex"><div className="bg-green-600/20 p-2 rounded-full"><Lock className="w-5 h-5 text-green-400" /></div><div className="text-white font-black text-[10px] uppercase leading-tight">Paiement sécurisé avec<br/><span className="text-green-400">CB - PayPal</span></div></div>
            <div className="flex items-center gap-3"><div className="bg-yellow-500/20 p-2 rounded-full"><Euro className="w-5 h-5 text-yellow-400" /></div><div className="text-white font-black text-[10px] uppercase leading-tight">Si vous trouvez moins cher<br/><span className="text-yellow-400">Différence remboursée</span></div></div>
            <div className="flex items-center gap-3"><div className="bg-purple-600/20 p-2 rounded-full"><Headphones className="w-5 h-5 text-purple-400" /></div><div className="text-white font-black text-[10px] uppercase leading-tight">Service Client<br/><span className="text-purple-400">Français</span></div></div>
          </div>
        </div>

      </div>
      
      {/* Controls */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20 z-30">
        <ChevronLeft className="w-8 h-8 ml-[-2px]" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20 z-30">
        <ChevronRight className="w-8 h-8 mr-[-2px]" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${currentSlide === index ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/60'}`} 
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
