import React, { createContext, useContext, useEffect, useState } from 'react';
import { pb } from './pocketbase';
import { RecordModel } from 'pocketbase';

interface AuthContextType {
  isValid: boolean;
  user: RecordModel | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isValid, setIsValid] = useState<boolean>(pb.authStore.isValid);
  const [user, setUser] = useState<RecordModel | null>(pb.authStore.model as RecordModel | null);

  useEffect(() => {
    // Listen to changes in the PocketBase auth store
    const unsubscribe = pb.authStore.onChange((token, model) => {
      setIsValid(!!token);
      setUser(model as RecordModel | null);
    }, true); // Call immediately to sync any existing state

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isValid, user }}>
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
