import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "../../Config/firebaseInit";

const initialState = {
    cart: [],
}

const carrtSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setToCart: (state, action) => {
            state.cart.action.payload;
        },
    }
})

// this function is made for add to cart items to database 
export const  addToCart = createAsyncThunk("carts/addToCart", async(data , thunkAPI)=>{
    const {uid , item} = data;
    if(uid){
        const userCart = thunkAPI.getState().cartReducer.cart;
        const isInCart = userCart.find((item) => item.id === item.id);
        if(isInCart) {
          thunkAPI.dispatch(increaseItemCart({uid , item}));
        }else{
          const newItem = {...item , qty: 1}
          const updatedCart = [...userCart , newItem];
          thunkAPI.dispatch(updateToCart({uid: uid , updatedCart}));
        }
    }
})

// this function is work for gettin all the carts from database 
 export const getCart = createAsyncThunk("carts/getCart", async(data, thunkAPI)=>{
     const docSnap = await getDoc(doc( db, 'carts' , data.uid));
     if(docSnap.exists()){
        thunkAPI.dispatch(setToCart(docSnap.data()));
     }
})

// this function is made for updatin cart in database
export const updateToCart = createAsyncThunk("carts/UpdateToCart", async(data, thunkAPI)=>{
      const {uid, updatedCart} = data;
      await setDoc(doc(db, 'carts' , uid),{
           cart: updatedCart,
           updateTime: new Date().toLocaleDateString(),
      })
      thunkAPI.dispatch(getCart({uid: uid}));
})
export const increaseItemCart = createAsyncThunk("carts//increaseItemCart", async(data, thunkAPI)=>{
     const {uid , item} = data; 
     if(uid){
       const userCart = thunkAPI.getState().cartReducer.cart;
       const isInCart = userCart.find((i) => i.id === item.id);
       const updatedItem = {...isInCart , qty: isInCart.qty+1};
       const updatedCart = userCart.map((p) =>p.id === item.id ? updatedItem : p);
       thunkAPI.dispatch(updateToCart({uid: uid , updatedCart}));
     }
}) 
export const decreaseItemCart = createAsyncThunk("carts//decreaseItemCart" , async(data, thunkAPI)=>{
    const {uid , item} = data;
    if(uid) {
        const userCart = thunkAPI.getState().cartReducer.cart;
        const isInCart = userCart.find((i) => i.id === item.id);
        if(isInCart){
            const updatedItem = {...isInCart, qty: isInCart.qty-1};
            if(isInCart.qty < 1){
                thunkAPI.dispatch(deletecart({uid: uid , item}));
            }else{
                const updatedCart = userCart.map((p) => p.id === item.id? updatedItem : p);
                thunkAPI.dispatch(updateToCart({uid: uid, updatedCart}));
            }
        }
    }
})

export const deletecart = createAsyncThunk("carts/deleteCart" , async(data, thunkAPI)=>{
    const {uid , item} = data;
    if(uid){
        const userCart = thunkAPI.getState().cartReducer.cart;
        const isInCart = userCart.find((i) => i.id === item.id);
        if(isInCart){
            const updatedCart = userCart.filter((p) => p.id!== item.id);
            thunkAPI.dispatch(updateToCart({uid: uid, updatedCart}));
        }
    }
})

export const cartReducer = carrtSlice.reducer;
export const {setToCart, newItemToCart, increase, decrease, removeFromCart} = carrtSlice.actions;
export const cartSelector = (state) => state.cart;
