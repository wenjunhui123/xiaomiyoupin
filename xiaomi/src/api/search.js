import axios from './axios';

//进行搜索区数据的获取
 function querySearchList(){
     return axios.get('http://127.0.0.1:8081/src/data/search.json')
 }

 export default {querySearchList}