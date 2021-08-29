const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let buildMode = process.env.BUILD_MODE
let buildPath = path.join(__dirname, "build");

module.exports = {
    mode: buildMode,
    entry: "./src/index.tsx",
    devtool: buildMode === "development" ? "source-map" : false,
    output: {
        publicPath: '/build',
        path: buildPath,
        filename: "index.js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".scss"],
        alias: {
            src: path.resolve(__dirname + "/src"),
            assets: path.resolve(__dirname + "/assets"),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /(\.css|\.scss)$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            injectType: 'singletonStyleTag',
                            attributes: {
                                type: 'text/css'
                            }
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: "[name]_[local]_[hash:base64:5]"
                            },
                        }
                    },
                    {
                        loader: "sass-loader"
                    }

                ]
            },
            {
                test: /(\.png|\.jpg|\.gif)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: buildPath,
        compress: true,
        host: "127.0.0.1",
        port: 8080
    }
};

