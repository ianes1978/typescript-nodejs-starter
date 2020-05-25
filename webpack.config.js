const path = require('path');
const { NODE_ENV = 'production' } = process.env;
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  watch: NODE_ENV === 'development',
  entry: './src/server.js',
  mode: NODE_ENV,
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
  plugins: [new CopyPlugin({ patterns: [{ from: './src/public', to: 'public/' }] })],
};
