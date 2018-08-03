const { MessengerBot } = require('bottender');
const { createServer } = require('bottender/express');

const config = require('./bottender.config.js').messenger;

const bot = require('./app/bot.js');

const server = createServer(bot, {
  verifyToken: config.verifyToken,
});

server.listen(3000, () => {
  console.log('server is running on 3000 port...');
});
