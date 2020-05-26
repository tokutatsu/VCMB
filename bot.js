const Eris = require('eris');
require('dotenv').config();

const token = process.env.TOKEN;
const channelId = process.env.CHANNEL_ID;
const bot = new Eris(token);

bot.on('ready', () => {
    console.log('起動' + new Date);
});

bot.on('voiceChannelJoin', (member, newChannel) => {
    bot.createMessage(channelId, `${member.username}が${newChannel.name}に入室しました。`);
});

bot.on('voiceChannelLeave', (member, oldChannel) => {
    bot.createMessage(channelId, `${member.username}が${oldChannel.name}から退室しました。`);
});

bot.on('voiceChannelSwitch', (member, newChannel, oldChannel) => {
    bot.createMessage(channelId, `${member.username}が${oldChannel.name}から${newChannel.name}に移動しました。`);
});

bot.connect();