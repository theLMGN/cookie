const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	message.react("✅");
	const embed = new Discord.MessageEmbed();
	message.delete();
	embed.setTitle("✅ Link Sent In DM!")
		.setFooter("v2.0 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3")
		.setColor("#3dff3d");
	message.channel.send(embed);

	const embed2 = new Discord.MessageEmbed();
	message.delete();
	embed2.setTitle("Discord Server!")
		.setDescription("Join My Discord Server! https://discord.gg/tuaVr3")
		.setFooter("v2.0 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3")
		.setColor("#3dff3d");
	message.author.send(embed2);
};