import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('Token') || '');

  const storeToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem('Token', newToken);
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('Token');
  };

  return (
    <AuthContext.Provider value={{ token, storeToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
