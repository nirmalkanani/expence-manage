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

// base : https://expense-tracker-fbcff-default-rtdb.asia-southeast1.firebasedatabase.app/