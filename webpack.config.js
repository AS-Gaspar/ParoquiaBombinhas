const path = require('path');

module.exports = {
  mode: 'development',
  // Change entry to an object for multiple bundles
  entry: {
    admin: './public/js/admin.js', // Bundle for admin page
    editEvent: './public/js/edit-event.js' // Bundle for edit page
  },
  output: {
    // Use [name] to generate filenames based on entry keys
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public/dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      }
    ],
  },
  // Optional: Add devtool for better debugging
  devtool: 'inline-source-map',
};