import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserAccount, ShippingAddress } from '../types';

interface AuthContextType {
  userAccount: UserAccount | null;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  saveAccountStep1: (email: string, mobile: string) => void;
  saveAccountComplete: (address: ShippingAddress) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userAccount, setUserAccount] = useState<UserAccount | null>(() => {
    const saved = localStorage.getItem('authentiq_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved user', e);
      }
    }
    return null;
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    if (userAccount) {
      localStorage.setItem('authentiq_user', JSON.stringify(userAccount));
    } else {
      localStorage.removeItem('authentiq_user');
    }
  }, [userAccount]);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const saveAccountStep1 = (email: string, mobile: string) => {
    setUserAccount(prev => ({
      email,
      mobile,
      address: prev?.address
    }));
  };

  const saveAccountComplete = (address: ShippingAddress) => {
    setUserAccount(prev => {
      if (!prev) {
        return { email: '', mobile: '', address };
      }
      return {
        ...prev,
        address
      };
    });
  };

  const logout = () => {
    setUserAccount(null);
  };

  return (
    <AuthContext.Provider
      value={{
        userAccount,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
        saveAccountStep1,
        saveAccountComplete,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
