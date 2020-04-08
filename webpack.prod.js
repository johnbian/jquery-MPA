const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimize: true,
    minimizer: [
			new TerserPlugin({
				terserOptions: {
					mangle: {
							safari10: true,
					},
				},
			})
		],
  },
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
					'postcss-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'pages/[name]/[name][contenthash:8].css'                  // 提取出来的css文件路径以及命名
		}),
	],
	output: {
		filename: 'pages/[name]/[name][chunkhash:8].bundle.js',
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/static/activity/'
	},
});
