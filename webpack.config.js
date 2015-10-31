var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
	entry: './js/main.js',
	output: {
		filename: 'bundle.js'
	},
	plugins: [
		new uglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
};