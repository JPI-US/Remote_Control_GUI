/* config-overrides.js */
const webpack = require('webpack');
module.exports = function override(config, env) {
    //do stuff with the webpack config...

    mode: 'development'

    config.resolve.fallback = {
        "url" : require.resolve('url'),
        "assert" : require.resolve('assert'),
        "crypto" : require.resolve('crypto-browserify'),
        "http" : require.resolve('stream-http'),
        "https" : require.resolve('https-browserify'),
        "os" : require.resolve('os-browserify/browser'),
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    );

    console.log(config);

    return config;
}