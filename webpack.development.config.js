const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),// this line mean that it will create dist folder
        filename: '[name].bundle.js', // it will take name as a dynamically
    },
    resolve: {
        extensions: ['.js', '.json', '.wasm'],
        alias: {
            '@': path.resolve(__dirname, 'src'), // we can use @ instead of . in App.js to import the App.js file
            // Templates: path.resolve(__dirname, 'src/templates/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
        path: 'index.html'
    })],
}
