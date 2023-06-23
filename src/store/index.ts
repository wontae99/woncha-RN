import { configureStore } from "@reduxjs/toolkit";

import { itemReducer } from "./itemSlice";
import { uiReducer } from "./uiSlice";

const store = configureStore({
  reducer: {
    item: itemReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
