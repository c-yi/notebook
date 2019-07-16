const utils = require('../../../utils');

let node = utils.genSidebar('node', ['', '常用模块', '数据交互', 'websocket']);
let python = utils.genSidebar('python', ['', '语法']);
let php = utils.genSidebar('php', ['', '语法']);
let java = utils.genSidebar('java', ['','01数据类型','03栈堆方法区','04定义一个标准类','05抽象类','06接口']);
let database = utils.genSidebar('database', ['']);
module.exports = {java, node, python, php, database};
