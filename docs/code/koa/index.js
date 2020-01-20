const MyKoa = require("./MyKoa");
const app = new MyKoa();
const Router = require("./router");
// 第一阶段
/*app.use((ctx) => {
  //ctx.setHeader("Content-Type", "application/json");
  //ctx.end(JSON.stringify({name: "张三"}))
  ctx.body= "kkb"
});*/

// 第二阶段
/*
app.use(async (ctx, next) => {
    ctx.body = "1";
    await next()
});
app.use(async (ctx, next) => {
    ctx.body += '2';
    await next()
});

*/

const router = new Router();
router.get("/index", async (ctx) => {
    ctx.body ="{k:1}"
});
app.use(router.routes());
app.listen(3000);
