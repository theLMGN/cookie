const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	const embed = new Discord.MessageEmbed();
	message.delete();
	embed.setTitle("The Truth")
		.setDescription("DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY ")
		.setFooter("v2.1 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3")
		.setColor("#3dff3d");
	message.channel.send({ embed });
};
