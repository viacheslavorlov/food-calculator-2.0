import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const loaders = (): webpack.RuleSetRule[] => {
	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: [/node_modules/, /stories/]

	};
	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack']
	};
	const javascriptLoader = {
		test: /\.js$/,
		enforce: 'pre',
		use: ['source-map-loader'],
	};
	const scssLoader = {
		test: /(\.module)?.scss$/,
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
	return [svgLoader, typeScriptLoader, javascriptLoader, cssLoader, scssLoader];
};