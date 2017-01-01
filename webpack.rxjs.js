const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './client/rxjs/app.js',
    output: {
        path: './server/public/rxjs',
        filename: 'bundle.js',
    },
    plugins: [
        new CopyWebpackPlugin([
            { context: './client/rxjs', from: '**/*.html' }
        ])
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}
