var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/:id', (ctx, next) => {
    ctx.body = {
        name: 'min',
        atk: 80
    }
    ctx.set({
        'Etag': '1234',
        'Last-Modified': new Date()
    });
    console.log(ctx.params)
    console.log(ctx.querystring)
});



app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(5000)