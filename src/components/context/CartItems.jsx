import React, { createContext, useContext, useEffect, useState } from "react";
export const cartItemsContext = createContext();

export default function CartItemsContextProvider({ children }) {
  const [toggleSideCart, setToggleSideCart] = useState(false);

  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [favoriteItems, setFavoriteItems] = useState(() => {
    const savedItems = localStorage.getItem("favoriteItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
  };
  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };
  const addToFavorite = (item) => {
    setFavoriteItems((prev) => [...prev, item]);
  };
  const removeFromFavorite = (id) => {
    setFavoriteItems((items) => items.filter((item) => item.id !== id));
  };
  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  return (
    <cartItemsContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        addToFavorite,
        removeFromFavorite,
        favoriteItems,
        toggleSideCart,
        setToggleSideCart,
      }}
    >
      {children}
    </cartItemsContext.Provider>
  );
}
export const useCartContext = () => {
  return useContext(cartItemsContext);
};
