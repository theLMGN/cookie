const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	const embed = new Discord.MessageEmbed();
	embed.setTitle(`Pong! :ping_pong:`)
		.setDescription(`This took me ${Math.floor(client.ping)}ms.`)
		.setColor("#3dff3d")
		.setFooter("v2.1 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
	message.channel.send(embed);
};

