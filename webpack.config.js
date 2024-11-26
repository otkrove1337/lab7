const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      // CSS Loader
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // SCSS Loader
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // LESS Loader
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      // Stylus Loader
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/news.html',
      filename: 'news.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/rozklad.html',
      filename: 'rozklad.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/photo.html',
      filename: 'photo.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/header.html',
      filename: 'header.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/footer.html',
      filename: 'footer.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css', // Outputs CSS to the css directory
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    open: true,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.scss', '.less', '.styl'],
  },
};
