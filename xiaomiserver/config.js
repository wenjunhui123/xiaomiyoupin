module.exports = {
    //WEB服务器接口
    PORT: 9999,
    //CROS跨域相关信息
    CROS: {
        ALLOW_ORIGIN: 'http://127.0.0.1:8080',
        ALLOW_METHODS: 'PUT,POST,GET,DELETE,OPTIONS,HEAD',
        HEADERS: 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With',
        CREDENTIALS: true
    },

    //SESSION 存储相关信息
    SESSION: {
        secret: 'WJH',
        saveUninitiaIized: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 30
        }
    }
};