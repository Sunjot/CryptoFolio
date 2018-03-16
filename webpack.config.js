const path = require('path');

var APP_DIR = path.resolve(__dirname, './client');
var BUILD_DIR = path.resolve(__dirname, './build');

module.exports = {
  mode: 'development',

  entry: APP_DIR + '/index.js',

  output: {
    filename: 'js/bundle.js',
    path: BUILD_DIR
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0'] // Deals with JSX and ES6
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "/build"),
    port: 8080,
    historyApiFallback: true
  }
};
