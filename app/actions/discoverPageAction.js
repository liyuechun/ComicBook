

import { 
    STATR_FETCH_DISCOVER_PAGE_DATA, 
    FETCH_DISCOVER_PAGE_DATA
}  from '../constants/type';

import HttpUtil from '../utils/HttpUtil';

export let fetchDiscoverPageData = (url,params,isLoading) => {
    return (dispatch) => {
        dispatch({
            isLoading,
            type: STATR_FETCH_DISCOVER_PAGE_DATA
        });
        HttpUtil.fetchGet(
            url,
            params,
            (jsonData) => {
                dispatch({
                    type: FETCH_DISCOVER_PAGE_DATA,
                    data: jsonData.result.bookList,
                    isSuccess: true
                });
            },
            (err) => {
                dispatch({
                    type: FETCH_DISCOVER_PAGE_DATA,
                    err,
                    isSuccess: false
                });
            }
        );
    }
}

