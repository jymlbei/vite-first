// @ts-check
// import  from 'vite-plugin-react'
const path = require('path')
/**
 * @type { import('vite').UserConfig }
 */
module.exports = {
  jsx:'react',
  plugins:['vite-plugin-react'],
  outDir:'dist',
  optimizeDeps: {
    include: ['antd','react-router-dom','axios']
  },
  rules: [
    {
        test:/\.less$/,
        use:['less-loader']
    }
  ],
  alias:{
    "/@/":path.resolve(__dirname,'./src')
  }
}
