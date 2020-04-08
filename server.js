const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const proxy = require('express-http-proxy'); 

const app = express();
const config = require('./webpack.dev.js');
const compiler = webpack(config);

// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}));

app.use('/sit', proxy('ecustomer.tp95589.com', {
	https: true,
	proxyReqPathResolver: function(req) {
		console.log(`请求的路径：${req.url}`);     //请求的路径：
		return `/sit${req.url}`;        //转发请求路径： 
	},
}));

app.use(webpackHotMiddleware(compiler ,{
	log: console.log,
	heartbeat: 2000,
}));

// 将文件 serve 到 port 3000。
app.listen(3000, function () {
	console.log('Example app listening on port 3000!\n');
});