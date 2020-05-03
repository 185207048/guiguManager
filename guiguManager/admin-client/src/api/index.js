// 后台请求接口
import ajax from '../api/ajax'

export const relogin = (user) => ajax('/login',user,'POST')
export const addshop = (shop) => ajax('/addshop',shop,'POST')
export const getshops = () => ajax('/getshop',{},'POST')
export const deleteshop = (_id) => ajax('/deleteshop',{_id},'POST')
export const updateshop = (shop) => ajax('/updateshop',shop,'POST')