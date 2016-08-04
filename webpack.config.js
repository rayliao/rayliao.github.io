var path = require('path');
var webpack = require('webpack');

var buildEntryPoint = function(entryPoint){
      return [
          'webpack-dev-server/client?https://' + process.env.IP + ':' + process.env.PORT,
          'webpack/hot/only-dev-server',
          entryPoint
      ]
}

module.exports = {
    entry: {
        about: buildEntryPoint('./src/about')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/static/'
    },
    plugins: [
        // 热替换，自动刷新
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/, 
  			    loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
}