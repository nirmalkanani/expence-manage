import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import DataAPI from "./Redux/MiddleWare/DataAPI";
import combineData from "./Redux/Reducers/CombineReducers";


export const store = configureStore({

    reducer : combineData,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(DataAPI)
})