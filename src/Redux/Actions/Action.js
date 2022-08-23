import { SEND_DATA, SEND_ALLDATA, DELETE_DATA, EDIT_DATA } from "./Constant"

export const SENDDATA = (item) => {
    return{
        type:SEND_DATA,
        data:item
    }
}

export const SENDALLDATA = (item) => {
    return{
        type:SEND_ALLDATA,
        data:item,
        isHttpsAction : true,
        method: 'POST',
        url:'/expense.json'
    }
}

export const DELETE = (key) => {
    return{
        type:DELETE_DATA,
        data:key,
        isHttpsAction : true,
        method: 'DELETE',
        url:`/expense/${key}.json`
    }
}

export const EDITDATA = (UPDATE_DATA, key) => {
    console.log(UPDATE_DATA)
    return{
        type:EDIT_DATA,
        data:UPDATE_DATA,
        isHttpsAction : true,
        method: 'PATCH',
        url:`/expense/${key}.json`
    }
}