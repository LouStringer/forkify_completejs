// puts the node package path into the varable path
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // minimum requirement is entry & output
  // where to start the bundling - i.e., where the index.js lives
  entry: ['babel-polyfill', './src/js/index.js'],
  // the final bundle
  output: {
    // must be an absolute package - needs the node package path
    // path.resove() is a method on the node package path
    // gives access to the __dirname variable -> this contains the path of the current working directory
    // then add the extension to the folder the final bundle should go in
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  // this allows the use of webpack dev server to set up alocal server that updates automatocally when saved
  devServer: {
    // the folder where the bundled webpack lives, to give to the server
    contentBase: './dist'
  },
  plugins: [
    // copies the src index.html into the one in the dist folder
    new HtmlWebpackPlugin({
      // the destination file
      filename: 'index.html',
      // the file to copy
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
