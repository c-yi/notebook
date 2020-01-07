/**
 * 擴展 VuePress 應用
 */

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
