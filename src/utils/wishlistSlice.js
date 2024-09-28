import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.push({ ...newItem, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem && !isNaN(quantity)) {
        existingItem.quantity = quantity;
      }
    },
    removeWishlistItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearWishlist: (state) => {
      return [];
    },
  },
});

export const { addToWishlist, updateQuantity, removeWishlistItem, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
