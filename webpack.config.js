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
        ],
    },
    plugins: [
        // uses template and injects bundled js files into specified html
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
    ]
}