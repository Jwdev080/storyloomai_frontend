import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products";
import usersReducer from "./reducers/user";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer
  },
});
