const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {presets: ["@babel/env"]}
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {extensions: ["*", ".tsx", ".ts", ".js", ".jsx", ".html"]},
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "static/bereshit-app.bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    })],
    watch: true
}