const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	embed.setTitle("")
	.addField("Pong! :ping_pong:", `${Math.floor(client.ping)}ms`)
	.setColor("#3dff3d")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 and Dan.#2518 | https://discord.gg/7vbPubA")
	message.channel.send({embed});
}