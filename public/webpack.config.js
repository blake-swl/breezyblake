
const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
// require("dotenv").config();

module.exports = {
  entry: path.resolve('./src'),
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: [/\.css$/, /\.scss$/],
        loader: ['style-loader', 'css-loader', 'sass-loader'],
        
      },
      {
        test: /\.(gif|png|jpe?g|pdf|mp4|ttf)$/i,
        loader: 'file-loader',
        options: {
          esModule: false
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env'
    }),
    new webpack.DefinePlugin({
      DEBUG: process.env.NODE_ENV !== 'production',
          'process.env': {
              'NODE_ENV': JSON.stringify(process.env.NODE_ENV || "development"),
              'REACT_APP': JSON.stringify(process.env.REACT_APP)}}),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  mode: 'development',
  optimization: {
    minimize: true
  },
}