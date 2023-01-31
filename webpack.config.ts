import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
// import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";



type BuildMode = 'production' | 'development';

interface EnvProp {
    mode: BuildMode,
    port: number
}
const devServer = ({port}: EnvProp): DevServerConfiguration => {
    // console.log(env)
    return {
        open: true,
        port: port || 3000,
        historyApiFallback: true,
    }
}



export default (env: EnvProp): webpack.Configuration => {

    const isDev = env.mode === "development";

    return {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        devtool:  isDev ? 'inline-source-map' : false,
        mode: isDev ? "production" : "production",
        target: ['web', 'es5'],
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                title: 'Food Price Calculator',
                scriptLoading: "defer",
            }),
            new webpack.ProgressPlugin(),
            // new BundleAnalyzerPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: ["source-map-loader"],
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        devServer: devServer(env),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[chunkhash:4].js',
        },

    }
};