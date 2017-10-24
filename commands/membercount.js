const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	 embed.setTitle("Member Count")
	 .setDescription("You Currently Have " + message.guild.memberCount + " Members!")
	 .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	 .setColor("#3dff3d")
	 message.channel.sendMessage({embed});
}