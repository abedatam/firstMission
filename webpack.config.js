const path = require('path');

module.exports = {
  entry: './src/root.ts',
  mode:"development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension
    extensions: ['.ts', '.tsx', '.js']
  }
};