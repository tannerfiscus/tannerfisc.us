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
    chunkFilename: '[name]-[hash].js',
    filename: '[name]-[hash].js',
    publicPath: '/public/'
  },

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
                    'css-loader!postcss-loader!sass-loader'
                  )
       },
       {
           test: /\.json$/,
           loader: 'json-loader'
       }
    ]
  },

  postcss: [
    autoprefixer({
      browsers: [ 'last 2 versions' ],
      safe: true
    })
  ],

  plugins: [
    new ExtractTextPlugin('style-[hash].css'),
    new AssetsWebpackPlugin({ path: path.join(__dirname, 'build') }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production') }),
    new webpack.DefinePlugin({ 'process.env.SERVER_CLIENT': JSON.stringify('client') }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                booleans: true,
                conditionals: true,
                dead_code: true,
                drop_console: true,
                if_return: true,
                join_vars: true,
                unused: true,
                screw_ie8: true,
                sequences: true,
                warnings: false
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require'],
                keep_fnames: false,
                screw_ie8 : true
            },
            output: {
                comments: false
            }
        })
  ],

  resolve: {
    extensions: [ '', '.js', '.jsx', '.json', '.scss' ],
    modulesDirectories: [ 'node_modules' ]
  }
}
