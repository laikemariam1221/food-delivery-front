// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Initial state of the cart with an empty array of items
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { id, name, price, image } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists in cart
      } else {
        state.items.push({ id, name, price, image, quantity: 1 }); // Add item to cart with quantity 1
      }
    },

    removeItemFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          ); // Remove item if quantity is 1
        } else {
          existingItem.quantity -= 1; // Decrease quantity if quantity > 1
        }
      }
    },
    clearCart: (state) => {
      state.items = []; // Clear all items from the cart
    },
    
  }
});
export const {clearCart, addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
