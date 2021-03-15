const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const HomeRoutes = require('./routers/home.router');
const PostRoutes = require('./routers/post.route');
const app = new Koa();
/*
app.use(ctx => {
    ctx.body = 'Hello World';
});
 */
app.use(HomeRoutes.routes()).use(HomeRoutes.allowedMethods());
app.use(PostRoutes.routes()).use(PostRoutes.allowedMethods());

app.use(bodyParser());

app.listen(3000);

console.log('Application is running on port 3000');