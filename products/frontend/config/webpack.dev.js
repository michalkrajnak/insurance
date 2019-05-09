const path = require('path')
const configuration = require('./webpack.config')

module.exports = {
    ...configuration,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist')
    }
}
