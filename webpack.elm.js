const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './client/elm/index.js',
    output: {
        path: './server/public/elm',
        filename: 'bundle.js',
    },
    plugins: [
        new CopyWebpackPlugin([
            { context: './client/elm', from: '**/*.html' }
        ])
    ],
    module: {
        loaders: [{
            test: /\.elm$/,
            exclude: [/elm-stuff/, /node_modules/],
            loader: 'elm-webpack'
        }]
    }
}
