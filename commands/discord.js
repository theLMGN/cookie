const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	message.react("✅");
	const embed = new Discord.MessageEmbed();
	message.delete();
	embed.setTitle("✅ Link Sent In DM!")
		.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3")
		.setColor("#3dff3d");
	message.channel.sendMessage({ embed });

	const embed2 = new Discord.MessageEmbed();
	message.delete();
	embed.setTitle("Discord Server!")
		.setDescription("Join My Discord Server! https://discord.gg/tuaVr3")
		.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3")
		.setColor("#3dff3d");
	message.author.sendMessage({ embed2 });
};
