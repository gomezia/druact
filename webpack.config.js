var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "app");
var INDEX = path.resolve(__dirname, "www");

var config = {
  cache: true,
  entry: DEV + "/main.jsx",
  output: {
    path: OUTPUT,
    filename: "app.js"
  },
  devServer: {
    inline: true,
    contentBase: INDEX,
    port: 8100
  },
  module: {
    loaders: [{
        include: DEV,
        loader: "babel-loader",
    }]
  }
};

module.exports = config;
