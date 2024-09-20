// Use require instead of import for Node.js compatibility
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',
    // You can add other devServer options here
  },
});
