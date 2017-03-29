const webpack = require('webpack');

exports.default = () =>
({
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false,
        screw_ie8: true
      },
      sourceMap: true
    })
  ]
});
