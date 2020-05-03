import {GET_SUCCESS,ERROR_MSG,ADDSHOP_SUCCESS,ADDSHOP_ERROR} from './actions-type'
import {relogin,addshop} from '../api/index'
// 同步action
const errorMsg = (str) => ({type:ERROR_MSG,data:str});              ///错误信息提示
const addShopError = (str) => ({type:ADDSHOP_ERROR, data:str});     //商品添加错误
export const getSuccess = (user) => ({type:GET_SUCCESS,data:user}); //登录函数
const addShopSuccess = (shop) => ({type:ADDSHOP_SUCCESS,data:shop});//商品信息

// 异步请求
export const login= (user) =>{
    const {username,password} = user;
    console.log()
    if(username === '' || password  === ''){
        return errorMsg('账号名或密码不能为空');
    }
    if(username.length < 4 || password.length < 4){
        return errorMsg('用户名或密码长度不够');
    }

    return async dispatch => {
        const response = await relogin(user);
        const result = response.data;
        // console.log(result)
        if(result.code === 0 ){
            // console.log(result.data)
            dispatch(getSuccess(result.data[0]));
        }else{
            dispatch(errorMsg(result.msg));
        }
    }
}

export const insertshop= (shop)=> {             //添加一条记录
    const {shopName,shopBrief,shopCost,shopImg} = shop;
    if(shopName === '' || shopBrief === '' || shopCost === '' || shopImg === ''){
        return addShopError('不能有信息为空')       
    }
    const pattern = /^[0-9]*$/;                                 //正则表达式判断是否为数字
    if(!pattern.test(shopCost)){
        return addShopError('商品价格必须是数字')
    }
    console.log(shop)
    return async dispatch => {
        console.log("shop:"+shop)
        shop.shopImg = '0'
        const response = await addshop(shop);
        const result = response.data;
        if(result.code === 0){
            dispatch(addShopSuccess(result.data));
        }else{
            dispatch(addShopError(result.msg));
        }
    }

}

