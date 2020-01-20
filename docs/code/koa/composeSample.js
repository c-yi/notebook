/* 初级版 compose
const add = (x, y) => x + y;

const square = x => x * x;
const compose = (...[first, ...other]) => (...args) => {
  let ret = first(...args);
  other.forEach(fn => {
    ret = fn(ret)
  });
  return ret
};
const fn=compose(add,square);

console.log(fn(3,5));
*/

async function fn1(next) {
    console.log('fn11');
    await next();
    console.log('end fn11')
}

async function fn2(next) {
    console.log('fn22');
    await delay();
    await next();
    console.log('end fn22')
}

function fn3(next) {
    console.log('fn33')
}

function delay() {
    console.log("delay");
    return Promise.resolve(
        setTimeout(() => console.log("delay2"), 3000)
    )
}

const middlewares = [fn1, fn2, fn3];
const compose = (middlewares) => () => {
    // 将 middlewares 函数数组 合成一个嵌套的异步函数
    const dispatch = (i) => {
        let fn = middlewares[i];
        // 判断 这个 fn 存不存在(是不是最后一个),
        // 如果是就返回空的 Promise.resolve() ,
        // 如果不是,说明后面还有需要next()的中间件
        return !fn ? Promise.resolve() : Promise.resolve(
            fn(
                function next() {
                    return dispatch(i + 1)
                }
            )
        )
    };

    // 返回这个合成函数
    return dispatch(0)
};


const finalFn = compose(middlewares);
finalFn();
