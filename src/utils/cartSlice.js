import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addItem : (state, action) => {
            const newItem = action.payload;
            const existingItem = state.find((item)=>item.id === newItem.id);

            if(existingItem){
                existingItem.quantity++;
            } else{
                state.push({ ...newItem, quantity: 1});
            }
        },
        addMultipleItems: (state, action) => {
            const items = action.payload;
            items.forEach((newItem) => {
              const existingItem = state.find((item) => item.id === newItem.id);
              if (existingItem) {
                existingItem.quantity += newItem.quantity;
              } else {
                state.push({ ...newItem, quantity: newItem.quantity || 1 });
              }
            });
          },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity = quantity;
            }
        },
        removeItem : (state, action)=>{
            return state.filter((item)=>item.id !== action.payload);
        },
        clearCart : (state,action)=>{
            return []
        }
    }
})

export const {addItem, addMultipleItems, removeItem, updateQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;