import axios from './axios';

//进行搜索区数据的获取
 function querySearchList(){
     return axios.get('')
 }

 export default {querySearchList}