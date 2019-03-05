const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

// var MyRouter = require('./route')

// 静态文件
app.use(serve(__dirname + '/public'));
// 请求体解析
app.use(bodyParser());
// 路由
app.use(router.routes()).use(router.allowedMethods());

router.use('/test',MyRouter)

app.listen(666);