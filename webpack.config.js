const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  mode: "development", // Correctly set mode to 'development' here
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:3001/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "FederatedModule",
      filename: "remoteEntry.js",
      exposes: {
        "./FederatedComponent": "./src/FederatedComponent",
      },
      shared: {
        react: { singleton: true, eager: true},
        "react-dom": { singleton: true, eager: true},
      },
    }),
  ],
  devServer: {
    port: 3001,
    hot: true, // Ensure HMR is enabled
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};

