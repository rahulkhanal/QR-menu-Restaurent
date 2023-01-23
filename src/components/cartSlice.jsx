import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem : [],
    CartTotalQuantity: 0,
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
                state.CartTotalQuantity += 1;
            }else{
                const tempProduct = {...action.payload, cartQuantity:1}
                state.cartItem.push(tempProduct);
                console.log(state.cartItem)
                state.CartTotalQuantity += 1;
            }
        },
        deleteItem(state, action){
            const nextCartItem = state.cartItem.filter((cartItem)=>{
                return cartItem.id !== action.payload
            })
            state.cartItem = nextCartItem;
        }
    }
})


export default cartSlice.reducer;
export const {addItem, deleteItem} = cartSlice.actions;