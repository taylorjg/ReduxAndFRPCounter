const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './client/ng1/js/app.module.js',
    output: {
        path: './server/public/ng1',
        filename: 'bundle.js',
    },
    plugins: [
        new CopyWebpackPlugin([
            { context: './client/ng1', from: '**/*.html' }
        ])
    ],
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint'
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devtool: 'source-map'
};
