const utils = require('../../../utils');

let node = utils.genSidebar('node', ['', '常用模块', '数据交互']);
let python = utils.genSidebar('python', ['', '语法']);
let php = utils.genSidebar('php', ['', '语法']);
module.exports = {node, python, php};
