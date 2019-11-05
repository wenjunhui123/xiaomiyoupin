let express = require('express');
let app = express();
app.listen(9999);
let path = require('path');
let session = require('express-session');
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('resource'));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'wenjunhui'
}));
//中间件 允许跨域
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if(req.method == 'OPTIONS') res.send();else next();
})
let id = '';
//中间件 处理传进来的分类 id


