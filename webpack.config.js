const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const hotMiddlewareScript = "webpack-hot-middleware/client?reload=true";

const webConfig = {
  mode: "development",
  entry: [hotMiddlewareScript, "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: [
          // {loader: 'style-loader'},
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff)$/,
        loader: "url-loader?limit=8000&name=images/[name].[ext]",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "!!raw-loader!" + path.resolve("src", "index.html"),
      filename: path.resolve("src", "server", "views", "index.ejs"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  //   devServer: {
  //     historyApiFallback: true,
  //     hot: true,
  //     port: 3000,
  //  }
};

const serverConfig = {
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  entry: "./src/server/server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: [
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              onlyLocals: true,
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff)$/,
        loader: "url-loader?limit=8000&name=images/[name].[ext]",
      },
    ],
  },
};

module.exports = [webConfig, serverConfig];
