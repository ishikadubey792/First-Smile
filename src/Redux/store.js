import { configureStore , combineReducers} from "@reduxjs/toolkit";
import { productReducer } from "./Reducer/productReducer";

const rootReducer = combineReducers({productReducer});

const store = configureStore({
  reducer: rootReducer,
});

export default store;