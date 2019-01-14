// puts the node package path into the varable path
const path = require('path');

module.exports = {
  // minimum requirement is entry & output
  // where to start the bundling - i.e., where the index.js lives
  entry: './src/js/index.js',
  // the final bundle
  output: {
    // must be an absolute package - needs the node package path
    // path.resove() is a method on the node package path
    // gives access to the __dirname variable -> this contains the path of the current working directory
    // then add the extension to the folder the final bundle should go in
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  //mode: 'development'; //makes code faster for development - moved into a script in the package.json
}
