let botToken = process.env.DISCORD_BOT_TOKEN;

const { Client } = require('discord.js');
const client = new Client();

let userInput;

client.once('ready', () => {
  console.log('Discord Bot ready');
});

client.on('message', (message) => {
  if (message.author.bot) return;

  if (message.content === 'Hello') {
    message.channel.send('Hey there');
  }
});

client.login(botToken);
