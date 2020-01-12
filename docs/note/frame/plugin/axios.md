# axios

## config

```js
import $ from 'jquery'

export default {
	// 基础url前缀
	//baseURL: CONSTANT.BASE_URL,
	//baseURL: 'https://www.ddcydd.com',
	// 请求头信息
// 请求超时
timeout: 15000,
// “responseType”表示服务器将响应的数据类型 包括 'arrayBuffer', 'blob', 'document', 'json', 'text', 'stream'
// responseType: 'json', // default

//`xsrfCookieName`是要用作 xsrf 令牌的值的cookie的名称
xsrfCookieName: 'XSRF-TOKEN', // default
// `xsrfHeaderName`是携带xsrf令牌值的http头的名称
xsrfHeaderName: 'X-XSRF-TOKEN', // default
//上传的进度事件
onUploadProgress: function (progressEvent) {
},
// 下载的进度事件
onDownloadProgress: function (progressEvent) {
},
proxy: {
	host: '127.0.0.1',
},
processData: false,
contentType: false,
cache: false,
};
```




## index

```js
import axios from 'axios'
import config from './config'
//import {BASE_URL} from "../js/constant";
let BASE_URL = '';
// 统一配置

const AXIOS = axios.create(config);

// 拦截请求
AXIOS.interceptors.request.use(
	(config) => {
		//console.log('请求被拦截', config);
		return config
	},
	(error) => {
		// console.log('请求出现错误');

		return Promise.reject(error)
	});

// 拦截响应
AXIOS.interceptors.response.use(
	(res) => {
		//console.log('响应拦截');
		return res
	},
	(err) => {
		/*console.log('响应失败拦截');
		console.log('ddd', err);
		console.log('ddd', err.Error);*/
		return Promise.reject(err)
	});


const METHOD = function (url, data, method) {
	let formData = new FormData();
	Object.keys(data).map(item => {
		formData.append(item, data[item])
	});
	return AXIOS({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
			'Content-Type': 'multipart/from-data'
		},
		url: BASE_URL + url,
		method,
		data: formData,
	})
};

AXIOS.GET = function (url, data) {
	return AXIOS({
		url: BASE_URL + url,
		method: 'GET',
		params: data,
	})
};
AXIOS.POST = (url, data = {}) => {
	return METHOD(url, data, 'POST')
};
AXIOS.PUT = (url, data) => {
	return METHOD(url, data, 'PUT');
};
AXIOS.DELETE = (url, data) => {
	return METHOD(url, data, 'DELETE');
};

export default AXIOS;
```

