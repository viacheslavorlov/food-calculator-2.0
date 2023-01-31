import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productsSlice} from "./productsSlice";

export const store = configureStore({
    reducer: combineReducers({
        products: productsSlice.reducer
    })
})