import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem : [],
    // CartTotalQuantity: 0,
    // cartTotalAmount: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addItem(state, action){
        //     state.push(action.payload);
        // }
        addItem(state, action){
            const itemIndex = state.cartItem.findIndex((item)=>{
                return item.id === action.payload.id
            });
            if(itemIndex >= 0){
                state.cartItem[itemIndex].cartQuantity += 1;
            }else{
                const tempProduct = {...action.payload, cartQuantity:1}
                state.cartItem.push(tempProduct);
            }
        }
    }
})


export default cartSlice.reducer;
export const {addItem} = cartSlice.actions;