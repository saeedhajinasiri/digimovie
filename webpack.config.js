const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/lib/index.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.ts',
    library: '',
    libraryTarget: 'commonjs'
  },
  externals: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {minimize: true}
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
  },
  plugins: []
}
