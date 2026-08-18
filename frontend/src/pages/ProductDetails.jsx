import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight, Home, Star, ShoppingCart, Info, 
  Clock, Calendar, User, Users, Disc, Mic, Subtitles, Building2 
} from 'lucide-react';
import TrendingDeals from '../components/home/TrendingDeals';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock data based on the scraped content "Welcome to L.A."
  const product = {
    id: id || "16259",
    title: "Welcome to L.A.",
    price: "3,89 €",
    originalPrice: "5,99 €", // Just for visual flair
    condition: "Nouveau",
    stock: "En stock",
    image: "https://discount-game.fr/19567-large_default/accueil-welcome-to-la-16259.jpg",
    rating: "Tous publics",
    breadcrumbs: [
      { name: "Accueil", path: "/" },
      { name: "Blu Ray", path: "#" },
      { name: "Welcome to L.A.", path: "#" }
    ],
    details: [
      { icon: User, label: "Réalisateur", value: "Alan Rudolph" },
      { icon: Disc, label: "Format", value: "Blu-Ray, PAL" },
      { icon: Clock, label: "Durée", value: "1 heure et 42 minutes" },
      { icon: Calendar, label: "Date de sortie", value: "29 avril 2025" },
      { icon: Users, label: "Acteurs", value: "Geraldine Chaplin, Harvey Keitel, Keith Carradine, Lauren Hutton, Sally Kellerman" },
      { icon: Subtitles, label: "Sous-titres", value: "Français" },
      { icon: Mic, label: "Langue", value: "Anglais (Dolby Digital 2.0), Français (Mono)" },
      { icon: Building2, label: "Studio", value: "BQHL Éditions" },
    ],
    synopsis: "Jeune compositeur installé à Londres depuis trois ans, Carroll Barber revient aux États-Unis à l'initiative de son père, un homme riche qui voudrait le voir lui succéder à la tête de sa gigantesque entreprise laitière. Pas vraiment son intention, celui-ci ne pensant qu'à la musique et à sa contribution à l'album d'une pop star. Mais, plus que tout, Carroll Barber s'intéresse aux femmes. Coureur de jupons pathologique, incapable de se fixer, il séduit toutes celles qui l'approchent : une étudiante, la propriétaire de la villa où il loge, la réceptionniste et la propre maîtresse de son père, une photographe..."
  };

  return (
    <div className="w-full animate-fade-in pb-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-8 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar">
        {product.breadcrumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            {idx === 0 ? (
              <Link to={crumb.path} className="flex items-center hover:text-[#c000ff] transition-colors">
                <Home className="w-4 h-4 mr-1" />
                {crumb.name}
              </Link>
            ) : (
              <Link to={crumb.path} className="hover:text-[#c000ff] transition-colors">
                {crumb.name}
              </Link>
            )}
            {idx < product.breadcrumbs.length - 1 && (
              <ChevronRight className="w-4 h-4 mx-2 text-slate-300 dark:text-slate-600 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
        {/* Left: Product Image */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#c000ff]/20 to-transparent blur-3xl -z-10 group-hover:from-[#c000ff]/30 transition-all duration-500 rounded-[2.5rem]"></div>
          <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-6 md:p-10 flex items-center justify-center relative overflow-hidden transition-all duration-300 hover:border-[#c000ff]/30 group-hover:shadow-[0_0_40px_rgba(192,0,255,0.1)] aspect-[3/4]">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full max-w-[300px] object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />
            {product.condition === 'Nouveau' && (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#c000ff] to-[#ff4655] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                Nouveau
              </div>
            )}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="mb-2 flex items-center gap-3">
            <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-wider border border-green-500/20">
              {product.stock}
            </span>
            <span className="flex items-center text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
              <Star className="w-3 h-3 text-amber-500 mr-1 fill-amber-500" />
              {product.rating}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            {product.title}
          </h1>

          <div className="flex items-baseline gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className="text-3xl sm:text-4xl font-bold text-gradient">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg sm:text-xl text-slate-400 dark:text-slate-500 line-through font-medium">
                {product.originalPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10 pb-10 border-b border-slate-200 dark:border-white/10">
            <div className="flex items-center justify-between sm:justify-start bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-white/5 rounded-full h-14 overflow-hidden w-full sm:w-auto shrink-0">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-14 h-full flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 transition-colors text-xl"
              >-</button>
              <span className="w-14 text-center text-lg font-semibold text-slate-900 dark:text-white">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-14 h-full flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 transition-colors text-xl"
              >+</button>
            </div>
            
            <button className="h-14 py-4 sm:py-0 w-full sm:w-auto px-6 bg-[#c000ff]/10 hover:bg-[#c000ff]/20 text-[#c000ff] rounded-full font-medium text-base transition-all duration-300 flex items-center justify-center gap-2 sm:flex-1 shrink-0">
              <ShoppingCart className="w-5 h-5" />
              Ajouter au panier
            </button>
            
            <button className="h-14 py-4 sm:py-0 w-full sm:w-auto px-6 bg-[#c000ff] hover:bg-[#a600dd] text-white rounded-full font-medium text-base shadow-[0_4px_14px_rgba(192,0,255,0.4)] hover:shadow-[0_6px_20px_rgba(192,0,255,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center sm:flex-1 shrink-0">
              Acheter maintenant
            </button>
          </div>

          {/* Quick Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {product.details.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                  <div className="p-2 bg-slate-100 dark:bg-white/5 rounded-full group-hover:bg-[#c000ff]/10 group-hover:text-[#c000ff] text-slate-400 transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">{detail.label}</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-200">{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Synopsis / Description Section */}
      <div className="mb-12 sm:mb-16 bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-6 sm:p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c000ff]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="p-2.5 bg-[#c000ff]/10 text-[#c000ff] rounded-full flex-shrink-0">
            <Info className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">Synopsis</h2>
        </div>
        
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg max-w-4xl">
          {product.synopsis}
        </p>
      </div>

      {/* Recommendations */}
      <div className="pt-8 border-t border-slate-200 dark:border-white/5">
        <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-8">Vous aimerez aussi</h3>
        <TrendingDeals />
      </div>

    </div>
  );
};

export default ProductDetails;
