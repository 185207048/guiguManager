import { combineReducers } from 'redux'
import {GET_SUCCESS,ERROR_MSG,ADDSHOP_ERROR,ADDSHOP_SUCCESS} from './actions-type'
const inituser = {
    _id:'',       //用户id
    username:'',  //用户姓名
    type:'',      //用户级别
    header:'',    //用户头像
    errormsg:''  //错误提示
}

const initshop = {
    _id:'',        //商品id
    shopName:'',   //商品名称
    shopCost:'',   //商品价格
    shopBrief:'',  //商品简介
    shopImg:'',    //商品图片
    shopOrder:'',   //商品订单
    errormsg:''    //返回的错误信息
}

function user(state=inituser,action){
    switch(action.type){
        case GET_SUCCESS:
            return {...action.data}
        case ERROR_MSG:
            return {errormsg:action.data}
        default:
            return state
    }
}

function shop(state=initshop,action){
    switch(action.type){
        case ADDSHOP_SUCCESS:
            return {...action.data}
        case ADDSHOP_ERROR:
            return {errormsg:action.data}
        default:
            return state
    }
}

export default combineReducers({
    user, shop
})