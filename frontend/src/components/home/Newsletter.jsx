import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accepted && email) {
      // Handle subscription
      console.log('Subscribed:', email);
    }
  };

  return (
    <section className="bg-[#1a1a1a] dark:bg-gradient-to-r dark:from-[#111827] dark:to-[#1f2937] border border-slate-800 dark:border-white/5 rounded-[3rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl mt-12 mb-12">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3rem]">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#c000ff]/20 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#00439C]/20 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16">
        {/* Left Side: Title */}
        <div className="lg:w-5/12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black uppercase italic text-white leading-tight drop-shadow-md">
            Inscrivez-vous pour<br />
            recevoir les<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">informations et offres spéciales</span>
          </h2>
        </div>
        
        {/* Right Side: Form */}
        <div className="lg:w-7/12 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Input & Button Group */}
            <div className="flex flex-col sm:flex-row gap-0 rounded-3xl sm:rounded-full overflow-hidden shadow-lg border border-white/20 focus-within:border-[#c000ff]/60 transition-colors">
              <input 
                type="email" 
                placeholder="VOTRE ADRESSE E-MAIL" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow bg-white/5 backdrop-blur-md text-white placeholder:text-slate-400 px-6 py-4 sm:py-5 outline-none font-bold uppercase tracking-wider text-sm sm:text-base transition-colors focus:bg-white/10"
              />
              <button 
                type="submit"
                disabled={!accepted || !email}
                className="bg-[#2D8C96] hover:bg-[#247078] text-white px-8 py-4 sm:py-5 font-bold uppercase tracking-widest text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-inner"
              >
                S'abonner
              </button>
            </div>
            
            {/* Disclaimer Text */}
            <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
              Vous pouvez vous désinscrire à tout moment. Vous trouverez pour cela nos informations de contact dans les conditions d'utilisation du site.
            </p>
            
            {/* Checkbox & RGPD */}
            <label className="flex items-start gap-4 mt-4 cursor-pointer group">
              <div className="relative flex-shrink-0 mt-0.5">
                <input 
                  type="checkbox" 
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  required
                  className="peer sr-only"
                />
                <div className="w-5 h-5 border-2 border-slate-500 rounded-full bg-black/20 peer-checked:bg-[#c000ff] peer-checked:border-[#c000ff] transition-colors flex items-center justify-center">
                  <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span className="text-xs text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                J'accepte que les informations recueillies sur ce formulaire soient enregistrées dans un fichier informatisé par Discount-Game.fr pour des envois commerciaux et marketing personnalisés. Elles sont conservées pendant au maximum 3 ans. Conformément à la loi informatique et libertés, vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en nous contactant.
              </span>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
