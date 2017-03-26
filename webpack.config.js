const path = require('path');
const merge = require('webpack-merge');
const parts = require('./libs/webpack/');

let config;

const paths = {
  app: path.resolve(__dirname, 'app'),
  dist: path.resolve(__dirname, 'dist'),
};

const common = merge(
  {
    entry: paths.app,
    output: {
      filename: 'app.js',
      path: paths.dist,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            'babel-loader?cacheDirectory',
            //'react-hot-loader/webpack',
          ],
          include: path.resolve(__dirname, 'app', 'index.js'),
        },
      ],
    },
    devServer: {
      hot: true,
      inline: true,
    },
  },
  parts.scssLoader(),
  parts.imageLoader(),
  parts.fontLoader()
);

switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      {
        devtool: 'source-map',
      }
    );
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map',
      }
    );
}

module.exports = config;
