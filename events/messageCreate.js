module.exports = {
  name: 'messageCreate',
  execute: async (message) => {
    if (message.author.bot) return;

    const spamFilter = require('../utils/spamFilter');
    const raidFilter = require('../utils/raidFilter');

    if (spamFilter(message)) {
      message.delete();
      message.channel.send('Stop spamming!');
    }

    if (raidFilter(message)) {
      message.delete();
      message.channel.send('Raid detected!');
    }
  },
};
