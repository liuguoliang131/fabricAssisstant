const {
    merge
} = require('webpack-merge')
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

const common = require('./webpack.common')
const {
    PROJECT_PATH
} = require('../constant')

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    target: 'browserslist',
    output: {
        publicPath: '/',
        filename: 'js/[name].[contenthash:8].js',
        path: path.resolve(PROJECT_PATH, './dist'),
        assetModuleFilename: 'images/[name].[contenthash:8].[ext]'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].chunk.css',
        }),
        new CompressionPlugin({}),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    compress: {
                        pure_funcs: ['console.log']
                    },
                }
            }),
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 0,
        },
    }
})
