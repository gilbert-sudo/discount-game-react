import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, price, image, seller, rating, isNew, is4K }) => {
  return (
    <div className="market-card bg-white dark:bg-dark-card border border-slate-200 dark:border-white/5 rounded-[2rem] overflow-hidden flex flex-col relative shadow-sm dark:shadow-none p-2 h-full">
      {isNew && (
        <div className="absolute top-4 left-4 z-10 bg-[#FF4D5A] text-white text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
          Nouveau
        </div>
      )}
      {is4K && (
        <div className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md text-[#E63946] dark:text-[#FF4D5A] text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 shadow-lg">
          4K Ultra HD
        </div>
      )}
      
      <Link to={`/product/${id || 1}`} className="aspect-square bg-slate-50 dark:bg-white flex items-center justify-center p-8 relative overflow-hidden rounded-[1.5rem] group">
        <img 
          src={image} 
          alt={title} 
          className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
        />
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 flex justify-between items-center">
          <span>Vendeur: <a href="#" className="text-[#FF4D5A] dark:text-[#FF7582] hover:underline font-bold">{seller}</a></span>
          <span className="flex items-center text-yellow-500 dark:text-yellow-400 text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-current mr-1" /> {rating}
          </span>
        </div>
        <Link to={`/product/${id || 1}`} className="font-bold text-base leading-tight text-slate-900 dark:text-white hover:text-[#E63946] dark:hover:text-[#FF4D5A] transition-colors line-clamp-2 mb-4">
          {title}
        </Link>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#10b981]">{price}</span>
          </div>
          <button className="w-12 h-12 rounded-full bg-slate-100 dark:bg-dark-hover hover:bg-[#FF4D5A] hover:text-white dark:hover:text-white text-slate-900 dark:text-white transition-colors flex items-center justify-center shadow-md">
            <ShoppingCart className="w-5 h-5 font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
