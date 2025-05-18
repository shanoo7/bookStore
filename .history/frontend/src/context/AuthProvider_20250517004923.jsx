import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// export function AuthProvider({ children }) {

//   const initialAuthUser = localStorage.getItem("Users");
//   const [authUser, setAuthUser] = useState(
//     initialAuthUser ? JSON.parse(initialAuthUser) : undefined
//   );

//   //selected book function
//   const navigate = useNavigate();
//   const [selectedBook, setSelectedBook] = useState(null);


//     //LocalStorage
//   useEffect(() => {
//     // Set Item in localStorage
//     if (selectedBook) {
//       localStorage.setItem("selectedBook", JSON.stringify(selectedBook));
      
//     } else {
//       // Get Item in localStorage
//       const stored = localStorage.getItem("selectedBook");
//       if (stored) {
//         setSelectedBook(JSON.parse(stored));
//       }
//     }
//   }, [selectedBook]);

//   const handleSelectedBook = (item) => {
//     navigate(`/book/${item._id}`)
//     setSelectedBook(item)
//   }

//   //buy now function
//   const handleBuy = (item) => {
//     toast.success(`Buying process started for ${item.name}`)
//   }

//   //search function 
//   const [searchTerm, setSearchTerm] = useState("")

//   //filter state
//   // const [category, setCategory] = useState("");
//   // const [maxPrice, setMaxPrice] = useState("");
//   return (
//     <AuthContext.Provider value={{ authUser, setAuthUser, selectedBook, setSelectedBook, handleSelectedBook, handleBuy,searchTerm,setSearchTerm  }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


export function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);

  // Selected Book LocalStorage Sync
  useEffect(() => {
    if (selectedBook) {
      localStorage.setItem("selectedBook", JSON.stringify(selectedBook));
    } else {
      const stored = localStorage.getItem("selectedBook");
      if (stored) setSelectedBook(JSON.parse(stored));
    }
  }, [selectedBook]);

  const handleSelectedBook = (item) => {
    navigate(`/book/${item._id}`);
    setSelectedBook(item);
  };

  const handleBuy = (item) => {
    toast.success(`Buying process started for ${item.name}`);
  };

  const [searchTerm, setSearchTerm] = useState("");

  // ✅ CART LOGIC STARTS HERE
  const initialCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(initialCart);

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existing = cartItems.find((i) => i._id === item._id);
    if (existing) {
      // Update quantity
      setCartItems((prev) =>
        prev.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
      toast.success("Item quantity updated");
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      toast.success("Item added to cart");
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
    toast.success("Item removed from cart");
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared");
  };

  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
        selectedBook,
        setSelectedBook,
        handleSelectedBook,
        handleBuy,
        searchTerm,
        setSearchTerm,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

