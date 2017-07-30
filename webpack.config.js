const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlProcess = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: './html/index.pug',
  hash: true,
});
const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
});
module.exports = {
  entry: ['./ts/App.ts'],
  context: __dirname + '/src',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  devtool: 'source-map', // if we want a source map 
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: ['bower_components', 'node_modules']
    },
    {
      test: /\.pug$/,
      loader: 'pug-loader'
    },
    {
      test: /\.(png|gif|jpg)$/,
      loader: 'file-loader?name=[path][name].[ext]',
    },
    {
      test: /\.purs$/,
      loader: 'purs-loader',
      options: {
        // src: [
        //   'bower_components/purescript-*/src/**/*.purs',
        //   'src/**/*.purs'
        // ],
        bundle: false,
        psc: 'psa',
        pscIde: false,
        exclude: ['bower_components', 'node_modules']
      }
    },
    {
      test: /\.hs$/,
      loader: 'haskell-loader',
      // query: {
      //   psc: 'psa',
      //   src: ['./purescripts/**/*.purs']
      // }
    },
    {
      test: /\.s[a|c]{1}ss$/,
      use: extractSass.extract({
        fallback: 'style-loader',
        use: 'css-loader!sass-loader'
      }),
    }]
  },
  plugins: [htmlProcess, extractSass]
}
