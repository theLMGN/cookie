const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json')
let prefix = "dan.";
var upSecs = 16;
var upMins = 18;
var upHours = 6;
var upDays = 40;
require('./util/eventLoader')(client);

client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);	


    if(!message.guild) {
  	message.reply("Hey, I don't work using DMs, Join Sam's Lounge! https://discord.gg/7vbPubA")
    return
  	}
})

client.login(settings.token);