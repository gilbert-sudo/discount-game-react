import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsSignupModalOpen(false);
    setIsForgotPasswordModalOpen(false);
    setIsLoginModalOpen(true);
  };
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openSignupModal = () => {
    setIsLoginModalOpen(false);
    setIsForgotPasswordModalOpen(false);
    setIsSignupModalOpen(true);
  };
  const closeSignupModal = () => setIsSignupModalOpen(false);

  const openForgotPasswordModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
    setIsForgotPasswordModalOpen(true);
  };
  const closeForgotPasswordModal = () => setIsForgotPasswordModalOpen(false);

  return (
    <AuthContext.Provider value={{ 
      isLoginModalOpen, openLoginModal, closeLoginModal,
      isSignupModalOpen, openSignupModal, closeSignupModal,
      isForgotPasswordModalOpen, openForgotPasswordModal, closeForgotPasswordModal
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
