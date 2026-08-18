import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Trash2, ChevronLeft, Minus, Plus, Tag, ArrowRight, X } from 'lucide-react';
import {
  selectCartItems,
  selectCartTotal,
  selectCartItemCount,
  selectCartShipping,
  selectCartSubtotal,
  selectIsCartOpen,
  updateQuantity,
  removeFromCart,
  closeCart,
} from '../../store/slices/cartSlice';

const CartModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const itemCount = useSelector(selectCartItemCount);
  const cartTotal = useSelector(selectCartTotal);
  const shipping = useSelector(selectCartShipping);
  const subtotal = useSelector(selectCartSubtotal);

  const [itemToDelete, setItemToDelete] = useState(null);

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleQuantityChange = (item, change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    } else {
      setItemToDelete(item);
    }
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      dispatch(removeFromCart(itemToDelete.id));
      setItemToDelete(null);
    }
  };

  const cancelDelete = () => {
    setItemToDelete(null);
  };

  return (
    <div className="fixed inset-0 z-[80] flex flex-col pt-6 sm:pt-8 md:pt-12 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-white/80 dark:bg-[#2A3B50]/90 backdrop-blur-2xl transition-opacity cursor-pointer" 
        onClick={() => dispatch(closeCart())}
      ></div>

      {/* Main Content Container - No box background */}
      <div className="w-full max-w-[1600px] mx-auto relative z-10 flex flex-col h-full overflow-hidden animate-scale-in">
        
        {/* Header (Title and Close Button) */}
        <div className="flex items-center justify-between gap-4 p-4 sm:p-6 lg:px-8 shrink-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-slate-900 dark:text-white uppercase tracking-wider drop-shadow-sm truncate">
            Votre Panier
          </h1>
          
          <button 
            onClick={() => dispatch(closeCart())}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/80 dark:bg-dark-hover/80 backdrop-blur-md text-slate-900 dark:text-white hover:bg-white dark:hover:bg-[#334155] transition-all shadow-sm font-semibold text-sm border border-slate-200/50 dark:border-white/10 hover:-translate-y-0.5 shrink-0"
          >
            <span className="hidden sm:inline">Fermer le panier</span>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body - Flex layout to pin the summary on mobile */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden px-4 sm:px-6 lg:px-8 gap-4 sm:gap-6 lg:gap-12 pb-4">
          
          {/* Left Column: Scrollable Cart Items */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Promo Banner */}
            <div className="w-full bg-gradient-to-r from-red-600 via-red-500 to-rose-600 rounded-xl p-2 sm:p-3 text-white shadow-sm relative flex flex-col xl:flex-row items-center justify-between gap-2 shrink-0">
              <div className="z-10 flex items-center gap-3">
                <h2 className="text-sm sm:text-base font-display font-black tracking-wider uppercase drop-shadow-sm">
                  Code Promo
                </h2>
                <span className="hidden xl:inline-block text-[0.65rem] font-semibold bg-black/20 px-2 py-0.5 rounded-full">
                  * AVEC MONDIAL RELAY (FR/BE)
                </span>
              </div>

              <div className="z-10 flex flex-wrap justify-center xl:justify-end gap-1.5 w-full xl:w-auto">
                <div className="flex items-center bg-black/20 rounded-md p-1 px-2 gap-2 border border-white/10">
                  <span className="font-bold text-[0.65rem] sm:text-xs">20 BLU RAY = -10%</span>
                  <span className="bg-black text-white px-1.5 py-0.5 rounded text-[0.6rem] font-black uppercase tracking-wider">BLURAY</span>
                </div>
                <div className="flex items-center bg-black/20 rounded-md p-1 px-2 gap-2 border border-white/10">
                  <span className="font-bold text-[0.65rem] sm:text-xs">12 DVD = -10%</span>
                  <span className="bg-black text-white px-1.5 py-0.5 rounded text-[0.6rem] font-black uppercase tracking-wider">DVD</span>
                </div>
                <div className="flex items-center bg-black/20 rounded-md p-1 px-2 gap-2 border border-white/10">
                  <span className="font-bold text-[0.65rem] sm:text-xs">199€ = LIVRAISON OFFERTE*</span>
                  <span className="bg-black text-white px-1.5 py-0.5 rounded text-[0.6rem] font-black uppercase tracking-wider">LIVRAISON</span>
                </div>
              </div>
            </div>

            {/* Scrollable Items */}
            <div className="flex-1 overflow-y-auto no-scrollbar mt-4 sm:mt-6 pb-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-24 h-24 bg-slate-200/50 dark:bg-dark-hover/50 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                    <Tag className="w-10 h-10 text-slate-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 drop-shadow-sm">Votre panier est vide</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 font-medium">Découvrez nos dernières offres et promotions.</p>
                  <button 
                    onClick={() => dispatch(closeCart())}
                    className="bg-[#FF4D5A] hover:bg-[#E63946] text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg shadow-[#FF4D5A]/30"
                  >
                    Parcourir le catalogue
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl bg-white/40 dark:bg-dark-card/40 backdrop-blur-md border border-slate-200/50 dark:border-white/10 hover:border-[#FF4D5A]/50 dark:hover:border-[#FF4D5A]/50 transition-colors group shadow-sm">
                      {/* Item Image */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 bg-white/80 dark:bg-dark-bg/80 border border-slate-200/50 dark:border-white/5">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      
                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate uppercase drop-shadow-sm" title={item.name}>{item.name}</h3>
                        <div className="text-slate-700 dark:text-slate-300 text-xs font-semibold mt-0.5">{item.price.toFixed(2).replace('.', ',')} € / unité</div>
                      </div>

                      {/* Controls & Total */}
                      <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                        {/* Quantity */}
                        <div className="hidden sm:flex items-center bg-white/80 dark:bg-dark-bg/80 border border-slate-200/50 dark:border-white/10 rounded-md overflow-hidden shadow-sm h-8 backdrop-blur-sm">
                          <button 
                            onClick={() => handleQuantityChange(item, -1)}
                            className="px-2 text-slate-600 hover:text-[#FF4D5A] hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors h-full flex items-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-bold text-slate-900 dark:text-white text-xs">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => handleQuantityChange(item, 1)}
                            className="px-2 text-slate-600 hover:text-[#FF4D5A] hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors h-full flex items-center"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        {/* Mobile Quantity */}
                        <div className="flex sm:hidden flex-col items-center bg-white/80 dark:bg-dark-bg/80 border border-slate-200/50 dark:border-white/10 rounded-md overflow-hidden shadow-sm w-7 backdrop-blur-sm">
                          <button onClick={() => handleQuantityChange(item, 1)} className="py-1 text-slate-600 hover:text-[#FF4D5A] w-full flex justify-center border-b border-slate-200/50 dark:border-white/5">
                             <Plus className="w-3 h-3" />
                          </button>
                          <span className="py-1 text-center font-bold text-slate-900 dark:text-white text-xs w-full">
                            {item.quantity}
                          </span>
                          <button onClick={() => handleQuantityChange(item, -1)} className="py-1 text-slate-600 hover:text-[#FF4D5A] w-full flex justify-center border-t border-slate-200/50 dark:border-white/5">
                             <Minus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="font-black text-[#FF4D5A] text-sm sm:text-base w-16 sm:w-20 text-right drop-shadow-sm">
                          {(item.price * item.quantity).toFixed(2).replace('.', ',')} €
                        </div>

                        {/* Remove */}
                        <button 
                          onClick={() => setItemToDelete(item)}
                          className="p-1.5 text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-md transition-all"
                          title="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary (Fixed at bottom on mobile) */}
          <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0 border-t lg:border-t-0 lg:border-l border-slate-300/50 dark:border-white/10 pt-4 lg:pt-0 lg:pl-12 flex flex-col justify-end lg:justify-start pb-20 sm:pb-24 lg:pb-0">
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex items-center justify-between text-slate-700 dark:text-slate-200 font-semibold uppercase text-xs tracking-wider drop-shadow-sm">
                <span>{itemCount} Articles</span>
                <span className="text-slate-900 dark:text-white font-bold">{subtotal.toFixed(2).replace('.', ',')} €</span>
              </div>
              <div className="flex items-center justify-between text-slate-700 dark:text-slate-200 font-semibold uppercase text-xs tracking-wider border-b border-slate-300/50 dark:border-white/10 pb-4 sm:pb-6 drop-shadow-sm">
                <span>Livraison</span>
                <span className="text-slate-900 dark:text-white font-bold">{shipping.toFixed(2).replace('.', ',')} €</span>
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <button className="flex items-center justify-between w-full text-left font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-wider hover:text-[#FF4D5A] dark:hover:text-[#FF4D5A] transition-colors group drop-shadow-sm">
                Vous avez un code promo ?
                <ChevronLeft className="w-4 h-4 rotate-180 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-between text-lg font-black uppercase tracking-wider mb-4 sm:mb-6 pt-3 sm:pt-4 border-t border-slate-300/50 dark:border-white/10 drop-shadow-sm">
              <span className="text-slate-900 dark:text-white">Total TTC</span>
              <span className="text-xl sm:text-2xl text-[#FF4D5A] drop-shadow-sm">{cartTotal.toFixed(2).replace('.', ',')} €</span>
            </div>

            <button 
              disabled={cartItems.length === 0}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-black uppercase tracking-widest py-3 sm:py-4 px-4 rounded-full shadow-[0_4px_15px_rgba(6,182,212,0.4)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0 text-sm sm:text-base"
            >
              Commander
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {itemToDelete && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={cancelDelete}></div>
          <div className="bg-white dark:bg-dark-card rounded-3xl p-5 shadow-2xl relative z-10 w-full max-w-[300px] animate-scale-in border border-slate-200 dark:border-white/5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 shrink-0 bg-red-50 dark:bg-red-500/10 text-red-500 rounded-full flex items-center justify-center">
                <Trash2 className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Retirer l'article ?</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs truncate mt-0.5" title={itemToDelete.name}>
                  {itemToDelete.name}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 w-full mt-1">
              <button 
                onClick={cancelDelete}
                className="flex-1 bg-slate-100 dark:bg-dark-hover hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-2 rounded-full text-xs font-bold transition-colors"
              >
                Annuler
              </button>
              <button 
                onClick={confirmDelete}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-full text-xs font-bold shadow-[0_2px_10px_rgba(239,68,68,0.3)] hover:shadow-[0_4px_15px_rgba(239,68,68,0.5)] transition-all"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
