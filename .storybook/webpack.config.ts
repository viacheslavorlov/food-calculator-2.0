import webpack, { RuleSetRule } from 'webpack';
import path from 'path';

export default ({ config }: { config: webpack.Configuration }) => {
	config.resolve?.modules?.push(path.resolve(__dirname, '..', 'src'));
	config.resolve?.extensions?.push('ts', 'tsx');


	// @ts-ignore
	config!.module!.rules = config.module?.rules?.map((rule: RuleSetRule) => {
		if (/svg/.test(rule.test as string)) {
			return { ...rule, exclude: /\.svg$/i };
		}
		return rule;
	});

	config.module?.rules?.push({
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack'],
	});

	config.module?.rules?.push({
		test: /\.s[ac]ss$/i,
		use: [
			'style-loader',
			//! Translates CSS into CommonJS
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module')),
						localIdentName: '[hash:base64:4]',
					},
				},
			},
			// Compiles Sass to CSS
			'sass-loader',
		],
	});
	return config;
};