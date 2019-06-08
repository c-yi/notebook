const css = require('./css');
const vuepro = require('./vue');
const javascript = require('./javascript');
console.log(css);
module.exports = {
    '/note/VUE/': [...vuepro],
    '/note/CSS/': [...css],
    '/note/JavaScript/': [...javascript],
};