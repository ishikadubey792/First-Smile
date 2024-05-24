import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "../../Config/firebaseInit";
import toast from "react-hot-toast";

const initialState = {
    cart: [],
    total: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setToCart: (state, action) => {
            state.cart = action.payload;
        },
        setTotal: (state, action) => {
         state.total = state.cart
        .reduce((price, item) => price + item.qty * item.price, 0)
        .toFixed(2);
      },
    }
})

// this function is made for add to cart items to database 
export const  addToCarts = createAsyncThunk("carts/addToCarts", async(data , thunkAPI)=>{
    const {uid , item} = data;
    if(uid){
        const userCart = thunkAPI.getState().cartReducer.cart;
        const isInCart = userCart.find((p) => p.id === item.id);
        if(isInCart) {
          thunkAPI.dispatch(increaseItemCart({uid , item: isInCart}));
        }else{
          const newItem = {...item , qty: 1}
          const updatedCart = [...userCart , newItem];
          console.log(userCart ,updatedCart);
          thunkAPI.dispatch(updateToCart({uid: uid , updatedCart}));
          thunkAPI.dispatch(setTotal());
          toast.success("1x item added");
        }
    }
})

// this function is work for gettin all the carts from database 
 export const getCart = createAsyncThunk("carts/getCart", async(data, thunkAPI)=>{
     const docSnap = await getDoc(doc( db, 'carts' , data.uid));
     if(docSnap.exists()){
        const docData = docSnap.data();
        console.log(docData.cart);
        thunkAPI.dispatch(setToCart(docData.cart));
        thunkAPI.dispatch(setTotal());
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
       toast.success(`${updatedItem.qty}x item added`);
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
                toast.success("1x item decreased");
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
            toast.success("1x item removed");
        }
    }
})

export const cartReducer = cartSlice.reducer;
export const {setToCart, newItemToCart, increase, decrease, removeFromCart,setTotal} = cartSlice.actions;
export const cartSelector = (state) => state.cartReducer;
