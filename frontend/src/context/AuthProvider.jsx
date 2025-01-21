import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {

  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  //selected book function
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);
  const handleSelectedBook = (item) => {
    navigate(`/book/${item.id}`, { state: item })
    setSelectedBook(item)
  }

  //buy now function
  const handleBuy = (item) => {
    toast.success(`Buying process started for ${item.name}`)
  }
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, selectedBook, setSelectedBook, handleSelectedBook, handleBuy }}>
      {children}
    </AuthContext.Provider>
  );
}
