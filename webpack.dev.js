const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const commonEntry = common.entry;
const entry = {};
Object.keys(commonEntry)
.forEach((pageName, index) => {
	entry[pageName] = [commonEntry[pageName], 'webpack-hot-middleware/client?noInfo=true&reload=true']
})

module.exports = merge(common, {
	entry,
	mode: 'development',
	devtool: 'source-map',
	plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
	output: {
		filename: 'js/[name].bundle.js',
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					'postcss-loader'
				]
			},
		]
	},
});
