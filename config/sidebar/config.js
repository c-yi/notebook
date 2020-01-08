module.exports = {
    fronted: [
        {path: '/note/frontend/', children: ['html', 'css', 'javascript']},
        {path: '/note/app/', children: ['flutter', 'reactnative']},
        {path: '/note/frame/', children: ['react', 'vue', 'plugin']}
    ],
    backend: [
        {path: '/note/backend/', children: ['mysql', 'node', 'python']}
    ],
    base: [
        {path: '/note/base/', children: ['algorithm', 'dataStructure', 'designPattern', 'network']}
    ],
    others: [
        {path: '/note/others/', children: ['funny', 'mood', 'read']}
    ],
    tools: [
        {path: '/note/tools/', children: ['browser', 'git', 'webpack', 'linux']}
    ]
};

