import cartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import offerSlice from "./offerSlice";
const store = configureStore({
    reducer:{
        cart: cartSlice,
        offer: offerSlice
    }
})

export default store;