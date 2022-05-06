// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HTMLWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DefinePlugin } = require('webpack');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const setupDevtool = () => {
	if (IS_DEV) return 'eval';
	if (IS_PROD) return false;
};
const GLOBAL_STYLES = /\.global\.scss$/;
const DEV_PLUGINS = [
	new CleanWebpackPlugin(),
	new HTMLWebpackPlugin({
		template: path.resolve(__dirname, 'index.html'),
	}),
];
const COMMON_PLUGINS = [
	new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` }),
];

module.exports = {
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: path.resolve(__dirname, 'src/App.tsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/',
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
	plugins: IS_DEV ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS,
	devServer: {
		port: 5000,
		open: true,
		hot: IS_DEV,
		historyApiFallback: true,
	},
	devtool: setupDevtool(),
};
