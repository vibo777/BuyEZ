import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState : {
        items: ['T-shirt','jeans']
    },
    reducers: {
        addItem : (state , action) => {
            state.items.push(action.payload);
        },
        removeItem : (state) => {
            state.items.pop();
        },
        resetItem : (state) => {
            state.items.length=0;
        }
    }
});

export const { addItem, removeItem, resetItem} = cartSlice.actions;

export default cartSlice.reducer;

