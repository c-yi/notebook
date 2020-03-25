# redis

## 启动 

> Redis根目录的cmd，执行命令  **redis-server redis.windows.conf**

> redis-cli.exe -p 6379 在6379 端口进入redis

```shell
# 查询所有的 key
keys * 
# 这只key name的value为张三 过期时间为10s
setex name 10 "张三" 
# 获取某一个键的值
get key 
# ttl 获取过期时间
ttl key
```

