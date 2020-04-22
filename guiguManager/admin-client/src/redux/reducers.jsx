import { combineReducers } from 'redux'
import {GET_SUCCESS} from './actions-type'
const inituser = {
    username:'',
    type:''
}

function user(state=inituser,action){
    switch(action.type){
        case GET_SUCCESS:
            return {...action.data}
        default:
            return state
    }
}

export default combineReducers({
    user
})