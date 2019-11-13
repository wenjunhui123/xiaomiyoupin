import axios from './axios';

//进行搜索区数据的获取
function querySearchList() {
    return axios.get('')
}
//注册
function registry(account, password) {
    return axios.post('/user/add', {
        account,
        password
    })
}

function login(account, password) {
    return axios.post('/user/login', {
        account,
        password
    })
}

function banner() {
    return axios.get('/slides/list');
}

function search(){
    return axios.get('./search/list')
}

export default { querySearchList, registry, login, banner,search }