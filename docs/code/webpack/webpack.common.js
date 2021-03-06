let path = require('path'); //
let MiniCssExtractPlugin = require('mini-css-extract-plugin'); //生成link标签的形式引入到页面
let webpack = require('webpack'); //引入webpack
let VueLoaderPlugin = require('vue-loader/lib/plugin');
let HtmlWebpackPlugin = require('HTML-webpack-minApp');
let HappyPack = require('happypack');
let DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //檢測打包體積

module.exports = {
    output: {
        filename: 'js/bundle.[hash].js',  //打包后的文件名,中间加hash值每次生成不同的文件,避免缓存问题
        path: path.resolve(__dirname, 'build'), // 路径必须是绝对路径
        //publicPath: "http://localhost:4040"
        chunkFilename: 'js/[name].[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.HTML', // 以此文件为模板
            filename: 'tools.js.HTML',  // 打包后的文件名
            hash: true,
            minify: { // 压缩配置
                removeAttributeQuotes: true, // 删除双引号
                collapseWhitespace: true, // 折叠成一行
            }
        }),
        new DllReferencePlugin({
            // jquery 映射到json文件上去
            manifest: require('./build/manifest/jquery.manifest.json')
        }),
        new DllReferencePlugin({
            // vue 映射到json文件上去
            manifest: require('./build/manifest/vue.manifest.json')
        }),
        new MiniCssExtractPlugin({filename: 'css/[name].[hash].css', chunkFilename: "css/[name].[hash].css"}),
        new webpack.ProvidePlugin({//在每個模塊中都注入$
            $: 'jquery'
        }),
        new webpack.HashedModuleIdsPlugin(),
        /*vue插件*/
        new VueLoaderPlugin(),
        // 多线程打包
        new HappyPack({
            id: 'js',
            use: [{
                loader: 'babel-loader',// 把 es6 转化成es5
                options: {
                    presets: ['@babel/preset-env',],
                    plugins: [
                        ["@babel/minApp-proposal-decorators", {"legacy": true}],
                        ["@babel/minApp-proposal-class-properties", {"loose": true}],
                        "@babel/minApp-syntax-dynamic-import",
                        "@babel/minApp-transform-runtime"
                    ]
                },
            }],
            //共享进程池
            //threadPool: happyThreadPool
        }),
        //检测打包体积
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsOptions: {source: false}
        }),
    ],
    optimization: { // 优化项
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                common: { //公共模块
                    chunks: 'initial',
                    minChunks: 1,
                    priority: -15,
                },
                default: {
                    minChunks: 1,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
    },
    // externals: {jquery:"$"},
    module: {
        noParse: /jquery/,// 不去解析jquery中的依赖项
        rules: [
            {// 处理 html圖片 文件
                test: /\.html$/, use: {loader: "HTML-withimg-loader"}
            },
            {// 处理 圖片 文件
                test: /\.(jpg|png|gif|bmp|jpeg|webp)$/,
                exclude: /node_modules/,
                use: {loader: "url-loader", options: {limit: 100 * 1024, outputPath: '/img/'}}
            },
            {// 处理 普通 css 文件
                test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {// 处理 普通 less 文件
                test: /\.less$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']//把less转化成css
            },
            { // 处理字体文件
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        name: "[name]-[hash:5].min.[ext]",
                        limit: 5000,
                        publicPath: "/fonts/",
                        outputPath: "/fonts/"
                    }
                }]
            },
            {// 处理 普通 scss 文件
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // 将 JS 字符串生成为 style 节点
                    "css-loader", // 将 CSS 转化成 CommonJS 模块
                    'postcss-loader',
                    "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
                ],
            },
            { //處理VUE
                test: /\.vue$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, "src"),
                use: ['vue-loader'],
            },
            { // 处理 普通 js文件
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                include: path.resolve(__dirname, "src"),
                use: 'HappyPack/loader?id=js'
            }
        ]
    },
    resolve: {
        alias: {//确定vue的构建版本
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('src'), // 路径映射
            '~': path.resolve('src/public/css'),
            components: './components/'
        },
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['*', '.js', '.css', '.vue', '.json', '.jsx']
    }
};
