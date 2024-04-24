// FoodImageContext.js
import React, { createContext, useState } from "react";
import { food_list } from "../../assets/assets";
const FoodImageContext = createContext();
const sinupContext = createContext();
const CartContext = createContext();
const CartcolorContext = createContext();
const IssininContext = createContext();
const FoodImageProvider = ({ children }) => {
  const [foodImages, setFoodImages] = useState(food_list);
  const [sinin, sinInupdater] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [iscartcolor, iscartcolorupdater] = useState(false);
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <FoodImageContext.Provider value={{ foodImages, setFoodImages }}>
      <CartContext.Provider
        value={{ cartItems, addItemToCart, removeItemFromCart }}
      >
        <sinupContext.Provider value={{ sinin, sinInupdater }}>
          <CartcolorContext.Provider
            value={{ iscartcolor, iscartcolorupdater }}
          >
            {children}
          </CartcolorContext.Provider>
        </sinupContext.Provider>
      </CartContext.Provider>
    </FoodImageContext.Provider>
  );
};

export {
  FoodImageContext,
  FoodImageProvider,
  sinupContext,
  CartContext,
  CartcolorContext,
  IssininContext,
};
