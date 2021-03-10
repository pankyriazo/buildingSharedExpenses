/**
 * Configuration details for development builds.
 */

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('./paths');
const configCommon = require('./webpack.config.common');

module.exports = merge(configCommon, {
    entry: {
        vendor: ['react'],
        app: paths.indexJs,
    },
    mode: 'production',
    output: {
        filename: '[name].[contenthash].bundle.js',
    },
    plugins: [
        new TerserWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            discardDuplicates: true,
                            minimize: true,
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        implementation: require('sass'),
                    },
                ],
            },
        ],
    },
});
