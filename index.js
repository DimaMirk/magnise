const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3030;

const targetUrl = 'https://platform.fintacharts.com/identity/realms';

// Налаштування проксі
app.use('/identity/realms/:realm/protocol/openid-connect/token', createProxyMiddleware({
  target: targetUrl,
  changeOrigin: true,
  pathRewrite: (path, req) => path.replace('/identity/realms/:realm/protocol/openid-connect/token', `/identity/realms/${req.params.realm}/protocol/openid-connect/token`),
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('Content-Type', 'application/x-www-form-urlencoded');
  }
}));

// Запуск сервера
app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
