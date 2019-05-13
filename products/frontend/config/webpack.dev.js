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
=======
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true
    }
});
