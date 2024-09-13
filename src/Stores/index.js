import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./authSlice"


const allReducers = combineReducers({
    loaderState: loaderReducer
})


export const store = configureStore({
    reducer: allReducers
})