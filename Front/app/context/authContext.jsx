"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { getUserByToken } from "../services/Users";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userConnected, setUserConnected] = useState(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("userConnected");
      return savedUser ? JSON.parse(savedUser) : null;
    }
  });

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("jwt_token");
      if (token) {
        setIsLogged(true);
        if (!userConnected) {
          try {
            const user = await getUserByToken(token);
            setUserConnected(user);
            localStorage.setItem("userConnected", JSON.stringify(user));
          } catch (error) {
            console.log(error);
            handleLogout(); // Disconnect if error
          }
        }
      }
    };
    fetchUser();
  }, [isLogged]);

  const handleLogout = () => {
    localStorage.clear();
    setIsLogged(false);
    setUserConnected(null);

    const protectedPaths = ["/dashboard", "/accomodation/:id"];
    if (
      protectedPaths.some((path) => window.location.pathname.startsWith(path))
    ) {
      window.location.href = "/"; // Redirection to homePage
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        userConnected,
        setUserConnected,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
