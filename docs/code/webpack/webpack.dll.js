const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');
const {CleanWebpackPlugin} = require('clean-webpack-minApp');//清除多余文件
module.exports = {
    // 入口文件
    mode: "production",
    entry: {
        // 项目中用到该两个依赖库文件
        jquery: ['jquery'],
        vue: ['vue/dist/vue.esm.js', 'vue-router', "vuex"],
        ui: ["element-ui"],
        axios: ['axios']
    },
    // 输出文件
    output: {
        // 文件名称
        filename: '_dll_[name].js',
        // 将输出的文件放到dist目录下
        path: path.resolve(__dirname, 'build/dll'),
        // 存放相关的dll文件的全局变量名称，比如对于jquery来说的话就是 _dll_jquery,
        // 在前面加 _dll是为了防止全局变量冲突。
        library: '_dll_[name]'
    },
    plugins: [
        // 使用插件 DllPlugin
        new DllPlugin({
            // 该插件的name属性值需要和 output.library保存一致，该字段值，
            // 也就是输出的 manifest.json文件中name字段的值。比如在jquery.manifest文件中有 name: '_dll_jquery'
            name: '_dll_[name]',
            // 生成manifest文件输出的位置和文件名称
            path: path.join(__dirname, 'build/manifest', '[name].manifest.json')
        }),
        new CleanWebpackPlugin({
            verbose: true,
        }),
    ]
};
