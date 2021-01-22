const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

let clientConfig = {
  entry: {
    main: ['./src/index.jsx'],
  },
  output: {
    globalObject: "this",
    filename:"[name].js",
    path: path.join(__dirname, "dist"),
    publicPath: "/FoodWaste/", 
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
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
  // Webpack 4 does not have a CSS minifier, although
  // Webpack 5 will likely come with one
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
}

module.exports = [merge(common.clientConfig, clientConfig)]