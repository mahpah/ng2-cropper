module.exports = () => ({
	module: {
		loaders: [{
			test: /\.ts$/,
			loaders: [
				'ts',
				'angular2-template',
			],
			exclude: /node_modules/,
		}],
	},
})
