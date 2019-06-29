const frontend = require('./frontend');
const backend = require('./backend');
const app = require('./app');
const others = require('./oters');
const tools = require('./tools');
module.exports = {
    '/note/frontend/vue/': [frontend.vue],
    '/note/frontend/css/': [frontend.css],
    '/note/frontend/javascript/': [frontend.javascript],
    '/note/frontend/react/': [frontend.react],
    '/note/frontend/html/': [frontend.html],
    '/note/frontend/plugin/': [frontend.plugin],

    '/note/backend/node/': [backend.node],
    '/note/backend/python/': [backend.python],
    '/note/backend/php/': [backend.php],
    '/note/backend/java/': [backend.java],

    '/note/tools/webpack/': [tools.webpack],
    '/note/tools/git/': [tools.git],

    '/note/app/flutter/': [app.flutter],
    '/note/app/reactNative/': [app.reactNative],
    '/note/app/week/': [app.week],

    '/note/others/funny/': [others.funny],
    '/note/others/read/': [others.read],
    '/note/others/mood/': [others.mood],
};