// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export default configureStore({
  reducer: {
    cart: cartReducer, // Include the cartReducer in your store configuration
  },
});
