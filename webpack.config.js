const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");
const {
    DefinePlugin,
} = require("webpack")
const config = require('./config')

module.exports = (env) => {
    console.log(env.REACT_ENV);
    console.log(typeof env.REACT_ENV);
    console.log(config[env.REACT_ENV]);
    const data = config[env.REACT_ENV]
    return {
        mode: data.mode,
        devtool: data.devServer,
        entry: {
            index: './src/index.tsx',
        },
        output: {
            filename: 'js/[name].[contenthash].js',
            path: path.resolve(__dirname, './dist'),
            clean: true,
            publicPath: '/',
            asyncChunks: true
        },
        plugins: [
            new DefinePlugin({
                'process.env.REACT_ENV': JSON.stringify(env.REACT_ENV),
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, './public/index.html'),
                favicon: path.resolve(__dirname, './public/favicon.png')
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
            }),
            ...env.analyzer ? [new BundleAnalyzerPlugin()] : []
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '...'],
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        devServer: {
            hot: true,
            port: 8080,
            historyApiFallback: true,
            open: false,
            proxy: {
                '/api': {
                    target: data.baseURL,
                    pathRewrite: {
                        '^/api': ''
                    },
                },
            },
        },
        optimization: {
            moduleIds: 'deterministic',
            runtimeChunk: true,
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    extractComments: true, //提取注释
                })
            ],
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                    react: {
                        name: 'react',
                        test: module => /react|redux/.test(module.context),
                        chunks: 'initial',
                        priority: 11,
                        enforce: true,
                    },
                    antd: {
                        name: 'antd',
                        test: (module) => {
                            return /ant/.test(module.context);
                        },
                        chunks: 'initial',
                        priority: 11,
                        enforce: true,
                    }
                },
            },
        },
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
                    filename: 'images/[hash][ext][query]',
                    publicPath: '/',
                }
            }, {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]',
                    publicPath: '/',
                },
            }, ]
        }
    }
};