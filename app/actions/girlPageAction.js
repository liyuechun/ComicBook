

import { 
    STATR_FETCH_GIRL_PAGE_DATA, 
    FETCH_GIRL_PAGE_DATA
}  from '../constants/type';

import HttpUtil from '../utils/HttpUtil';

export let fetchGirlPageData = (url,params,isLoading) => {
    return (dispatch) => {
        dispatch({
            isLoading,
            type: STATR_FETCH_GIRL_PAGE_DATA
        });
        HttpUtil.fetchGet(
            url,
            params,
            (jsonData) => {
                dispatch({
                    type: FETCH_GIRL_PAGE_DATA,
                    data: jsonData.result.bookList,
                    isSuccess: true
                });
            },
            (err) => {
                dispatch({
                    type: FETCH_GIRL_PAGE_DATA,
                    err,
                    isSuccess: false
                });
            }
        );
    }
}

