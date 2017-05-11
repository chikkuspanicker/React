const webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: './app.js',
    output: {
        filename: 'phonecat.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename : 'phonecat.bundle.map'
    },
    watch: true,
    devtool: "source-map",
    devServer: {
        inline: true,
        port: 8080,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal'
   },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ],
    },
     plugins:[
    new webpack.optimize.UglifyJsPlugin({
      //sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
    })
  ]
};