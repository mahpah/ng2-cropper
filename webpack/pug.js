module.exports = (root) => ({
	module: {
		loaders: [{
			test: /\.jade/,
			loaders: [
				`html?root=${root}`,
				`pug-html?${JSON.stringify({ doctype: 'html' })}`,
			],
		}],
	},
})
