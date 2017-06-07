const {resolve} = require("path");
var webpack = require("webpack");
module.exports = (env={}) => {
    return {
        entry: {
            vendor: ["react","react-dom","react-router"], //vendor refrence file(s)
            app: "./app" //application code
        },
        output:{
            path: resolve(__dirname, "public"),
            filename: "[name].js",
            chunkFilename: "[name].js"
        },
        context: resolve(__dirname, "myapp"),
        module:{
            loaders: [
                {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/}
            ]
        }
    };
};
