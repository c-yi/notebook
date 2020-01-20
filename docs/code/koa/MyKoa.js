const http = require("http");
const context = require("./context.js");
const request = require("./request");
const response = require("./response");


class MyKoa {
    constructor() {
        this.middlewares = []
    }

    listen(...args) {
        const server = http.createServer(async (req, res) => {

            // 创建上下文环境
            const ctx = this.createContext(req, res);
            //合成中间件
            const fn = this.compose(this.middlewares);
            //执行合成函数,传入上下文
             await fn(ctx);
             console.log(ctx.body);
            // 响应
            res.end(ctx.body)
        });
        server.listen(...args);
    }

    use(middleware) {
        this.middlewares.push(middleware)
    }

    compose = (middlewares) => (ctx) => {
        const dispatch = (i) => {
            let fn = middlewares[i];
            return !fn ? Promise.resolve() : Promise.resolve(
                fn(ctx,
                    function next() {
                        return dispatch(i + 1)
                    }
                )
            )
        };

        // 返回这个合成函数
        return dispatch(0)
    };

    // 创建上下文
    createContext = (req, res) => {
        const ctx = Object.create(context);
        ctx.request = Object.create(request);
        ctx.response = Object.create(response);
        ctx.req = ctx.request.req = req;
        ctx.res = ctx.request.res = res;
        return ctx;

    }
}

module.exports = MyKoa;
