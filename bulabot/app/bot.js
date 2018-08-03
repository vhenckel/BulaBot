const { MessengerBot } = require('bottender');

const config = require('../bottender.config.js').messenger;

const bot = new MessengerBot({
  accessToken: config.accessToken,
  appSecret: config.appSecret,
});

bot.onEvent(async context => {
  context.markSeen();
  context.sendSenderAction('typing_on');
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
module.exports = bot;