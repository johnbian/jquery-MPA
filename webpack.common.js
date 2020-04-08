const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin=require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const setMPA = () => {
	const entry = {};
	const htmlWebpackPlugins = [];
	const entryFiles = glob.sync(path.join(__dirname, './src/pages/*/index.js'));
	Object.keys(entryFiles).map((index) => {
		const entryFile = entryFiles[index];
		const match = entryFile.match(/src\/pages\/(.*)\/index\.js/);
		const pageName = match && match[1];
		entry[pageName] = entryFile;
		htmlWebpackPlugins.push(
			new HtmlWebpackPlugin({
				template: path.join(__dirname, `src/pages/${pageName}/index.html`),
				filename: `./pages/${pageName}/index.html`,
				chunks: ['commons', pageName, 'jquery'],
				inject: true,
				minify: false,
			})
		);
		if (pageName === 'anysignpage') {
			htmlWebpackPlugins.push(
				new CopyWebpackPlugin([
					{
							from: path.join(__dirname, 'src/pages/anysignpage/libs'),
							to: path.join(__dirname, 'dist/pages/anysignpage/libs'),
					},
					{
						from: path.join(__dirname, 'src/pages/anysignpage/css'),
						to: path.join(__dirname, 'dist/pages/anysignpage/css'),
					},
					{
						from: path.join(__dirname, 'src/pages/anysignpage/anysignWebInterface.js'),
						to: path.join(__dirname, 'dist/pages/anysignpage/anysignWebInterface.js'),
					}
				])
			)
		}
	});
	return {
		entry,
		htmlWebpackPlugins
	};
};

// 入口管理

const { entry, htmlWebpackPlugins } = setMPA();

module.exports = {
	entry,
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.ProvidePlugin({ //加载jq
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		})
	].concat(htmlWebpackPlugins),
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							outputPath: 'image/',
							name: '[hash].[ext]'
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(csv|tsv)$/,
				use: [
					'csv-loader'
				]
			},
			{
				test: /\.xml$/,
				use: [
					'xml-loader'
				]
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						attrs: ['img:src', 'img:data-src', 'audio:src'],
						minimize: true
					}
				}
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use: [
					'babel-loader',
					'eslint-loader'
				]
			}
		]
	},
	optimization: {
		splitChunks: {
			minSize: 0,
			cacheGroups: {
				commons: {
					name: 'commons',
					chunks: 'all',
					minChunks: 2
				}
			}
		}
	},
};