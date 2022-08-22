import { SEND_DATA } from "./Constant"

export const SENDDATA = (item) => {
    return{
        type:SEND_DATA,
        data:item
    }
}

export const SENDALLDATA = (item) => {
    return{
        type:"ADD_ALLDATA",
        data:item,
        isHttpsAction : true,
        method: 'POST',
        url:'/expense.json'
    }
}

export const DELETE = (key) => {
    return{
        type:"DELETE_DATA",
        data:key,
        isHttpsAction : true,
        method: 'DELETE',
        url:'/expense.json'
    }
}