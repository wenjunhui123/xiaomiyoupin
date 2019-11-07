const express = require('express'),
    route = express.Router();
const {
    handleMD5,
    success,
    getUserInfo
} = require('../utils/tools');

const {
    writeFile
} = require('../utils/promiseFs');

//用户登录
route.post('/login', (req, res) => {
    let {
        account = '',
            password = ''
    } = req.body || {};
    password = handleMD5(password);

    const item = req.$userDATA.find(item => {
        return (item.name === account || item.email === account || item.phone === account) && password === item.password;
    });
    if (item) {
        req.session.userID = parseInt(item.id);
        req.session.name = getUserInfo(item.id, req).power
        req.session.name = getUserInfo(item.id, req).power
        res.send(success(true, {
            name: req.session.name,
            power: req.session.power
        }));
        return;
    }
    res.send(success(false, {
        codeText: 'user name password mismatch!'
    }))
})

//检测是否登录
route.get('/login', (req, res) => {
    const userID = req.session.userID;
    if (userID) {
        res.send(success(true));
        return;
    }
    res.send(success(false, {
        codeText: 'current user is not logged in!'
    }));
})

//退出登录
route.get('/signout', (req, res) => {
    req.session.userID = null;
    req.session.power = null;
    res.send(success(true));
})

//用户注册
route.post('/add', (req, res) => {
    let $userDATA = req.$userDATA,
        passDATA = null;
    let id = $userDATA.length === 0 ? 1 : (parseFloat($userDATA[$userDATA.length - 1]['id']) + 1);
    let a = $userDATA.find(item => {
        return item.name === req.body.name;
    })
    if (a) {
        return res.send(success(false, {
            context: '该账户已被注册！！！'
        }))
    }
    passDATA = Object.assign({
        id,
        name: '',
        password: handleMD5('e807f1fcf82d132f9bb018ca6738a19f'),
        sex: 0,
        email: '',
        phone: '',
        desc: '',
        time: new Date().getTime(),
        state: 0
    }, (req.body || {}));
    $userDATA.push(passDATA);
    writeFile('../json/user.json', $userDATA).then(() => {
        res.send(success(true));
    }).catch(() => {
        res.send(success(false));
    })
})