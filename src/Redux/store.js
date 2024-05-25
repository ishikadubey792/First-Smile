import { configureStore , combineReducers} from "@reduxjs/toolkit";
import { productReducer } from "./Reducer/productReducer";
import { cartReducer } from "./Reducer/cartReducer";
import { orderReducer } from "./Reducer/shippingReducer";

const rootReducer = combineReducers({productReducer , cartReducer , orderReducer});

const store = configureStore({
  reducer: rootReducer,
});

export default store;