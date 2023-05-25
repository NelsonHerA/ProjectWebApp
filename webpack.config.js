// const { log } = require("console");
const path = require("path");
// const webpack = require("webpack");

module.exports = {
  entry: {
    home_index: {
      import: "./home/src/index.js",
      filename: "home/static/home/js/index.js"
    },
  },
  mode: "development",
  //mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { "runtime": "automatic" }]
            ]
          }
        }
      },
      {
        test: /\.(css)$/,
        use: ["css-loader"],
      },
    ]
  },
  resolve: { extensions: [".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, ""),
    publicPath: '/static/',
    filename: "ruta_admin/dynamic/[name].js"
  },
};