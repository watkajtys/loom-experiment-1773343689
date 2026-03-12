import React, { createContext, useContext, useEffect, useState } from 'react';
import { pb } from './pocketbase';
import { RecordModel } from 'pocketbase';

interface AuthContextType {
  isValid: boolean;
  user: RecordModel | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auto-login a mock user to skip login during Phase 1 evaluation of Core Loop / Dashboard
// Moving this outside the component definition prevents mutating external state during render
if (!pb.authStore.isValid) {
  pb.authStore.save('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1vY2tfb2lkIiwiZXhwIjo5OTk5OTk5OTk5fQ.signature', {
    id: 'mock_user_id',
    email: 'test@example.com',
    collectionId: 'users',
    collectionName: 'users',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  });
}

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
