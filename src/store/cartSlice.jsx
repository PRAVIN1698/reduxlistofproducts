import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add: (state, action) => {
      // Ensure immutability by returning a new state array
      return [...state, action.payload];
    },
    removecart: (state, action) => {
      // Use filter to remove item immutably
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { add, removecart } = cartSlice.actions;

export default cartSlice.reducer;
