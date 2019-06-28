const utils = require('../../../utils');

let node = utils.genSidebar('node', ['', '常用模块', '数据交互', 'websocket']);
let python = utils.genSidebar('python', ['', '语法']);
let php = utils.genSidebar('php', ['', '语法']);
let database = utils.genSidebar('database', ['']);
module.exports = {node, python, php, database};
