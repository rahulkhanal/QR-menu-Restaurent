import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
    CartTotalQuantity: 0,
    cartTotalAmount: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const itemIndex = state.cartItem.findIndex((item) => {
                // state.cartTotalAmount += item.price;
                return item.id === action.payload.id
            });
            if (itemIndex >= 0) {
                return;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItem.push(tempProduct);
                state.CartTotalQuantity += 1;
                state.cartTotalAmount += tempProduct.price;
            }
        },
        deleteItem(state, action) {
            const nextCartItem = state.cartItem.filter((cartItem) => {
                if(cartItem.id === action.payload){
                    state.cartTotalAmount -= cartItem.price;
                }
                return cartItem.id !== action.payload
            })
            state.cartItem = nextCartItem;
            state.CartTotalQuantity -= 1;
        },
        AddcartQuantity(state, action) {
            const item = state.cartItem.find((item) => item.id === action.payload);
            if (item) {
                item.cartQuantity++;
                const newPrice = item.basePrice * item.cartQuantity;
                item.price = newPrice;
                state.cartTotalAmount += item.basePrice;
                // console.log(state.cartTotalAmount)
                // console.log(item.price)
            }
        },
        RemovecartQuantity(state, action) {
            const item = state.cartItem.find((item) => item.id === action.payload);
            if (item) {
                if (item.cartQuantity <= 1) {
                    item.cartQuantity = 1;
                }
                else {
                    item.cartQuantity--;
                    const newPrice = item.basePrice * item.cartQuantity;
                    item.price = newPrice;
                    state.cartTotalAmount -= item.basePrice;
                }
            }
        }
    }
})


export default cartSlice.reducer;
export const { addItem, deleteItem, AddcartQuantity, RemovecartQuantity } = cartSlice.actions;