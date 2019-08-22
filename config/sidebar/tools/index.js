const utils = require('../../../utils');

let git = utils.genSidebar('Git', ['', '遇到的坑', '拉取远程分支到本地']);
let webpack = utils.genSidebar('webpack', ['', '优化', '常见loader']);
let mysql = utils.genSidebar('MySQL', ['','01Mysql基础','02mysql命令','03mysql数据库操作','04DQL']);

module.exports = {git, webpack,mysql};
