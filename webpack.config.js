const path = require('path');

// Html webpack plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},   // Add exports of a module as style to DOM
                    {loader: 'css-loader'},     // Loads CSS file with resolved imports and returns CSS code
                    {loader: 'sass-loader'}     // Loads and compiles a SASS/SCSS file
                ]
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};