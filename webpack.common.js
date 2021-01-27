const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("webpack-cleanup-plugin")


let clientConfig = {
  name: "client",
  target: "web",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(json|geojson)$/,
        loader: 'json-loader'
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            //options: { minimize: true }
          },
        ],
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
      {
        test: /\.(png|svg|jpg|gif|tif)$/,
        use: [
          { loader: "file-loader", options: { name: "static/[name].[ext]" } },
        ],
      },
    ],
  },
  plugins: [

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new HtmlWebPackPlugin({
      template: "./src/html/index.ejs",
      favicon: "./src/img/favicon.png",
      title: "FoodWaste",
      inject: false,
    }),
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['!static/**'],
  })
  ],
};

module.exports = { clientConfig};