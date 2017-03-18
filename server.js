const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

// port can be any number
const port = 3000;

new WebpackDevServer(webpack(config), {
		contentBase: __dirname,
   		publicPath: config.output.publicPath,
	  	hot: true,
		host: '0.0.0.0',
		quiet: true,
		}).listen(port, 'localhost', (err, result) => {
			if (err) {
				return console.log(err);
			}

			console.log(`Listening at http://localhost:${port}/`);
});
