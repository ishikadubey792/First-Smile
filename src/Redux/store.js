import { configureStore , combineReducers} from "@reduxjs/toolkit";
import { productReducer } from "./Reducer/productReducer";
import { cartReducer } from "./Reducer/cartReducer";

const rootReducer = combineReducers({productReducer , cartReducer});

const store = configureStore({
  reducer: rootReducer,
});

export default store;