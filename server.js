var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(process.env.PORT, process.env.IP, function(err, result){
    if(err){
        return console.log(err);
    }
    
    console.log('Listening at https://localhost:' + process.env.PORT);
});