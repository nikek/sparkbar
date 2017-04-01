var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/SparkBar.jsx',
  output: {
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'd3-scale': 'd3-scale'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
};
