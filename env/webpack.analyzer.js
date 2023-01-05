const path = require('path');
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.prod.js');
const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new BundleAnalyzerPlugin()
    ],
});