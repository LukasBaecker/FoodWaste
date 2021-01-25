const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let clientConfig = {
  entry: {
    main: ["./src/index.jsx"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
    port:9000
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      use: ["MiniCssExtractPlugin.loader,", "css-loader"],
    },
    {
      test: /\.(scss)$/,
      use: [
        {
          loader:MiniCssExtractPlugin.loader,
        },
        {
          loader: "css-loader",
        },
        {
          loader: "postcss-loader",
          options: {
            plugins: function () {
              return [require("autoprefixer")];
            },
          },
        },
        {
          loader: "sass-loader",
        },
      ],
    },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
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