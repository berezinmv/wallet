let path = require("path");

module.exports = {
    entry: "./src/entry.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "public/js")
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/, loader: "babel-loader"
            },
            {
                test: /\.css/, loader: "style-loader!postcss-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};