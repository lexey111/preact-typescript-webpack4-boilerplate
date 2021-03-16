const webpack = require('webpack');
const path = require('path');

const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, args) => {
	const isProduction = args && args['mode'] === 'production';
	console.log('');
	console.log(isProduction ? 'PRODUCTION BUILD' : 'DEVELOPMENT BUILD');
	console.log('');


	const config = {
		entry: {
			'scripts/main': path.resolve('./src/bootstrap.tsx'),
		},
		output: {
			path: path.resolve('./dist'),
		},
		target: 'web',
		devtool: isProduction ? false : 'source-map',
		optimization: {
			splitChunks: {
				// always create vendor.js
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'scripts/vendor',
						chunks: 'initial',
						enforce: true,
					},
				},
			},
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.html', '.txt'],
		},
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					// eslint
					enforce: 'pre',
					use: [
						{
							options: {
								eslintPath: require.resolve('eslint'),
							},
							loader: require.resolve('eslint-loader'),
						},
					],
					exclude: /node_modules/,
				},
				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					use: [{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
						},
					}],
				},
				// app main .less file
				{
					test: /app\.less$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'styles/[name].css',
							}

						},
						{
							loader: 'less-loader',
						}
					]
				},
			],
		},

		watchOptions: {
			aggregateTimeout: 100,
			ignored: /node_modules/,
			poll: 300
		},

		devServer: {
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			contentBase: './dist',
			publicPath: '/',
			compress: false,
			port: 3030,
			historyApiFallback: true,
			hot: true,
			inline: true,
			stats: 'normal',
			clientLogLevel: 'error'
		},

		plugins: [
			new webpack.EnvironmentPlugin({
				NODE_ENV: isProduction ? 'production' : 'development',
				DEBUG: !isProduction
			}),

			new CopyWebpackPlugin({
				patterns: [
					// static files to the site root folder (index and robots)
					{
						from: '**/*',
						to: path.resolve('./dist/'),
						context: './src/static/'
					},
				]
			}),
		],
	};

	if (isProduction) {
		config.optimization.minimize = true;
		config.optimization.minimizer = [
			new TerserPlugin({extractComments: false}),
			new OptimizeCSSAssetsPlugin({}),
		]
	}

	return config;
};
