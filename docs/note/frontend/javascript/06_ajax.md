# 原生ajax
```js
let formData = new formData();
let xhr = new XMLHttpRequest()
xhr.open(form.method,form.action,true) //请求方式,请求地址,是否异步
xhr.send(formData);
xhr.onreadystatechange=function(){
    if (xhr.readyState===4){
        if (xhr.status===200){
            console.log('请求成功')
        }else{
            console.log('请求失败')
        } 
    }
}
```
