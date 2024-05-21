import { createSlice } from "@reduxjs/toolkit";
import products from "../../Data/item.json";
import { actions } from "react-table";

const initialState = {
    products: products,
    filteredProducts: [],
    cart: [],
    cartCount: 0,
    totalPrice: 0,
    searchQuery: "",
    priceFilter: 2000,
    selectedCategory: [],
}
 const productSlice = createSlice({
        name: "products",
        initialState,
        reducers: {
          setSelectedcategory: (state, action) =>{
              state.selectedCategory = action.payload;
          },
          setPriceFilter: (state,action) => {
            state.priceFilter = action.payload;
          }, 
            setSearchQuery: (state,action) => {
                state.searchQuery = action.payload;
            },
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
            },
            setFilteredProducts: (state, action) => {
              state.filteredProducts = state.products.filter((product)=>{
                 const matchSearch = product.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || product.category.toLowerCase().includes(state.searchQuery.toLowerCase()) || product.description.toLowerCase().includes(state.searchQuery.toLowerCase()) ;
                 const matchPrice = product.price <= state.priceFilter;
                 const matchCategory = state.selectedCategory.length === 0 || state.selectedCategory.some((category)=> product.category.toLowerCase() === category.toLowerCase());
                 return matchSearch && matchPrice && matchCategory;
              });
            },
        }
})

export const productReducer = productSlice.reducer;
export const { addToCart, removeFromCart, clearCart , setFilteredProducts , setSelectedcategory, setPriceFilter,setSearchQuery} = productSlice.actions;
export const productSelector = (state) => state.productReducer