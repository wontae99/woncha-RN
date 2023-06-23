import { createSlice } from "@reduxjs/toolkit";

import { uiState } from "../../types";

const initialState: uiState = {
  notification: null,
  isShown: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
      state.isShown = true;
    },
    hideNotification(state) {
      state.notification = null;
      state.isShown = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
