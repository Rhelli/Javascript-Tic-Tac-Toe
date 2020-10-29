const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    app: './src/js/main.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
};