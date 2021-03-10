/**
 * Configuration details concerning both the development and production builds.
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
    output: {
        path: paths.build,
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.indexHtml,
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name(resourcePath, resourceQuery) {
                                if (process.env.NODE_ENV === 'development') {
                                    return '[path][name].[ext]';
                                }

                                return '[contenthash].[ext]';
                            },
                        },
                    },
                ],
            },
        ],
    },
};
