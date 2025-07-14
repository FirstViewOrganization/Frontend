
"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Verificar si el usuario está autenticado al cargar la página
    const checkAuth = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      const userEmail = localStorage.getItem('userEmail');
      
      if (isAuthenticated === 'true' && userEmail) {
        setUser({ email: userEmail });
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Aquí puedes implementar la lógica de autenticación real
    // Por ahora usaremos una simulación
    if (email === 'admin@example.com' && password === 'password') {
      const userData = { email };
      setUser(userData);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    router.push('/login');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
