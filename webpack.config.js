const path = require('path');

// Html webpack plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
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
                use: [
                    'babel-loader',
                    'eslint-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [ // From bottom to top
                    {loader: 'style-loader'},   // Add exports of a module as style to DOM
                    {loader: 'css-loader'},     // Load CSS files with resolved imports and return CSS code
                    {loader: 'sass-loader'}     // Load and compile SASS/SCSS files into CSS
                ]
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig // Generates a solid base html page with all the webpack generated files built in. 
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        stats: 'minimal' // To control what bundle information gets displayed in the console
    }
};