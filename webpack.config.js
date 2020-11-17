const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: "./src/app/index.js",
    target: 'node',
    output: {
        // options related to how webpack emits results
        path: path.join(__dirname, 'dist'),
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "[name].bundle.js", // string
        // the filename template for entry chunks
    },
    resolve: {
        fallback: { "path": require.resolve("path-browserify") }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
            test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        options: {
                            name: "[name].[ext]",
                            outputPath: "./images/"
                        },
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/public/index.html',
            inject: 'body'
        }),
    ],
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
}