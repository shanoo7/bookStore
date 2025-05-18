import { createContext, useContext, useEffect, useState } from "react";
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


  //LocalStorage
  useEffect(() => {
    // Set Item in localStorage
    if (selectedBook) {
      localStorage.setItem("selectedBook", JSON.stringify(selectedBook));
      
    } else {
      // Get Item in localStorage
      const stored = localStorage.getItem("selectedBook");
      if (stored) {
        setSelectedBook(JSON.parse(stored));
      }
    }
  }, [selectedBook]);

  const handleSelectedBook = (item) => {
    navigate(`/book/${item._id}`)
    setSelectedBook(item)
  }

  //buy now function
  const handleBuy = (item) => {
    toast.success(`Buying process started for ${item.name}`)
  }

  const addToCart =(item)=>{
setSelectedBook(item.lenght)
  }

  //search function 
  const [searchTerm, setSearchTerm] = useState("")

  //filter state
  // const [category, setCategory] = useState("");
  // const [maxPrice, setMaxPrice] = useState("");
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, selectedBook, setSelectedBook, handleSelectedBook, handleBuy,searchTerm,setSearchTerm,addToCart  }}>
      {children}
    </AuthContext.Provider>
  );
}
