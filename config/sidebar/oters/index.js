const utils = require('../../../utils');

let funny = utils.genSidebar('Funny', ['']);
let mood = utils.genSidebar('Mood', ['']);
let read = utils.genSidebar('Read', ['']);
module.exports = {funny, mood, read};
