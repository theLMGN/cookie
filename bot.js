const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json')
let prefix = "--";
var upSecs = 16;
var upMins = 18;
var upHours = 6;
var upDays = 40;
require('./util/eventLoader')(client);

Object.assign(String.prototype, {
	escapeRegex() {
		const matchOperators = /[|\\{}()[\]^$+*?.]/g;
		return this.replace(matchOperators, "\\$&");
	},
});

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

client.on('guildMemberAdd', member => {
    const embed = new Discord.RichEmbed();
    const channel = member.guild.channels.find('name', 'mainchat');
    if (!channel) return;
    embed.setTitle(":wave: New member!")
    .setDescription(`Welcome ${member}, Read the rules and have fun!`)
    .setColor("#3dff3d")
    .setFooter("v2.6.5")
    channel.send({embed});
})

client.on('guildMemberRemove', member => {
	const embed = new Discord.RichEmbed();
	const channel = member.guild.channels.find('name', 'mainchat');
	if (!channel) return;
	embed.setTitle("User Left!")
	.setDescription(`We hope to see you again ${member} .... :pensive:`)
	.setColor("#ff0000")
	.setFooter("v2.6.5")
	channel.send({embed});
}) 

client.login(settings.token);
