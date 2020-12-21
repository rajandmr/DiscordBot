let botToken = process.env.DISCORD_BOT_TOKEN;

const { Client } = require('discord.js');
const client = new Client();

const prefix = '!'

client.once('ready', () => {
  console.log('Discord Bot ready');
});

client.on('message', async (message) => {

  try {
    if(!message.content.startsWith(prefix) || (message.author.bot)) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLocaleLowerCase();

    await message.channel.send(command)
  } catch (error) {
    console.log(error);
  }
  // if (message.author.bot) return;
  //
  // if (message.content === 'Hello') {
  //   message.channel.send('Hey there');
  // }
});

client.login(botToken);
