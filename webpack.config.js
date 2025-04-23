const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    admin: './public/js/admin.js', 
    editEvent: './public/js/edit-event.js', 
    events: './public/js/events.js'
  },
  output: {
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
  devtool: 'inline-source-map',
};