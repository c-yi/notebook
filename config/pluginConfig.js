module.exports = [
    '@vuepress/nprogress',
    [
        'vuepress-plugin-mathjax',
        {
            target: 'svg',
            macros: {
                '*': '\\times'
            }
        }
    ],
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: '更新新内容啦',
            buttonText: '去刷新吧!'
        }
    }],
    '@vuepress/back-to-top',
    ['vuepress-plugin-helper-live2d', {
        live2d: {
            // 是否启用(关闭请设置为false)(default: true)
            enable: true,
            // 模型名称(default: hibiki)>>>取值请参考：
            // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
            model: 'shizuku',//'hibiki',// 'z16'
            display: {
                position: 'left', // 显示位置：left/right(default: 'right')
                width: 135, // 模型的长度(default: 135)
                height: 300, // 模型的高度(default: 300)
                hOffset: 240, //  水平偏移(default: 65)
                vOffset: 0 //  垂直偏移(default: 0)
            },
            mobile: {
                show: false // 是否在移动设备上显示(default: false)
            },
            react: {
                opacity: 1 // 模型透明度(default: 0.8)
            }
        }
    }]
];
