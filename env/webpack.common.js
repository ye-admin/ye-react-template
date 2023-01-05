const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        index: './src/index.tsx',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../public/index.html'),
            favicon: path.resolve(__dirname, '../public/favicon.png')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],
    module: {
        rules: [{
            test: /\.js?$/,
            use: [
                'babel-loader',
            ],
            exclude: /node_modules/,
        }, {
            test: /\.(tsx|ts)?$/,
            use: [
                'babel-loader',
                'ts-loader',
            ],
            exclude: /node_modules/,
        }, {
            test: /\.(less|css)$/i,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'postcss-loader',
                'less-loader',
            ],
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'images/[hash][ext][query]'
            }
        }, {
            test: /\.(eot|ttf|woff|woff2)$/,
            type: 'asset/resource',
            generator: {
                filename: 'fonts/[hash][ext][query]',
            },
        }, ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
    devServer: {
        // static: '../dist',
        hot: true,
        port: 8080,
        historyApiFallback: true,
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    }
};