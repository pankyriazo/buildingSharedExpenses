/**
 * Exports the folder/file paths used in other Webpack configuration files.
 */

const path = require('path');
const fs = require('fs');

const cwd = fs.realpathSync(process.cwd());
const resolveRelativePath = (relativePath) => {
    return path.resolve(cwd, relativePath);
};

module.exports = {
    // Images etc.
    assets: resolveRelativePath('src/assets'),

    // The built application folder.
    build: resolveRelativePath('build'),

    // Webpack config files.
    config: resolveRelativePath('config'),

    // Entry html file.
    indexHtml: resolveRelativePath('src/index.html'),

    // Entry JavaScript file.
    indexJs: resolveRelativePath('src/index.tsx'),

    // App source folder.
    src: resolveRelativePath('src'),
};
