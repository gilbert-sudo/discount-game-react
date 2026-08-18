import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoginModalOpen: false,
  isSignupModalOpen: false,
  isForgotPasswordModalOpen: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isSignupModalOpen = false;
      state.isForgotPasswordModalOpen = false;
      state.isLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
    },
    openSignupModal: (state) => {
      state.isLoginModalOpen = false;
      state.isForgotPasswordModalOpen = false;
      state.isSignupModalOpen = true;
    },
    closeSignupModal: (state) => {
      state.isSignupModalOpen = false;
    },
    openForgotPasswordModal: (state) => {
      state.isLoginModalOpen = false;
      state.isSignupModalOpen = false;
      state.isForgotPasswordModalOpen = true;
    },
    closeForgotPasswordModal: (state) => {
      state.isForgotPasswordModalOpen = false;
    },
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  openSignupModal,
  closeSignupModal,
  openForgotPasswordModal,
  closeForgotPasswordModal,
} = authSlice.actions;

export default authSlice.reducer;
