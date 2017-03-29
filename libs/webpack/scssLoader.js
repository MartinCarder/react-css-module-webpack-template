
const autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSCSS = new ExtractTextPlugin({ filename: 'style..min.css', allChunks: true });

const sassLoaders = () => {
  const cssLoader = 'css-loader?minimize&modules&allowMultiple=true&sourceMap&importLoaders=1';
  const postCssLoader = {
    loader: 'postcss-loader',
    options: {
      plugins: () => [autoprefixer],
    },
  };
  const sassLoader = 'sass-loader?sourceMap=map';

  let loader = [
    'style-loader',
    cssLoader,
    postCssLoader,
    sassLoader,
  ];

  if (process.env.npm_lifecycle_event === 'build') {
    loader = extractSCSS.extract({
      fallback: 'style-loader',
      use: [
        cssLoader,
        postCssLoader,
        sassLoader,
      ],
    });
  }

  return loader;
};

exports.default = () =>
(
  {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: sassLoaders(),
        },
      ],
    },
    plugins: [
      extractSCSS,
    ],
  }
);
