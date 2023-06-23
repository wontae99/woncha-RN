import { createSlice } from "@reduxjs/toolkit";

import { itemState } from "../../types";

const initialItemState: itemState = {
  items: [],
  isAdded: undefined,
};

const itemSlice = createSlice({
  name: "item",
  initialState: initialItemState,
  reducers: {
    replaceItem(state, action) {
      state.items = action.payload.items;
    },
    toggleItem(state, action) {
      const { media_type, id } = action.payload;
      const existingItem = state.items.find(
        (item) => item.media_type === media_type && item.id === id
      );
      if (!existingItem) {
        state.items.push({
          id,
          media_type,
        });
        state.isAdded = true;
      } else {
        state.items = state.items.filter(
          (item) => !(item.media_type === media_type && item.id === id)
        );
        state.isAdded = false;
      }
    },
    checkIsAdded(state, action) {
      const { id, media_type } = action.payload;
      const existingItem = state.items?.find(
        (item) => item.media_type === media_type && item.id === id
      );
      if (existingItem) {
        state.isAdded = true;
      } else {
        state.isAdded = false;
      }
    },
  },
});

export const itemActions = itemSlice.actions;
export const itemReducer = itemSlice.reducer;
