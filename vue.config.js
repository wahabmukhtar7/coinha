const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/coinha/'  // This is your GitHub repository name
    : '/'
}



// module.exports = defineConfig({
//   transpileDependencies: true
// })

