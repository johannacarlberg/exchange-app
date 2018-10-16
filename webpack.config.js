const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: `${SRC_DIR}/app/index.js`,
  output: {
    path: `${DIST_DIR}/app`,
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: ['transform-runtime'],
        }
      }
   ],
  },
};
module.exports = config;
