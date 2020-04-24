// 后台请求接口
import ajax from '../api/ajax'

export const relogin = (user) => ajax('/login',user,'POST')