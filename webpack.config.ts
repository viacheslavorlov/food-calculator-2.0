import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
type BuildMode = 'production' | 'development';
interface EnvProp {
    mode: BuildMode,
    port: number
}


export default (env: EnvProp): webpack.Configuration => {
    return {
        entry: './src/index.ts',
        devtool: 'inline-source-map',
        mode: env.mode === "development" ? "development" : "production",

        plugins: [
            new HtmlWebpackPlugin({
                // title: 'Food Price Calculator',
                template: path.resolve(__dirname, 'public', 'index.html'),
                // scriptLoading: "defer",
                // chunks: ['index']
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts'],
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            // filename: 'main.js',
        },
    }
};