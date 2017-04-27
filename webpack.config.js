/*
 * @Author:  
 * @Date: 2017/4/27 
 * @Last Modified by:  
 * @Last Modified time:2017/4/27 
 */
let path = require( 'path' );
let webpack = require( 'webpack' );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" ); //独立打包css模块;
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' ); //压缩CSS模块;
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
	context: path.resolve( __dirname, './src/' ),
	entry: {index:'./index.js'},
	output: {
		publicPath: "./",
		path: path.resolve( __dirname, './dist/' ),
		filename: "[name].js"
	},
	module: {
		rules: [ {
			test: /\.js$/,
			exclude: '/node_modules/',
			use: [ {
				loader: "babel-loader",
				options: { presets: [ 'es2015' ] }
			}
			]
		},{
			test:/\.vue$/,
			loader:'vue-loader'
		} ]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin( {
			compress: {
				warnings: false
			}
		} ),
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:__dirname+'/src/index.html'
		}),
		//自动注入模块
		new webpack.ProvidePlugin( {
			Vue: 'Vue',
		} ),
	],
	devServer: {
		compress: true,
		port: 9999,
		contentBase: path.join( __dirname, 'dist' )
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		},
		extensions: [' ','.css','.scss','.sass','.less','.js','.json','.vue']
	}
};