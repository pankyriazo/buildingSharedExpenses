/**
 * Runs a local development server.
 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const configDev = require('./webpack.config.dev');

const PORT = 3000;
const HOST = '127.0.0.1';

const compiler = webpack(configDev);

const options = Object.assign({}, configDev.devServer, {
    host: HOST,
    port: PORT,
    hot: true,
    overlay: {
        warnings: false,
        errors: true,
    },
    quiet: false,
    noInfo: false,
    after: () => {
        process.stdout.write(`Development server is runnning at http://${HOST}:${PORT}\n`);
    },
});

const server = new WebpackDevServer(compiler, options);

server.listen(PORT, HOST, () => {});
