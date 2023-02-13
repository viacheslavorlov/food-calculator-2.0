import {Configuration as DevServerConfiguration} from 'webpack-dev-server';

type BuildMode = 'production' | 'development';

export interface EnvProp {
    mode: BuildMode,
    port: number
}

export const devServer = ({port}: EnvProp): DevServerConfiguration => {
	// console.log(env)
	return {
		open: true,
		port: port || 3000,
		historyApiFallback: true,
	};
};