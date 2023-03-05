import path from 'path';
import webpack from 'webpack';
// import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import {devServer, EnvProp} from './config/DevServer';
import {plugins} from './config/Plugins';
import {loaders} from './config/Loaders';

export interface Paths {
    entry: string
    html: string
    output: string
    modules: string
}

export default (env: EnvProp): webpack.Configuration => {
	const paths: Paths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		output: path.resolve(__dirname, 'dist'),
		modules: path.resolve(__dirname, 'node_modules')
	};

	const isDev = env.mode === 'development';

	return {
		entry: paths.entry,
		devtool: isDev ? 'eval' : undefined,
		mode: isDev ? 'development' : 'production',
		// performance: {
		//     maxAssetSize: 1000000,
		//     maxEntrypointSize: 200000,
		// },
		target: ['web', 'es5'],
		plugins: plugins(paths),
		module: {
			rules: loaders()
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
			// modules: [paths.modules]
		},
		devServer: devServer(env),

		output: {
			path: paths.output,
			filename: '[name].[chunkhash:4].js',
		},

	};
};