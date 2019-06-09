const utils = require('../../../utils');

let flutter = utils.genSidebar('Flutter', ['', 'dart', 'flutter']);
let reactNative = utils.genSidebar('ReactNative', ['', 'reactNative']);
let week = utils.genSidebar('WEEK', ['', 'week']);
module.exports = {flutter, reactNative, week};
