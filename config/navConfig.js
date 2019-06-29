/*导航栏*/
module.exports = [
    {text: '主页', link: '/'},
    {
        text: '前端',
        items: [
            {text: 'html', link: '/note/frontend/html/'},
            {text: 'CSS', link: '/note/frontend/css/'},
            {text: 'javascript', link: '/note/frontend/javascript/'},
            {text: 'vue', link: '/note/frontend/vue/'},
            {text: 'react', link: '/note/frontend/react/'},
            {text: 'plugin', link: '/note/frontend/plugin/'},
        ]
    },
    {
        text: '后端',
        items: [
            {text: 'Python', link: '/note/backend/python/'},
            {text: 'PHP', link: '/note/backend/php/'},
            {text: 'node', link: '/note/backend/node/'},
            {text: 'Java', link: '/note/backend/java/'},
        ]
    },
    {
        text: '工具',
        items: [
            {text: 'webpack', link: '/note/tools/webpack/'},
            {text: 'Git', link: '/note/tools/git/'},
        ]
    },
    {
        text: '移动应用',
        items: [
            {text: 'Flutter', link: '/note/app/flutter/'},
            {text: 'Week', link: '/note/app/week/'},
            {text: 'reactNative', link: '/note/app/reactnative/'},
        ]
    },
    {
        text: '其他',
        items: [
            {text: 'read', link: '/note/others/read/'},
            {text: 'funny', link: '/note/others/funny/'},
            {text: 'mood', link: '/note/others/mood/'},
        ]
    },
   /* {text: '联系我', link: '/contact/'},
    {text: '关于我', link: '/about/'},*/
];