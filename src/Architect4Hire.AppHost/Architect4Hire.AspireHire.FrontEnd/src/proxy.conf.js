const { env } = require('process');

const target = env["services__architect4hire.aspirehire.frontend-server__https__0"] ?? 'https://localhost:7284';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target,
    secure: false
  }
]

module.exports = PROXY_CONFIG;
