const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ],
    },
    plugins: [
        // uses template and injects bundled js files into specified html
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
    ]
}