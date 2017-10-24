const Discord = require('discord.js');

exports.run = function(client, message, args) {
	message.react("✅")
	const embed = new Discord.RichEmbed();
	message.delete();
	embed.setTitle("✅ Link Sent In DM!")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	.setColor("#3dff3d")
	message.channel.sendMessage({embed}); 

	const embed = new Discord.RichEmbed();
	message.delete();
	embed.setTitle("Bot Invite!")
	.setDescription("This Bot Is Currently Private!")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	.setColor("#3dff3d")
	message.author.sendMessage({embed}); 
}