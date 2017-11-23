const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	const embed = new Discord.MessageEmbed();
	message.delete();
	message.reply("Pong...").then(message2 => {
		embed.addField("Pong! :ping_pong:", `${message2.createdTimestamp - message2.createdTimestamp}ms`)
			.setColor("#3dff3d")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 and Dan.#2518 | https://discord.gg/tuaVr3");
		message2.edit({ embed });
	});
};

