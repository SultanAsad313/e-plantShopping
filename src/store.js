// Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the cart reducer from CartSlice
import cartReducer from './CartSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    // Assign cart slice to the cartReducer
    cart: cartReducer,
  },
});

// Export the configured store
export default store;
