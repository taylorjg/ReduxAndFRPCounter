const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './client/ng2/main.ts',
    output: {
        path: './server/public/ng2',
        filename: 'bundle.js',
    },
    plugins: [
        new CopyWebpackPlugin([
            { context: './client/ng2', from: '**/*.html' }
        ])
    ],
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts'
        }]
    },
    devtool: 'source-map'
}
