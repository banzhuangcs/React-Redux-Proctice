/**
  webpack配置文件
**/

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const __PATH__ = {
  dev: path.resolve(__dirname, 'src'),
  pro: path.resolve(__dirname, 'build')
};

let env = process.env.NODE_ENV;
let config = {
  entry: [ path.join(__PATH__.dev, 'app.js') ],

  module: {
    loaders: [{
      test: /\.jsx?/i,
      exclude: path.join(__PATH__.dev, 'node_modules'),
      loader: 'babel'
    }, {
      test: /\.css/i,
      exclude: path.join(__PATH__.dev, 'node_modules'),
      loader: 'style!css?modules&localIdentName=[name]__[local]-[hash:base64:5]&camelCase'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'welcome to 啪啪啪',
      inject: true,
      template: path.join(__PATH__.dev, 'app.html')
    })
  ]
};

if (env === 'development') {
  Object.assign(config, {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      config.entry.shift()
    ],

    output: {
      publicPath: '/assets/'
    },

    devServer: {
      port: 8080,
      host: 'localhost',
      historyApiFallback: true,
      colors: true,
      hot: true,
      inline: true,
      proxy: {
        '/apples/': {
          target: 'http://localhost:7878',
          secure: false
        }
      }
    },

    devtool: '#eval-source-map',

    plugins: [
      config.plugins.shift(),
      new webpack.HotModuleReplacementPlugin({ multiStep: true })
    ]
  });
}

module.exports = config;
