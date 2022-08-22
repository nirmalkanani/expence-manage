import axios from 'axios'
import * as actions from './APIActions'

const DataAPI = ({
    dispatch
}) => (next) => async (action) => {

    const {
        url,
        method,
        data,
        onStart,
        onSuccess,
        onError,
        isHttpsAction
    } = action

    if (!isHttpsAction) return next(action)

    if (onStart) dispatch({
        type: onStart
    })

    next(action);

    try {
        const response = await axios.request({
            baseURL: "https://expense-tracker-fbcff-default-rtdb.asia-southeast1.firebasedatabase.app",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            url,
            method,
            data
        });

        dispatch(actions.apiCallSuccess(response.data))

        if (onSuccess) dispatch({
            type: onSuccess,
            payload: response.data
        })
    } catch (error) {
        dispatch(actions.apiCallFailed(error.message))

        if (onError) dispatch({
            type: onError,
            payload: error.message
        })
    }

}

export default DataAPI