const path = require("path");
// ESLint webpack plugin
const ESLintPlugin = require("eslint-webpack-plugin");
// Html webpack plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    // From bottom to top
                    { loader: "style-loader" }, // Add exports of a module as style to DOM
                    { loader: "css-loader" }, // Load CSS files with resolved imports and return CSS code
                    { loader: "resolve-url-loader" }, // Rewrites relative paths in url() statements based on the original source file
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true //Enables generation of source maps
                        }
                    } // Load and compile SASS/SCSS files into CSS
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new ESLintPlugin({ extensions: ["js", "jsx"] }),
        new HtmlWebpackPlugin({
            // Generates a solid base html page with all the webpack generated files built in
            template: "./src/01-assets/index.html",
            filename: "index.html",
            inject: "body",
            favicon: "./src/01-assets/favicon.svg"
        })
    ],
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".jsx"]
    },
    devServer: {
        stats: "minimal", // To control what bundle information gets displayed in the console
        historyApiFallback: true // index.html page will be served in place of any 404 responses
    }
};
