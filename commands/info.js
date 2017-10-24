const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	embed.setTitle("Cookie")
	.setDescription("By Sam.#8235")
	.setThumbnail("https://cdn.discordapp.com/attachments/369522450502909954/371804672362676229/download_1.jpg")
	.addField("Discord Server:", "https://discord.gg/7vbPubA")
	.addField("Current Version:", "2.6.5")
	.addField("Ping: ", `${Math.floor(client.ping)}ms`)
	.setColor("#1d54f9")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	message.channel.send({embed});
}