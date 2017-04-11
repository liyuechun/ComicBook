

import { 
    STATR_FETCH_DETAIL_PAGE_DATA, 
    FETCH_DETAIL_PAGE_DATA
}  from '../constants/type';

import HttpUtil from '../utils/HttpUtil';

export let fetchDetailPageData = (url,params,isLoading) => {
    return (dispatch) => {
        dispatch({
            isLoading,
            type: STATR_FETCH_DETAIL_PAGE_DATA
        });
        return HttpUtil.fetchGet(
            url,
            params,
            (jsonData) => {
                dispatch(recieveData(jsonData));
            },
            (err) => {
                dispatch({
                    type: FETCH_DETAIL_PAGE_DATA,
                    err,
                    isSuccess: false
                });
            }
        );
    }
}

let recieveData = (jsonData) => {

    let imageList = jsonData.result.imageList;
    let imageArr = [];
    for (let i = 0; i < imageList.length; i++) {
        let imageObj = imageList[i];
        imageArr.push(imageObj.imageUrl);
    }

    return {
        type: FETCH_DETAIL_PAGE_DATA,
        data: imageArr,
        isSuccess: true
    }
}


