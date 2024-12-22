import React, { createContext, useContext, useEffect, useState } from 'react';
import { iUSER } from '../model/user';
import { clearAuthToken, getUser, loginUser } from './httpClient';

interface iAuthContext {
  user: iUSER | null,
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<iAuthContext | undefined>(undefined);

interface iAuthProvider {
  children: React.ReactNode
}

function AuthProvider(props: iAuthProvider) {
  const [user, setUser] = useState<iUSER | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await getUser();
      setUser(response);
    } catch (err) {
      console.log(err);
      setUser(null);
    }
  }

  const login = async (username: string, password: string) => {
    await loginUser({ username, password });
    await checkAuth();
  }

  const logout = () => {
    clearAuthToken();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used wihtin an AuthProvider');
  }
  return context;
}
