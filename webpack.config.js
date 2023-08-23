'use strict'

const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

const port = process.env.PORT || 3000;

module.exports = {
    mode: "development",

    resolve: {
        fallback: {
            assert: require.resolve('assert'),
            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            stream: require.resolve('stream-browserify'),
        },
    },

    entry: "./src/index.js",
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
            test: /\.jpe?g|png$/,
            exclude: /node_modules/,
            use: ["url-loader", "file-loader"]
        },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: true
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser.js',
            Buffer: ["buffer", "Buffer"],
          }),
    ]
};