module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/coinha/'  // This is your GitHub repository name
    : '/',
  transpileDependencies: []  // This should be an array
};
