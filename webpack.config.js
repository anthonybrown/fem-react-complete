const path = require('path')

module.exports = {
	context: __dirname,
	entry: './js/clientApp.js',
	output: {
		path: path.join(__dirname, '/public'),
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},

	stats: {
		color: true,
		reasons: true,
		chunks: false
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			}
		]
	}

}
