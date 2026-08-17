import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import ProductCard from '../ui/ProductCard';

const products = [
  {
    id: 1,
    title: "Welcome to L.A.",
    price: "3,89 €",
    image: "https://discount-game.fr/19567-large_default/accueil-welcome-to-la-16259.jpg",
    seller: "Discount Game",
    rating: "9.8",
    isNew: true
  },
  {
    id: 2,
    title: "Wanda's Cafe",
    price: "3,89 €",
    image: "https://discount-game.fr/19569-large_default/accueil-wandas-cafe-16260.jpg",
    seller: "Discount Game",
    rating: "9.8",
    isNew: true
  },
  {
    id: 3,
    title: "Les modernes",
    price: "3,89 €",
    image: "https://discount-game.fr/19566-large_default/accueil-les-modernes-16258.jpg",
    seller: "Discount Game",
    rating: "9.8",
    isNew: true
  },
  {
    id: 4,
    title: "Veuve, mais pas trop",
    price: "11,89 €",
    image: "https://discount-game.fr/19577-large_default/accueil-veuve-mais-pas-trop-16268.jpg",
    seller: "Discount Game",
    rating: "9.8",
    isNew: true
  },
  {
    id: 5,
    title: "La Nuit de l'épouvantail 4K Ultra HD",
    price: "18,89 €",
    image: "https://discount-game.fr/19511-large_default/blu-ray-la-nuit-de-lepouvantail-4k-ultra-hd-16221.jpg",
    seller: "Discount Game",
    rating: "9.8",
    isNew: true,
    is4K: true
  }
];

const TrendingDeals = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-white/5 pb-4 pl-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#ff4655]/10 rounded-full text-[#ff4655]">
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-display font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Arrivages du jour
          </h2>
        </div>
        <a href="#" className="text-sm font-bold text-[#c000ff] hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors bg-[#c000ff]/10 px-4 py-2 rounded-full">
          Tout voir <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map(product => (
          <div key={product.id} className={product.id === 5 ? "hidden xl:block" : ""}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingDeals;
