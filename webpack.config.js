var path = require('path');

module.exports = {
  entry: './src/yom-sanitize-html.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'yom-sanitize-html.js',
    library: 'YomSanitizeHtml',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: false
  }
};
