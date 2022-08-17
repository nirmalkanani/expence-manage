import { SEND_DATA } from "../Actions/Constant"

const INITIAL_STATE = {
    expencesData:[]
}

export const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEND_DATA:
            return {
                ...state,
                expencesData: [...state.expencesData, action.data]
            }
            default:
                return state
    }

}   