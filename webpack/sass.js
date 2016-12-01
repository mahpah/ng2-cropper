const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { removeEmpty } = require('./helpers')

module.exports = (externalStyle) => ({
	module: {
		loaders: removeEmpty([
			{
				test: /\.scss/,
				loaders: ['css-to-string', 'css?-minimize', 'resolve-url', 'sass?sourceMaps'],
				exclude: externalStyle,
			},
			!!externalStyle ? {
				test: /\.scss/,
				loader: ExtractTextPlugin.extract(['css', 'resolve-url', 'sass?sourceMap']),
				include: externalStyle,
			} : undefined,
			{
				test: /\.css/,
				loader: ExtractTextPlugin.extract(['css', 'resolve-url']),
				include: externalStyle,
			},
		]),
	},

	plugins: [
		new ExtractTextPlugin('[name].css'),
	],
})
