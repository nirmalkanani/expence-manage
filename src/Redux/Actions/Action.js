import { SEND_DATA } from "./Constant"

export const SENDDATA = (item) => {
    return{
        type:SEND_DATA,
        data:item
    }
}