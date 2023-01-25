import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    offerItem: [],
}

const offerSlice = createSlice({
    name: 'offer',
    initialState,
    reducers: {
        addOffer(state, action){
            // console.log(action.payload)
            state.offerItem.push(action.payload);
        }
    }
})

export default offerSlice.reducer;
export const {addOffer} = offerSlice.actions;