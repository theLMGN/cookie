const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	const embed = new Discord.MessageEmbed();
	message.delete();
	embed.setTitle("The Truth")
		.setDescription("JS > PY")
		.setFooter("v2.0 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3")
		.setColor("#3dff3d");
	message.channel.send({ embed });
};
