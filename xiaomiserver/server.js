const CONFIG = require('./config'),
      session = require('express-session'),
      bodyParser = require('body-parser');

//CREATE SERVER
const express = require('express'),
      app = express();
app.listen(CONFIG.PORT,()=>{
    console.log(`THE WEB SERVER IS CREATE SUCCESSED AND IS LISTENING TO THE PORT:${CONFIG.PORT}`);
});

//middle ware
app.use((req,res,next)=>{
 const {
     ALLOW_ORIGIN,
     ALLOW_METHODS,
     HEADERS,
     CREDENTIALS
 } = CONFIG.CROS;
 res.headerr("Access-Control-Allow-Origin",ALLOW_ORIGIN);
 res.header("Access-Control-Allow-Credentials",CREDENTIALS);
 res.header("Access-Control-Allow-Headers",HEADERS)
res.header("Access-Control-Allow-Methods",ALLOW_METHODS);
req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!'):next();
});
app.use(session(CONFIG.SESSION));
app.use(bodyParser.urlencoded({
    extended:false
}));

/* QUERY DATA */
const {
    readFile
} = require('./utils/promiseFs');

const {
    filterInvalid
} = require ('./utils/tools');

app.use(async (req,res,next)=>{
req.$userDATA = filterInvalid(JSON.parse(await readFile('./json/user.json')));
next();
})

/* 路由匹配 */

app.use('/user',require('./routes/user'));

app.use((req,res)=>{
  res.status(404);
  res.send('NOT FOUND')
})

