const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");
var hotMiddlewareScript = "webpack-hot-middleware/client";

let clientConfig = {
  entry: {
    main: ["./src/index.jsx"],
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
    port:9000
  },
  plugins: [
    // OccurrenceOrderPlugin is needed for webpack 1.x only
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
}
}

module.exports = [merge(common.clientConfig, clientConfig)]