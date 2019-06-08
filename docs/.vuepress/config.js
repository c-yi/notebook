module.exports = {
    base: '/notebook/',
    title: 'Blog Note',// 标题
    sidebarDepth: 2,
    description: 'Just playing around',
    markdown: {lineNumbers: true,},
    /*语言配置*/
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            title: 'VuePress ',
            description: 'Vue 驱动的静态网站生成器'
        },
        '/zh/': {
            lang: 'en-US',
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator'
        }
    },
    serviceWorker: true,
    /*主题配置*/
    themeConfig: {
        lastUpdated: '最近更新于',//最后更新时间
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'c-yi/notebook',
        repoLabel: 'github',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        collapse: true,
        search: true,
        searchMaxSuggestions: 10,
        updatePopup: true,//内容更新
        serviceWorker: {
            updatePopup: {
                message: "有新内容已推送",
                buttonText: "刷新获取"
            }
        },
        /*导航栏*/
        nav: [
            {text: '主页', link: '/'},
            {
                text: '前端',
                // 这里是下拉列表展现形式。
                items: [
                    {text: 'VUE', link: '/note/VUE/'},
                    {text: 'CSS', link: '/note/CSS/'},
                    {text: 'JavaScript', link: '/note/JavaScript/'},
                ]
            },
            {text: '联系我', link: '/contact/'},
            {text: '关于我', link: '/about/'},
        ],
        /*侧边栏*/
        sidebar: {
            '/note/VUE/': [
                '/note/VUE/',
                {
                    title: 'Group 1',
                    children: [
                        'one',
                        'two'
                    ]
                },
                {
                    title: 'Group 2',
                    children: [
                        'one',
                        'two']
                }
            ],
            '/note/CSS/': [
                '/note/CSS/',
                {
                    title: 'Group 1',
                    children: [
                        'one',
                        'two'
                    ]
                },
                {
                    title: 'Group 2',
                    children: [
                        'one',
                        'two']
                }
            ],
            '/note/JavaScript/': [
                '/note/JavaScript/',
                {
                    title: 'Group 1',
                    children: [
                        'one',
                        'two'
                    ]
                },
                {
                    title: 'Group 2',
                    children: [
                        'one',
                        'two']
                }
            ]
        }
    },
    head: [
        ['link', {rel: 'icon', href: '/image/logo.png'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}]
    ],
};