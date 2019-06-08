/*导航栏*/
module.exports = [
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
];