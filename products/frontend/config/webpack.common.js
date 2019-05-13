const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: "./public/index.html"
        })
    ]
};
