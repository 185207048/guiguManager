/**
 * ajax模块
 */
import axios from 'axios'
export default function ajax(url,data={},type){
    if(type === 'POST'){
        return axios.post(url,data)
    }else{
            let paramStr='';
            Object.keys(data).forEach(key=>{
                paramStr += key + '=' +data[key] + '&'
            });
            if(paramStr){
                paramStr.substring(0,paramStr.length-1);
            }
            return axios.get(url + '?' + paramStr);
    }
}