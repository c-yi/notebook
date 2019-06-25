const utils = require('../../../utils');

let css = utils.genSidebar('CSS', ['', 'css', 'less', 'scss', '媒体查询', '杂记']);
let html = utils.genSidebar('HTML', ['', 'canvas', '视频', '音频', '拖拽']);
let javascript = utils.genSidebar('JavaScript', ['', 'ES6', 'fileReader', '原型', '常见API', '异步']);
let vue = utils.genSidebar('VUE', ['', '源码学习', '语法', '遇到的坑']);
let react = utils.genSidebar('React', ['', '源码学习', '语法', '遇到的坑']);
let plugin = utils.genSidebar('React', ['', 'axios']);
module.exports = {css, html, javascript, vue, react, plugin};
