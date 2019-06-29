# websocket

> 高性能,双向的数据传输 
> 兼容到IE5
> 自动的数据解析

## 使用 封装的库 socket.io

### 服务端

> sock.emit('name',data) 主动发送数据
> sock.on('name',data) 接收数据

```js
const http = require('http');
const io = require('socket.io');

//建立普通的 http
let server = http.createServer((req, res) => {

});
server.listen(8080);
// 建立 websocket
let wsServer = io.listen(server);
wsServer.on('connection', sock => {
    sock.on('aaa', function (a, b) {
        console.log(a, b, a + b);//12,5,17
    });
    sock.emit('bbb',10,15)
});
```
### 客户端
```html
<script src="http://localhost:8080/socket.io/socket.io.js"></script>
<script>
    let sock = io.connect('ws://localhost:8080/');
    sock.emit('aaa', 12, 5);
    sock.on('bbb', function (a, b) {
       console.log(a, b, a + b); //10,15,25
    });
</script>
```

## 原生websocket
```html
<script>
// ws 普通协议
// wss 加密协议

</script>
```
> Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
>
> Sec-WebSocket-Key: rj5ygMs3siScAycwEQ0Hig==
>
> Sec-WebSocket-Version: 13
>
> Upgrade: websocket



