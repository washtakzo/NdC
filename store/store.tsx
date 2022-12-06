import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./basket-slice";

const store = configureStore({
  reducer: { basketSection: basketReducer },
});

export default store;
