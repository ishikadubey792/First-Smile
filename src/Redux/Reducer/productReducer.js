import { createSlice } from "@reduxjs/toolkit";
import products from "../../Data/item.json";

const initialState = {
    products: products,
    filteredProducts: [],
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
export const { setFilteredProducts , setSelectedcategory, setPriceFilter,setSearchQuery} = productSlice.actions;
export const productSelector = (state) => state.productReducer