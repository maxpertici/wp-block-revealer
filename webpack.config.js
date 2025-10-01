const defaultConfig = require('@wordpress/scripts/config/webpack.config');

/**
 * Webpack Config.
 */
module.exports =  (env, argv) => {

	// Patch de la règle sass-loader pour désactiver les warnings de dépréciation
	defaultConfig.module.rules.forEach((rule) => {
		if (Array.isArray(rule.use)) {
			rule.use.forEach((loaderConfig) => {
				if (
					typeof loaderConfig === 'object' &&
					loaderConfig.loader &&
					loaderConfig.loader.includes('sass-loader')
				) {
					loaderConfig.options = loaderConfig.options || {};
					loaderConfig.options.implementation = require('sass');
					loaderConfig.options.sassOptions = {
						...(loaderConfig.options.sassOptions || {}),
						silenceDeprecations: ['legacy-js-api'],
					};
				}
			});
		}
	});

	// Return the configuration object
	return {
		...defaultConfig
	}
};
