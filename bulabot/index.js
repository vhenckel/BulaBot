const { MessengerBot } = require('bottender');
const { createServer } = require('bottender/express');

const config = require('./bottender.config.js').messenger;

const bot = new MessengerBot({
  accessToken: config.accessToken,
  appSecret: config.appSecret,
});

bot.onEvent(async context => {
  await context.sendText('Hello World!');
  if (context.event.isText) {
    switch (context.event.text) {
      case 'start':
        await context.sendText('Running....');
        break;
      case 'help':
        await context.sendText(`
start   start to run
help    quick help on <command>
        `);
        break;
      default:
        await context.sendText(`${context.event.text} is not a valid command.`);
    }
  }
});

const server = createServer(bot, {
  verifyToken: config.verifyToken,
});

server.listen(3000, () => {
  console.log('server is running on 3000 port...');
});
