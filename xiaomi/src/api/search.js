import axios from './axios';

//进行搜索区数据的获取
 function querySearchList(){
     return axios.get('')
 }
//注册
function registry(account,password){
    return axios.post('/user/add',{
        account,
        password
    })
}

export default {querySearchList,registry}