exports.default = () =>
(
  {
    module: {
      rules: [
        {
          test: /\.(jpg|png|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        },
      ],
    },
  }
);
