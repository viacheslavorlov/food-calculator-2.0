import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import {Paths} from '../webpack.config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import CircularDependencyPlugin from 'circular-dependency-plugin';

export const plugins = (paths: Paths) => [
	new MiniCssExtractPlugin(),
	new HtmlWebpackPlugin({
		template: paths.html,
		title: 'Food Price',
		scriptLoading: 'defer',
	}),
	new CircularDependencyPlugin({
		// exclude detection of files based on a RegExp
		exclude: /a\.js|node_modules/,
		// include specific files based on a RegExp
		include: /src/,
		// add errors to webpack instead of warnings
		failOnError: false,
		// allow import cycles that include an asyncronous import,
		// e.g. via import(/* webpackMode: "weak" */ './file.js')
		// allowAsyncCycles: false,
		// set the current working directory for displaying module paths
		// cwd: process.cwd(),
	}),
	new webpack.ProgressPlugin(),
	new BundleAnalyzerPlugin()
];
