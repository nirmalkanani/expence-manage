import { configureStore } from "@reduxjs/toolkit";
import combineData from "./Redux/Reducers/CombineReducers";

export const store = configureStore({

    reducer : combineData,
    
})