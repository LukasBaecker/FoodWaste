const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const RemovePlugin = require("remove-files-webpack-plugin");


let clientConfig = {
  name: "client",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
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
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              lessOptions: {
                // If you are using less-loader@5 please spread the lessOptions to options directly
                modifyVars: {},
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader",
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
      {
        test: /\.(png|svg|jpg|gif|tif)$/,
        use: [
          { loader: "file-loader", options: { name: "/static/[name].[ext]" } },
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
    }),
    new RemovePlugin({
      before: {
        // expects what your output folder is `dist`.
        test: [
          {
            folder: "./dist",
            method: () => true,
          },
        ],
        exclude: ["./dist/static/"],
      },
    }),
  ],
};

module.exports = { clientConfig};