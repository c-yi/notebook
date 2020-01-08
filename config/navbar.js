/*导航栏*/
module.exports = [
    {text: '主页', link: '/'},
    {
        text: '前端',
        items: [
            {text: '基础', link: '/note/frontend/'},
            {text: '框架', link: '/note/frame/'},
            {text: '移动端', link: '/note/app/'}
        ]
    },
    {
        text: '基础',
        items: [
            {text: '算法', link: '/note/base/algorithm/'},
            {text: '数据结构', link: '/note/base/dataStructure/'},
            {text: '设计模式', link: '/note/base/designPattern/'},
            {text: '网络', link: '/note/base/network/'}
        ]
    },
    {
        text: '后端',
        items: [
            {text: 'Python', link: '/note/backend/python/'},
            {text: 'node', link: '/note/backend/node/'},
            {text: 'MySQL', link: '/note/backend/mysql/'}
        ]
    },
    {
        text: '工具',
        items: [
            {text: 'webpack', link: '/note/tools/webpack/'},
            {text: 'Git', link: '/note/tools/git/'},
            {text: '浏览器', link: '/note/tools/browser/'},
            {text: 'linux', link: '/note/tools/linux/'}

        ]
    },
    {
        text: '其他',link: '/note/others/'
        /*items: [
            {text: 'read', link: '/note/others/read/'},
            {text: 'funny', link: '/note/others/funny/'},
            {text: 'mood', link: '/note/others/mood/'},
            {text: '关于我', link: '/note/about/'}
            //{text: '联系我', link: '/contact/'},
        ]*/
    }

];
