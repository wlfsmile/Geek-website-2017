module.exports = {
  	entry: './views/index.js',
  	output: {
      path:__dirname + '/output',
    	filename: 'bundle.js'
  	},
  	module: {
    	loaders: [
    	{
     	test: /\.jsx?$/,
      	exclude: /node_modules/,
      	loader: 'babel-loader',
      	query: {
        	presets: ['es2015','react']
      	}
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=8192' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
    ]
  }
};