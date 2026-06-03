const { Client, GatewayIntentBits, Events } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.MessageContent,
  ],
});

client.on(Events.ClientReady, () => {
  console.log('Bot is online');
});

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;

  const spamFilter = require('./utils/spamFilter');
  const raidFilter = require('./utils/raidFilter');

  if (spamFilter(message)) {
    message.delete();
    message.channel.send('Stop spamming!');
  }

  if (raidFilter(message)) {
    message.delete();
    message.channel.send('Raid detected!');
  }
});

client.login(process.env.TOKEN);
