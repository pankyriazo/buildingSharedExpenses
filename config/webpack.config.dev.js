/**
 * Configuration details for development builds.
 */

const webpack = require('webpack');
const { merge } = require('webpack-merge');

const paths = require('./paths');
const configCommon = require('./webpack.config.common');

module.exports = merge(configCommon, {
    entry: [paths.indexJs],
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        filename: '[name].bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.module.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                compileType: 'module',
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                exclude: /\.module.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
        ],
    },
});
