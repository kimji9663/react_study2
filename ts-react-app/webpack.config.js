const path = require('path');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Typescript(타입스크립트)를 빌드할 때 성능을 향상시키기 위한 플러그인를 불러오기
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); 

module.exports = {
  // 번들 파일(bundle)의 시작 파일(Entry)을 jsx에서 tsx로 변경
  entry: {
    'js/app': ['./src/index.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    alias: {
			"@/": path.resolve(__dirname, "./src/"),
      "@styles/": path.resolve(__dirname, "./src/styles/"),
		},
  },
  devtool: 'source-map',
  module: {
    rules: [
      // Webpack(웹팩)에서 Typescript(타입스크립트)를 사용하기 위해 js|jsx를 ts|tsx로 수정 후 ts-loader를 추가
      // ts-loader의 옵션은 성능 향상을 위해서
      {
        test: /\.(js|ts|tsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                '@babel/preset-typescript',
                ['@babel/preset-react', { runtime: 'automatic' }],
                [
                  '@babel/preset-env',
                  { targets: { node: 14 }, modules: false },
                ],
              ],
              plugins: ['@vanilla-extract/babel-plugin'],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devserveropen
    open: true,
    // https://webpack.js.org/configuration/dev-server/#devserverport
    port: 'auto'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    new VanillaExtractPlugin(),
    // Typescript(타입스크립트)의 컴파일 속도 향상을 위한 플러그인을 설정
    new ForkTsCheckerWebpackPlugin(),
  ],
  stats: 'minimal',
};
