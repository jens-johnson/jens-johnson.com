const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnvWebpackPlugin = require('dotenv-webpack');

const htmlPlugIn = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'public', 'index.html')
});
const dotEnvWebpackPlugin = new DotEnvWebpackPlugin();

module.exports = {
  mode: process.env.ENVIRONMENT || 'development',
  entry: path.resolve(__dirname, 'client/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'main.bundle.js'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      ['~']: path.resolve(__dirname, 'client')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico|pdf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    htmlPlugIn,
    dotEnvWebpackPlugin
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};
