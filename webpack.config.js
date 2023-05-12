module.exports = {
    mode: 'development',
  };
  module:{
    rules:[
      {
        test:/\.css$/i,
        use:['style-loader','css-loader']
      },
      {
        test:/\.scss$/i,
        use:['style-loader','css-loader', 'sass-loader',]
      }
    ]
  }