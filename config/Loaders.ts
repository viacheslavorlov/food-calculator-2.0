import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const loaders = (): webpack.RuleSetRule[] => {
	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/

	};
	const javascriptLoader = {
		test: /\.js$/,
		enforce: 'pre',
		use: ['source-map-loader'],
	};
	const scssLoader = {
		test: /\.scss$/,
		use: [
			MiniCssExtractPlugin.loader,
			'css-loader',
			'sass-loader'
		]
	};
	const cssLoader = {
		test: /\.css$/,
		use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: {
					importLoaders: 1,
					modules: true,

				}
			}
		]
	};
	return [typeScriptLoader, javascriptLoader, cssLoader, scssLoader];
};