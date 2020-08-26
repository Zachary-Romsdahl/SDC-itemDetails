const path = require('path');

module.exports = {
  // eslint - disable no - path - concat
  // eslint-disable prefer-template _
  entry: path.join(__dirname, './client/src/index.jsx'),
  // target: 'node',
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
    // eslint-disable no-path-concat
    //  eslint - disable prefer - template
    path: path.join(__dirname, './client/dist'),
  },
};
