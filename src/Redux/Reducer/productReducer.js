import { createSlice } from "@reduxjs/toolkit";
import products from "../../Data/item.json";

const initialState = {
    products: products,
    cart: [],
    cartCount: 0,
    totalPrice: 0,
}
 const productSlice = createSlice({
        name: "products",
        initialState,
        reducers: {
            addToCart: (state, action) => {
                state.cart.push(action.payload);
                state.cartCount = state.cartCount + 1;
                state.totalPrice = state.totalPrice + action.payload.price;
            },
            removeFromCart: (state, action) => {
                state.cart = state.cart.filter(item => item.id!== action.payload.id);
                state.cartCount = state.cartCount - 1;
                state.totalPrice = state.totalPrice - action.payload.price;
            },
            clearCart: (state) => {
                state.cart = [];
                state.cartCount = 0;
                state.totalPrice = 0;
            }
        }
})

export const productReducer = productSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = productSlice.actions;
export const productSelector = (state) => state.productReducer