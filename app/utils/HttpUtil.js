/**
 * 网络请求工具类
 * url:请求地址
 * successCallback:成功回调
 * failCallback:失败回调
 */

import { KEY } from '../config';


let HttpUtil = {

    /**
     * Get請求，沒有參數傳null
     */
    fetchGet: (url, params, successCallback, failCallback) => {

         // 1.拼接參數
        url += "?key=" + KEY;
        if (params) {
            var paramsBody = Object.keys(params)
                .reduce((a, k) => {
                    a.push(k + "=" + encodeURIComponent(params[k]));
                    return a;
                }, [])
                .join('&');
            url += "&" + paramsBody;
        }
        console.info("url:"+url);
        fetch(url)
            .then((response) => {
              console.log(response);
              return response.json();
            })
            .then((responseObj) => {
              console.log(responseObj);
              successCallback(responseObj)
            })
            .catch((error) => {
              console.log(error);
              failCallback(error)
            }).done();
    },

    /**
     * POST請求
     */
    fetchPost: (url, params, successCallback, failCallback) => {

        // 1.拼接參數
        var paramsBody = Object.keys(params)
            .reduce((a, k) => {
                a.push(k + "=" + encodeURIComponent(obj[k]));
                return a;
            }, [])
            .join('&');
        // 2.發送請求
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: paramsBody + "&key=" + KEY
        })
            .then((response) => response.json())
            .then((responseObj) => successCallback(responseObj))
            .catch((error) => failCallback(error)).done();
    }
}

export default HttpUtil;
