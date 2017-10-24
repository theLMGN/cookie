const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	message.delete();
	embed.setTitle("The Truth")
	.setDescription("JS > PY")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	.setColor("#3dff3d")
	message.channel.sendMessage({embed});
}