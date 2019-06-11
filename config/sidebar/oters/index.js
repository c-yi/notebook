const utils = require('../../../utils');

let funny = utils.genSidebar('Funny', ['','代码雨']);
let mood = utils.genSidebar('Mood', ['']);
let read = utils.genSidebar('Read', ['']);
module.exports = {funny, mood, read};
