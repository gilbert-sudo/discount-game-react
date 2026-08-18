import React, { useEffect, useRef, useState } from 'react';
import { Search, X, Clock, Flame, ArrowRight, Tag, Gamepad2, Disc } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSearch } from '../../store/slices/searchSlice';
import { Link } from 'react-router-dom';

const RECENT_SEARCHES = [
  'PS5 DualSense Controller',
  'The Last of Us Part II',
  'Elden Ring',
  'Xbox Series X'
];

const TRENDING_CATEGORIES = [
  { name: 'Jeux PS5', icon: Gamepad2, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { name: 'Blu-Ray', icon: Disc, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { name: 'Promotions', icon: Tag, color: 'text-rose-500', bg: 'bg-rose-500/10' },
  { name: 'Nouveautés', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10' }
];

const POPULAR_PRODUCTS = [
  { id: 1, name: 'Console PlayStation 5 Édition Standard', price: '499.99 €', image: 'https://picsum.photos/seed/playstation/100/100' },
  { id: 2, name: 'Manette sans fil Xbox - Carbon Black', price: '59.99 €', image: 'https://picsum.photos/seed/xbox/100/100' }
];

const SearchModal = () => {
  const dispatch = useDispatch();
  const isSearchOpen = useSelector((state) => state.search.isSearchOpen);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Handle click outside to close
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(closeSearch());
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
      
      // Focus input
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isSearchOpen, dispatch]);

  // Handle Escape key to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') dispatch(closeSearch());
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [dispatch]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 dark:bg-slate-900/80 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white dark:bg-[#1A2332] rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10"
      >
        {/* Header / Input area */}
        <div className="flex items-center px-4 py-4 border-b border-slate-200 dark:border-white/10">
          <Search className="w-6 h-6 text-slate-400 dark:text-slate-500 mr-3" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
            placeholder="Rechercher des jeux, films, accessoires..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query ? (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors mr-2"
            >
              <X className="w-5 h-5" />
            </button>
          ) : (
            <div className="hidden sm:flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 mr-2 font-medium">
              <kbd className="px-2 py-1 rounded bg-slate-100 dark:bg-dark-hover border border-slate-200 dark:border-white/10">ESC</kbd>
            </div>
          )}
        </div>

        {/* Content area */}
        <div className="max-h-[60vh] overflow-y-auto overscroll-contain no-scrollbar">
          {query.length > 0 ? (
            <div className="p-4 space-y-6">
              {/* Mock search results could go here */}
              <div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-2">Résultats pour "{query}"</h3>
                <div className="space-y-1">
                  {POPULAR_PRODUCTS.map(product => (
                    <Link to="#" key={product.id} onClick={() => dispatch(closeSearch())} className="flex items-center gap-4 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors group">
                      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 dark:text-white truncate group-hover:text-[#FF4D5A] transition-colors">{product.name}</p>
                        <p className="text-sm font-bold text-[#FF4D5A] mt-0.5">{product.price}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 sm:p-6 space-y-8">
              {/* Trending Categories */}
              <div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Catégories Populaires</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {TRENDING_CATEGORIES.map((cat, idx) => (
                    <Link to="#" key={idx} onClick={() => dispatch(closeSearch())} className="flex items-center p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-dark-hover dark:hover:bg-[#2A3B50] border border-slate-100 dark:border-white/5 transition-colors gap-3 group">
                      <div className={`w-8 h-8 rounded-lg ${cat.bg} ${cat.color} flex items-center justify-center group-hover:scale-110 transition-transform shrink-0`}>
                        <cat.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Recent Searches */}
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Recherches Récentes</h3>
                  <div className="space-y-1">
                    {RECENT_SEARCHES.map((search, idx) => (
                      <button key={idx} onClick={() => setQuery(search)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-dark-hover text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group">
                        <Clock className="w-4 h-4 text-slate-400 group-hover:text-[#FF4D5A]" />
                        <span className="text-sm text-left flex-1">{search}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Top Products */}
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Produits du Moment</h3>
                  <div className="space-y-2">
                    {POPULAR_PRODUCTS.map((product) => (
                      <Link to="#" key={product.id} onClick={() => dispatch(closeSearch())} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-dark-hover transition-colors group">
                        <div className="w-10 h-10 rounded-md overflow-hidden shrink-0">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-[#FF4D5A]">{product.name}</p>
                          <p className="text-xs font-bold text-[#FF4D5A]">{product.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="hidden sm:flex items-center justify-between px-6 py-3 bg-slate-50 dark:bg-dark-bg border-t border-slate-200 dark:border-white/10 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#2A3B50] border border-slate-200 dark:border-white/10">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#2A3B50] border border-slate-200 dark:border-white/10">↓</kbd> pour naviguer</span>
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#2A3B50] border border-slate-200 dark:border-white/10">↵</kbd> pour sélectionner</span>
          </div>
          <div className="font-semibold text-slate-400">DISCOUNT GAME</div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
