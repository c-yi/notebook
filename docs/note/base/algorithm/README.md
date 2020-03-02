#  算法常识

## 分类

> 贪心算法: 局部最优解法

>分治算法: 分成多个小模块，与原问题性质相同

> 动态规划: 每个状态都是过去历史的一个总结

> 回溯法: 发现原先选择不优时，退回重新选择

> 分支限界法

## 时间复杂度

### 常数阶 O(1)

```javascript
let i = 1;
let j = 2;
let n = i +j;
// 无论代码执行多少行,只要没有循环等复杂结构,时间复杂度就都是O(1)
```



### 对数阶 O(log₂ⁿ)

`N=aᕽ(a>0,a≠1)` `x = log₂ⁿ` **a叫做对数的底数,N叫做真数,x 叫做以 a 为底 N 的的对数**

```javascript
let i = 1;
while(i<n){
    i = i * 2
}
// 此时时间复杂度就是log₂ⁿ, 因为i每次都是*2的增长,所以只用运行 x = log₂ⁿ 次
```

### 线性阶 O(n)

```javascript
let j = 0;
for(let i = 1;i <= n;i++){
    j++
}
// 时间复杂度随着n的变化而变化
```

### 线性对数阶O(nlogN)

```javascript
for(let m = 1;m <= n;m++){
    let i = 1;
	while(i<n){
    	i = i * 2;
	}
}
// 将时间复杂度为 logN 的代码循环N遍,那么他的时间复杂度就是N*O(logN) 也就是O(nlogN)
```

### 平方阶O(n²)

```javascript
for(let i = 1;i <= n;i++){
    for(let j = 1;j <= n;j++){
    	...
	}
}
```





## 空间复杂度

## 稳定性
