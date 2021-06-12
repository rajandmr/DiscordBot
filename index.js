if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const { generalMeme } = require('./features/generalMeme');

const botToken = process.env.DISCORD_BOT_TOKEN;
const { dotaMeme } = require('./features/dotaMeme');
const { programmingMeme } = require('./features/programmingMeme');

const { Client } = require('discord.js');
const client = new Client();

const prefix = '!';

client.once('ready', () => {
  console.log('Discord Bot ready');
});

client.on('message', async (message) => {
  try {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLocaleLowerCase();
    let data;
    switch (command) {
      case 'meme':
        data = await generalMeme();
        await message.channel.send(data);
        break;

      case 'dota':
        data = await dotaMeme();
        await message.channel.send(data);
        break;
      case 'programming':
        data = await programmingMeme();
        await message.channel.send(data);
        break;

      default:
        await message.channel.send('command not found');
    }
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
