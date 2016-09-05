/**
 * Created by Haider Siddiq Bilas on 21-Jul-16.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.ts',
    output: {
        path: path.resolve(__dirname, 'javascript'),
        filename: 'main.bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};