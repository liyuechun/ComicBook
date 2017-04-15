

import { 
    STATR_FETCH_CHAPTER_PAGE_DATA, 
    FETCH_CHAPTER_PAGE_DATA
}  from '../constants/type';

import HttpUtil from '../utils/HttpUtil';

export let fetchChapterPageData = (url,params,isLoading) => {
    return (dispatch) => {
        dispatch({
            isLoading,
            type: STATR_FETCH_CHAPTER_PAGE_DATA
        });
        HttpUtil.fetchGet(
            url,
            params,
            (jsonData) => {
                dispatch({
                    type: FETCH_CHAPTER_PAGE_DATA,
                    data: jsonData.result.chapterList,
                    isSuccess: true
                });
            },
            (err) => {
                dispatch({
                    type: FETCH_CHAPTER_PAGE_DATA,
                    err,
                    isSuccess: false
                });
            }
        );
    }
}

