const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const { getWebpackEntryPoints } = require('@wordpress/scripts/utils/config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

let plugins = [];

module.exports = {
	...defaultConfig,
	entry: {
		...getWebpackEntryPoints(),
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.(bmp|png|jpe?g|gif|webp)$/i,
				type: 'asset/resource',
				generator: {
					emit: false,
					filename: (pathData) => {
						const filepath = path.dirname(pathData.filename).split("/").slice(1).join("/");
						return `../${filepath}/[name][ext]`;
					},
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					emit: false,
					filename: (pathData) => {
						const filepath = path.dirname(pathData.filename).split("/").slice(1).join("/");
						return `../${filepath}/[name][ext]`;
					},
				},
			},
		],
	},
	plugins: [...defaultConfig.plugins, ...plugins],
};
