import { combineReducers } from 'redux'
import {GET_SUCCESS,ERROR_MSG} from './actions-type'
const inituser = {
    username:'',
    type:'',
    errormsg:''  //错误提示
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

export default combineReducers({
    user
})