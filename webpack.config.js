const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanCSSPlugin = require('less-plugin-clean-css');
const path = require('path');

module.exports = (env, args) => {
	let production = false;

	if (args && args.mode === 'production') {
		production = true;
		console.log('== Production mode');
	} else {
		console.log('== Development mode');
	}

	const lessLoader = production
		? {
			loader: 'less-loader',
			options: {
				plugins: [
					new CleanCSSPlugin({advanced: true})
				]
			}
		}
		: {
			loader: 'less-loader',
		};

	return {
		entry: {
			'scripts/main': './src/bootstrap.tsx',
		},
		output: {
			path: path.resolve('./dist'),
		},
		target: 'web',
		devtool: production ? false : 'source-map',
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
								name: 'styles/app/[name].css',
							}

						},
						lessLoader
					]
				},
			],
		},
		devServer: {
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			contentBase: './dist',
			compress: true,
			port: 3030,
		},
		plugins: [
			new ForkTsCheckerWebpackPlugin(),
			new CopyWebpackPlugin([
				// static files to the site root folder (index and robots)
				{
					from: './src/static/**/*',
					to: path.resolve('./dist/'),
					toType: 'dir',
					flatten: true
				},
			]),
		],
	};
};