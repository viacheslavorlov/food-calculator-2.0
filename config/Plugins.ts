import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import {Paths} from '../webpack.config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export const plugins = (paths: Paths) => [
	new MiniCssExtractPlugin(),
	new HtmlWebpackPlugin({
		template: paths.html,
		title: 'Food Price',
		scriptLoading: 'defer',
	}),
	new webpack.ProgressPlugin(),
	new BundleAnalyzerPlugin()
];
