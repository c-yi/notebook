module.exports = {
    fronted: [
        {path: '/note/frontend/', children: ['JS', 'HTML', 'CSS']},
        {path: '/note/app/', children: ['flutter', 'reactNative']},
        {path: '/note/frame/', children: ['react', 'vue', 'plugin']}
    ],
    backend: [
        {path: '/note/backend/', children: ['node', 'python', 'mysql']}
    ],
    base: [
        {path: '/note/base/', children: ['dataStructure', 'algorithm', 'designPattern', 'network']}
    ],
    others: [
        {path: '/note/others/', children: ['funny', 'mood', 'read']}
    ],
    tools: [
        {path: '/note/tools/', children: ['webpack', 'git', 'browser', 'linux']}
    ],
    develop: [
        {path: '/note/', children: ['develop']}
    ]
};

