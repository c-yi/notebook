const sidebar = require('../../config/sidebar');
const nav = require('../../config/navbar');
const plugins = require('../../config/pluginConfig');

module.exports = {
    base: '/notebook/',
    title: 'Blog Note',// 标题
    sidebarDepth: 3,
    description: 'Just playing around',
    plugins: plugins,
    cache:true,
    markdown: {
        lineNumbers: true  // markdown-it-anchor 的选项
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
                message: '有新内容已推送',
                buttonText: '刷新获取'
            }
        },
        /*导航栏*/
        nav: nav,
        /*侧边栏*/
        sidebar: sidebar
    },
    head: [
        ['link', {rel: 'icon', href: '/image/icon-128x128.png'}],
        ['link', {rel: 'apple-touch-icon', href: '/image/icon-128x128.png'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],//类似于单页面版本控制
        ['link', {rel: 'theme', content: '#FFFFFF'}]
    ]
};
