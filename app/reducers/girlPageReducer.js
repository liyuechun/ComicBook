

import {
    STATR_FETCH_GIRL_PAGE_DATA,
    FETCH_GIRL_PAGE_DATA
}  from '../constants/type';



const nameInitialState = {
    data: [],
    isLoading: false,
    isSuccess: false,
    err: null
}


const girlPageReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case STATR_FETCH_GIRL_PAGE_DATA:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            })
        case FETCH_GIRL_PAGE_DATA:
            return Object.assign({}, state, {
                isLoading: false,
                isSuccess: action.isSuccess,
                data: action.data,
                err: action.err
            })
        default:
            return state
    }
}
export default girlPageReducer;