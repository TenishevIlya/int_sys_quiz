const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LinkTypePlugin = require("html-webpack-link-type-plugin")
  .HtmlWebpackLinkTypePlugin;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },

  module: {
    // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      inject: "body",
    }),
    new LinkTypePlugin({
      "*.css": "text/css",
    }),
  ],
  devServer: {
    // configuration for webpack-dev-server
    contentBase: "/src/public", //source of static assets
    port: 3000, // port to run dev-server
  },
};
