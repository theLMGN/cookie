const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	const embed = new Discord.MessageEmbed();
	embed.setTitle("Member Count")
		.setDescription(`You Currently Have ${message.guild.memberCount} Members!`)
		.setFooter("v2.0 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3")
		.setColor("#3dff3d");
	message.channel.send({ embed });
};
