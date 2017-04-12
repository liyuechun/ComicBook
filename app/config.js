
import {  
    Platform
} from 'react-native';

/**
 * 运行项目注意事项
 * 1、请移步：https://www.juhe.cn/docs/api/id/163
 * 2、注册账号
 * 3、申请数据,免费可以访问1000次，如果想花钱，可以花99元买20000次，
 * 不想花钱，直接换个手机号再注册申请即可
 * 4、把申请的key替换掉下面的key
*/


/**
 * 备用key
 * 8f28c126609a563c7ce16f6a83369459 
 * ed273dc45c5042836181c2356b81db63 
*/

/**
 * 将你申请的key替换掉下面的key
 */
export const KEY = "8f28c126609a563c7ce16f6a83369459";




/**
 * Android端是否以抽屉样式展示
 */
const SHOW_ANDROID_DRAWER = true;
// const SHOW_ANDROID_DRAWER = false;

/**
 * iOS端是否以抽屉样式展示
 */
// const SHOW_IOS_DRAWER = true;
const SHOW_IOS_DRAWER = false;

export const IS_TAB_STYLE = Platform.OS === 'ios' && !SHOW_IOS_DRAWER || Platform.OS !== 'ios' && ! SHOW_ANDROID_DRAWER;



