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
	embed.setTitle("Discord Server!")
	.setDescription("Join My Discord Server! https://discord.gg/7vbPubA")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	.setColor("#3dff3d")
	message.author.sendMessage({embed}); 
}