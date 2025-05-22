import { createContext, useContext, useState, useEffect } from "react";
import facade from "../util/apiFacade";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(facade.loggedIn());
  const [username, setUsername] = useState(facade.getUsername());

  const login = async (user, pass) => {
    await facade.login(user, pass);
    setIsLoggedIn(true);
    setUsername(facade.getUsername());
  };

  const logout = () => {
    facade.logout();
    setIsLoggedIn(false);
    setUsername("");
  };

  useEffect(() => {
    // Set from persisted login (if any)
    if (facade.loggedIn()) {
      setIsLoggedIn(true);
      setUsername(facade.getUsername());
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
