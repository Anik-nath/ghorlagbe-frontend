
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  gender: string;
  id: string;
  name: string;
  phone: string;
  email: string;
  profilePicture?: string;
  joinDate: string;
  adsPosted: number;
  isVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (phone: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
        console.log('Restored user from localStorage:', parsedUser);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = async (phone: string, password: string): Promise<boolean> => {
    console.log('Login function called with:', { phone, password });
    
    // Mock authentication - replace with actual API call
    if (phone === '01813222525' && password === '12345678') {
      const userData: User = {
        id: '1',
        name: 'মোহাম্মদ রহিম',
        phone: '01813222525',
        email: 'rahim@example.com',
        profilePicture: '',
        joinDate: '2024-01-15',
        adsPosted: 5,
        isVerified: true
      };
      
      console.log('Login successful, setting user:', userData);
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    
    console.log('Login failed - invalid credentials');
    return false;
  };

  const logout = () => {
    console.log('Logging out user');
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      console.log('Updating user:', updatedUser);
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
