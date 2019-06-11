/**
 * 擴展 VuePress 應用
 */
/*import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueECharts from 'vue-echarts' //註冊圖表*/

//import './public/css/index.css' //組件css文件
import codeRain from './components/funny/codeRain'

export default ({
                    Vue, // VuePress 正在使用的 Vue 構造函數
                    options, // 附加到根實例的一些選項
                    router, // 當前應用的路由實例
                    siteData // 站點元數據
                }) => {
    Vue.component(codeRain)
}