const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  context: __dirname,
  node: {
    __filename: false,
    __dirname: false
  },
  target: 'node',
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: [path.resolve(__dirname, 'src')]
    }]
  }
}
