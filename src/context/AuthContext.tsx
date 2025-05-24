import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  id: string;
  fullName: string;
  email: string;
  isAgency: boolean;
  company?: string;
  profileImage?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<User, 'id'>) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('popx_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string): Promise<void> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          id: '123',
          fullName: 'Marry Doe',
          email: email,
          isAgency: true,
          company: 'PopX Agency',
          profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
        };
        
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('popx_user', JSON.stringify(mockUser));
        resolve();
      }, 1000);
    });
  };

  const register = async (userData: Omit<User, 'id'>): Promise<void> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser: User = {
          id: Math.random().toString(36).substring(2, 9),
          ...userData,
        };
        
        setUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem('popx_user', JSON.stringify(newUser));
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('popx_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};