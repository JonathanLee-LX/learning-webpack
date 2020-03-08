const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    // 入口文件
    entry: {
        main: './src/main.js',
        lodash: ['lodash'],
        vue: ['vue']
    },
    // entry: [
    //     path.resolve(__dirname, 'src/main.js'),
    //     // path.resolve(__dirname, 'src/main.js'),
    //     // path.resolve(__dirname, 'src/components/App.vue'),
    // ],
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 9999,
        hot: true,
        // contentBase: path.join(__dirname, 'dist'),
        // publicPath: path.resolve(__dirname, 'dist'),
    },
    // 控制是否生成，以及如何生成source map
    // 使用sourceMapPlugin进行更细粒度的配置
    // 开启source map帮助开发调试
    devtool: 'inline-source-map',
    module: {
        rules: [{
                test: /\.js$/,
                use: [
                    'my-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                    loader: 'style-loader' // creates style nodes from JS strings
                  }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                  }, {
                    loader: 'less-loader' // compiles Less to CSS
                  }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader',
                ]
            },
            {
                test: /\.json$/,
                use: [
                    'json-loader',
                ],
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'src/assets'),
            // 在别名后面增加$符号表示精确匹配，例如:
            'comp$': path.resolve(__dirname, 'src/components')
        }
    },
    plugins: [
        // cleanWebpackPlugin用来清除多余的目录
        new cleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            title: 'learn webpack',
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
            inlineSource: '.(js|css)',
        }),
        // vueLoaderPlugin这个插件主要将其他定义的一系列loader加载进来，
        // 以供vue在分别对不同文件调用不同的loader
        new vueLoaderPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}