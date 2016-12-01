const webpack = require('webpack')

module.exports = (env) => {
	if (env.prod) {
		return {
			plugins: [
				new webpack.optimize.OccurrenceOrderPlugin(),
				new webpack.LoaderOptionsPlugin({
					// minimize: true,
					debug: false,
				}),
				new webpack.optimize.UglifyJsPlugin({
					compress: {
						warnings: false,
					},
					output: {
						comments: false,
					},
					sourceMap: false,
				}),
			],
		}
	}

	return {}
}
