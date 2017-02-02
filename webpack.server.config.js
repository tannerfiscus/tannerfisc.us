var fs = require('fs')
var path = require('path')

module.exports = {

  entry: path.resolve(__dirname, 'server/server.js'),

  output: {
    filename: 'server.bundle.js'
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },
  
    resolve: {
        extensions: ["", ".js", ".jsx", ".json", ".less"],
        modulesDirectories: ["node_modules"]
    },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&plugins[]=transform-object-rest-spread' }
    ]
  }

}