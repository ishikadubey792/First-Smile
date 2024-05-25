import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateToCart } from "./cartReducer";
import { db } from "../../Config/firebaseInit";
import { getDoc , setDoc, doc } from "firebase/firestore";


const initialState = {
    orders: [],
    totalPrice: 0,
}
const orderSlice = createSlice({
     name: 'order',
     initialState,
     reducers: {
         setToOrders: (state, action) => {
            state.orders = action.payload;
         },
         setTotalPrice: (state, action) => {
            state.totalPrice = state.orders
            .reduce(
                (acc, curr) =>
                  acc +
                  curr.order
                    .map((item) => item.price)
                    .reduce((sum, price) => sum + price, 0),
                0
              )
              .toLocaleString("en-IN")
         }
     }
})

export const fetchAllOrders = createAsyncThunk("order/fetchAllOrders", async(uid , thunkAPI) =>{
    try {
        if(uid){
            const docSnap = await getDoc(doc(db, "/orders", uid));
            if (docSnap.exists()) {
            const docData = docSnap.data();
            thunkAPI.dispatch(setToOrders(docData.orders));
            thunkAPI.dispatch(setTotalPrice())
            } else {
            // return "Document doesn't exist!";
            return null;
            }
        }
    } catch (error) {
        console.log(error);
    }
})

export const checkoutOrders = createAsyncThunk("order/checkOutOrders", async(uid , thunkAPI) =>{
    const userCart = thunkAPI.getState().cartReducer.cart;
    const userOrder = thunkAPI.getState().orderReducer.orders;
    console.log(userOrder);
    const newOrder = { order: userCart, purchaseDate: new Date().toDateString()}
    const updatedOrder = [...userOrder, newOrder];
    console.log(newOrder,updatedOrder);
    thunkAPI.dispatch(updateToOrder({uid:uid, updatedOrder}));
    thunkAPI.dispatch(updateToCart({uid: uid, updatedCart: []}));
})

export const updateToOrder = createAsyncThunk("carts/UpdateToOrder", async(data, thunkAPI)=>{
    const {uid, updatedOrder} = data;
    await setDoc(doc(db, 'orders' , uid),{
         orders: updatedOrder,
         updateTime: new Date().toLocaleDateString(),
    })
    thunkAPI.dispatch(fetchAllOrders(uid));
})

export const orderReducer = orderSlice.reducer;
export const {setToOrders , setTotalPrice} = orderSlice.actions;
export const orderSelector = (state)=> state.orderReducer;