import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import cartReducer from "../utils/cartSlice"
import wishlistReducer from "../utils/wishlistSlice"

const appStore = configureStore(
    {
        reducer: {
            user : userReducer,
            cart : cartReducer,
            wishlist : wishlistReducer,
        }
    }
)

export default appStore;