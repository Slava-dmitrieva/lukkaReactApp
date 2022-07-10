import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        itemsInCart:[]
    },
    reducers:{
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(food => food.id !== action.payload)
        },
        addCountFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.map(food => {
                console.log(food, action.payload);
            if(food.id === action.payload){
                food.count += 1
            }
                return food
            })
        },
        minusCountFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.map(food => {
            if(food.id === action.payload){
                food.count -= 1
            }
                return food
            })
        },
    }
})
export const {setItemInCart, deleteItemFromCart,addCountFromCart,minusCountFromCart} = cartSlice.actions;
export default cartSlice.reducer;