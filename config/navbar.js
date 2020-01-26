/*导航栏*/
module.exports = [
    {text: '主页', link: '/'},
    {
        text: '计科基础',
        items: [
            {text: '数据结构', link: '/note/base/dataStructure/'},
            {text: '算法', link: '/note/base/algorithm/'},
            {text: '设计模式', link: '/note/base/designPattern/'},
            {text: '网络', link: '/note/base/network/'}
        ]
    },
    {
        text: '语言',
        items: [
            {text: '前端', link: '/note/frontend/'},
            {text: '框架', link: '/note/frame/'},
            {text: '移动端', link: '/note/app/'},
            {text: '后端', link: '/note/backend/'}

        ]
    },
    {
        text: '杂记',
        items: [
            {text: '遇到的坑', link: '/note/develop/'},
            {text: '工具', link: '/note/tools/'},
            {text: '其他', link: '/note/others/'}
        ]
    }
    /*{
        text: '其他', link: '/note/others/',
        items: [
            {text: 'read', link: '/note/others/read/'},
            {text: 'funny', link: '/note/others/funny/'},
            {text: 'mood', link: '/note/others/mood/'},
            {text: '关于我', link: '/note/about/'}
            //{text: '联系我', link: '/contact/'},
        ]
    }*/
];
