const utils = require('../../../utils');

let git = utils.genSidebar('Git', ['', '遇到的坑', '拉取远程分支到本地']);
let webpack = utils.genSidebar('webpack', ['', '优化', '常见loader']);

module.exports = {git, webpack};
