const {
    merge
} = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const common = require('./webpack.common')
const {
    PROJECT_PATH,
    SERVER_HOST,
    SERVER_PORT
} = require('../constant')


module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(PROJECT_PATH, './dist'),
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        host: SERVER_HOST,
        port: SERVER_PORT,
        stats: 'errors-only',
        clientLogLevel: 'none',
        compress: true,
        open: false,
        hot: true,
        noInfo: true,
        // proxy: {
        //     '/api': {
        //         target: 'http://222.128.47.170:12680/office/',
        //         changeOrigin: true,
        //         secure: false
        //     }
        // }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})
