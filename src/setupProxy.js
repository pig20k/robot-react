const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
      app.use(createProxyMiddleware('/api', {
            target: 'http://47.100.39.201:8080',
            changeOrigin: true,
            pathRewrite: {
                  "^/api": ""
            }
      }))
}