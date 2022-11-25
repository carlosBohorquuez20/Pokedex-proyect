import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const itemsSlice = createSlice({
  name: "items",
  initialState: 6,
  reducers: {
    items: (state, action) => {
      const item = action.payload;
      return item;
    },
  },
});

export const { items } = itemsSlice.actions;

export default itemsSlice.reducer;