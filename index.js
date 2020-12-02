// const express = require('express');
// const app = express();
// const port = process.env.port || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

let botToken =
  process.env.DISCORD_BOT_TOKEN ||
  'NzUyMTczMDIxMzQyNzI4MzQy.X1Txtg.LPggN14fdrMTbUBNHLnIMXrTA9U';

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
