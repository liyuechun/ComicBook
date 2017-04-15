

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
        HttpUtil.fetchGet(
            url,
            params,
            (jsonData) => {
                dispatch(recieveDetailPageDataSuccess(jsonData));
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



const recieveDetailPageDataSuccess = (jsonData) => {

    

    let imageList = jsonData.result.imageList;
    let dataArr = [];
    for (let i = 0; i < imageList.length; i++) {
        dataArr.push(imageList[i].imageUrl);
    }
    console.log("recieveDetailPageDataSuccess");
    console.log(dataArr);
    return {
        type: FETCH_DETAIL_PAGE_DATA,
        data: dataArr,
        isSuccess: true
    }
}