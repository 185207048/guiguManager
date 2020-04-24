import {GET_SUCCESS,ERROR_MSG} from './actions-type'
import {relogin} from '../api/index'
// 同步action
const errorMsg = (str) => ({type:ERROR_MSG,data:str});              ///错误信息提示
export const getSuccess = (user) => ({type:GET_SUCCESS,data:user});//登录函数


// 异步请求
export const login= (user) =>{
    const {username,password} = user;
    if(!username || !password){
        errorMsg('账号名或密码不能为空');
    }
    if(username.length < 6 || password.length < 6){
        errorMsg('用户名或密码长度不够');
    }

    return async dispatch => {
        const response = await relogin(user);
        const result = response.data;
        if(result.code === 0 ){
            dispatch(getSuccess(result.data));
        }else{
            dispatch(errorMsg(result.msg));
        }
    }
}
