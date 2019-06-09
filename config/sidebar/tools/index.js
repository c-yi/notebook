const utils = require('../../../utils');

let git = utils.genSidebar('Git', ['']);
let webpack = utils.genSidebar('webpack', ['', '优化', '常见loader']);
module.exports = {git, webpack};
