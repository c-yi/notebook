const utils = require('../../../utils');

let node = utils.genSidebar('node', ['', '常用模块', '数据交互', 'websocket']);
let python = utils.genSidebar('python', ['', '语法']);
let php = utils.genSidebar('php', ['', '语法']);
let java = utils.genSidebar('java', ['','01数据类型','02栈堆方法区','03定义一个标准类','04抽象类','05接口','06final','07多态','08内部类','09权限修饰符','10常用API','11集合','12异常','13线程']);
let database = utils.genSidebar('database', ['']);
module.exports = {java, node, python, php, database};
