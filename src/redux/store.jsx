import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./features/counnter/counterSlice";
import logger from "./middleWares/logger";
const store = configureStore({
  reducer: { counter: counterReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
