import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "../features/slices/sliderSlice";
import productsReducer from "../features/slices/productsSlice";
import cartReducer from "../features/slices/cartSlice";
import authReducer from "../features/slices/authSlice";

export const store = configureStore({
  reducer: {
    slider: sliderSlice,
    products: productsReducer,
    cart: cartReducer,
    user: authReducer,
  },
});

export default store;
