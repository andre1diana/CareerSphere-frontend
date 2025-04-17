import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  user: { 
    role: 'guest', 
    name: '', 
    surname: '', 
    profileImage: '', 
    experience: [], 
    education: [] 
  },
  login: () => {},
  logout: () => {},
  updateUser: () => {}
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser
      ? JSON.parse(savedUser)
      : { 
          role: 'guest', 
          name: '', 
          surname: '', 
          profileImage: '', 
          experience: [], 
          education: [] 
        };
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const login = (userData) => {
    console.log('User data:', userData);
    setUser(userData);
  };

  const logout = () => {
    setUser({ 
      role: 'guest', 
      name: '', 
      surname: '', 
      profileImage: '', 
      experience: [], 
      education: [] 
    });
    localStorage.removeItem('user');
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};