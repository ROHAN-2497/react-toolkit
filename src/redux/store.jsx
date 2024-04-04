import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counnter/counterSlice";
const store = configureStore({
  reducer: { counter: counterReducer },
});

export default store;
