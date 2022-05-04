// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HTMLWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const setupDevtool = () => {
	if (IS_DEV) return 'eval';
	if (IS_PROD) return false;
};
const GLOBAL_STYLES = /\.global\.scss$/;

module.exports = {
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: path.resolve(__dirname, 'src/App.tsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		alias: {
			scss: path.resolve(__dirname, './src/scss'),
		},
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				use: ['ts-loader'],
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]--[hash:base64:5]',
							},
						},
					},
					'sass-loader',
				],
				exclude: GLOBAL_STYLES,
			},
			{
				test: GLOBAL_STYLES,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
					},
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'index.html'),
		}),
	],
	devServer: {
		port: 5000,
		open: true,
		hot: IS_DEV,
	},
	devtool: setupDevtool(),
};
