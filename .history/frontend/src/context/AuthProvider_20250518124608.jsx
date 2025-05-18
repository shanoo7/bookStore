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




  // CART LOGIC
  const initialCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(initialCart);

  // Cart localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existing = cartItems.find((currentItem) => currentItem._id === item._id);
    if (existing) {
      // Update quantity
      setCartItems((prev) =>
        prev.map((currentItem) =>
          currentItem._id === item._id ? { ...currentItem, quantity: currentItem.quantity + 1 } : currentItem
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



// WISHLIST LOGIC
const initialWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
const [wishlistItems, setWishlistItems] = useState(initialWishlist);
const [liked,isLiked] = useState()



  

// Wishlist localStorage
useEffect(() => {
  localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
}, [wishlistItems]);

const addToWishlist = (item) => {
  const exists = wishlistItems.find((i) => i._id === item._id);
  if (exists) {
    toast.info("Already in wishlist");
  } else {
    setWishlistItems([...wishlistItems, item]);
    toast.success("Added to wishlist");
  }
};

const removeFromWishlist = (id) => {
  setWishlistItems((prev) => prev.filter((item) => item._id !== id));
  toast.success("Removed from wishlist");
};

const clearWishlist = () => {
  setWishlistItems([]);
  toast.success("Wishlist cleared");
};

// Toggle wishlist (like/dislike)
const toggleWishlist = (item) => {
  const isInWishlist = wishlistItems.some((wishItem) => wishItem._id === item._id);
  if (isInWishlist) {
    removeFromWishlist(item._id);
    
  } else {
    addToWishlist(item);
    
  }
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
        wishlistItems,
        addToWishlist,
        setWishlistItems,
        removeFromWishlist,
        clearWishlist,
        toggleWishlist,
        liked
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

