var AssetsWebpackPlugin = require('assets-webpack-plugin')
var autoprefixer        = require('autoprefixer')
var ExtractTextPlugin   = require('extract-text-webpack-plugin')
var path                = require('path')
var webpack             = require('webpack')

module.exports = {
  entry: {
    client: [ './client/client.js' ],
    style: [ './app/styles/styles.scss' ]
  },

  output: {
    path: path.join(__dirname, 'build'),
    chunkFilename: '[name].js',
    filename: '[name].js',
    publicPath: '/assets/'
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') }),
    new AssetsWebpackPlugin({ path: path.join(__dirname, 'build') }),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('style.css')
  ],

  module: {
    loaders: [
      {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader?presets[]=es2015&presets[]=react&plugins[]=transform-object-rest-spread'
      },
      {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          loader: 'file-loader'
      },
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader!sass-loader'
                  )
       },
       {
           test: /\.json$/,
           loader: 'json-loader'
       }
    ]
  },

  resolve: {
    extensions: [ '', '.js', '.jsx', '.json', '.scss' ],
    modulesDirectories: [ 'node_modules' ]
  }
}
