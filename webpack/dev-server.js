module.exports = (port) => ({
	devServer: {
		historyApiFallback: true,
		stats: 'minimal',
		port,
	},
})
