const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	const embed = new Discord.MessageEmbed();
	embed.setTitle("Information About You!")
		.setDescription(`Username: ${message.author.username}#${message.author.discriminator}\nStatus: ${message.author.presence.status}\nID: ${message.author.id}\nJoined At: ${message.member.joinedAt}\nCreated At: ${message.author.createdAt}\nHighest Role: ${message.member.highestRole.name}\nKickable? ${message.member.kickable}\nUser Avatar \n${message.author.avatarURL}`)
		.setColor("#3dff3d")
		.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
	message.channel.send({ embed });
};
