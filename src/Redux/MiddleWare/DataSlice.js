import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "./APIActions";

const slice = createSlice({
    name: "data",
    initialState:{
        list:[],
        loading:false
    },

    reducers:{
        dataRequested: (datas, action) => {
            datas.loading = true
        },
        datasReceived : (datas, action) => {
            datas.list = action.payload;
            datas.loading = false
        },
        datasRequestFailed : (datas, action) => {
            datas.loading = false
        }
    }
})

export default slice.reducer

const { dataRequested, datasReceived, datasRequestFailed } = slice.actions

const url = "/expense.json"

export const LoadingData = () => (dispatch) => {
    return dispatch(
        apiCallStart({
            url,
            onStart: dataRequested.type,
            onSuccess:datasReceived.type,
            onError:datasRequestFailed.type
        })
    )
}