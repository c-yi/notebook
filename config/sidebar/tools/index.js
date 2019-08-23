const utils = require('../../../utils');

let git = utils.genSidebar('Git', ['', '遇到的坑', '拉取远程分支到本地']);
let webpack = utils.genSidebar('webpack', ['', '优化', '常见loader']);
let mysql = utils.genSidebar('MySQL',
    ['', '01Mysql基础', '02mysql命令', '03mysql数据库操作', '04DQL', '05约束', '06多表操作',
        '07三大范式', '08数据库备份与还原', '10多表查询', '11子查询', '12事务', '13用户管理和权限管理']);

module.exports = {git, webpack, mysql};
