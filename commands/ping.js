const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	message.delete();
	message.reply('Pong...').then((msg) => {
		embed.addField("Pong! :ping_pong:", `${msg.createdTimestamp - message.createdTimestamp}ms`)
			.setColor("#3dff3d")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 and Dan.#2518 | https://discord.gg/7vbPubA")
		msg.edit({embed});
	})
}