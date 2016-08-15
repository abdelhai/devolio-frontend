module.exports = {
    entry: "./src/app.js",
    output: {
        path: "./build/js",
        filename: "app.js"
    },
    devServer: {
        inline: true,
        port: 9000,
        historyApiFallback: true
    },

    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel",
            query: { presets: ["es2015", "react"] }
        },
        { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
        { test: /\.css$/, loaders: ["style", "css"] }
        ]
    }
}