exports.default = () =>
(
  {
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: 'fonts/[name].[ext]',
            },
          },
        },
      ],
    },
  }
);
