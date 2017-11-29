const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
const embed2 = new Discord.MessageEmbed();
embed2.setTitle("Bot Invite!")
		.setDescription("[Invite Cookie to your server!](https://discordapp.com/oauth2/authorize?client_id=385141628819734528&scope=bot&permissions=8)")
		.setFooter("v2.1")
		.setColor("#3dff3d");
	message.channel.send(embed2);
};
