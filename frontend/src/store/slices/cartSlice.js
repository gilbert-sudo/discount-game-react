import { createSlice } from '@reduxjs/toolkit';

// Mock initial data based on the design reference
const initialState = {
  items: [
    {
      id: 1,
      name: 'Casque Gaming Bluetooth',
      price: 14.89,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=200&h=200&fit=crop',
    },
    {
      id: 2,
      name: 'Cow-Boy',
      price: 5.89,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=200&h=200&fit=crop', // Movie placeholder
    }
  ],
  shippingCost: 5.69,
  promoCode: null,
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        if (quantity > 0) {
          item.quantity = quantity;
        } else {
          state.items = state.items.filter(i => i.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, openCart, closeCart, toggleCart } = cartSlice.actions;

// Selectors
export const selectIsCartOpen = (state) => state.cart.isOpen;
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemCount = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartSubtotal = (state) => state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
export const selectCartShipping = (state) => state.cart.items.length > 0 ? state.cart.shippingCost : 0;
export const selectCartTotal = (state) => {
  const subtotal = selectCartSubtotal(state);
  const shipping = selectCartShipping(state);
  return subtotal + shipping;
};

export default cartSlice.reducer;
