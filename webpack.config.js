module.exports = {
  /* eslint-disable no-path-concat */
  /* eslint-disable prefer-template */
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    /* eslint-disable no-path-concat */
    /* eslint-disable prefer-template */
    path: __dirname + '/client/dist',
  },
};
