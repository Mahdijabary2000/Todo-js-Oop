module.exports = {
    mode: 'none',
 
  module:{
    rules:[
      {
        test:/\.css$/i,
        use:['style-loader','css-loader']
      },
      {
        test:/\.scss$/i,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  }
 };