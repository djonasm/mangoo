const join = require('path').join

module.exports = {
  entry: './src/mangoo.js',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'mangoo.js'
  },
  module: {
    loaders: [
      { test: /.js?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
