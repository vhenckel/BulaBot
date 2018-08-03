const { MessengerBot, withTyping } = require('bottender');

const config = require('../bottender.config.js').messenger;

const bot = new MessengerBot({
  accessToken: config.accessToken,
  appSecret: config.appSecret,
});

bot.use(withTyping({ delay: 2000 }));

bot.onEvent(async context => {
  //await context.sendSenderAction('typing_on');
  console.log(context);

  if (context.event.isText) {
    await context.markSeen();
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