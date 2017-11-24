const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	const embed = new Discord.MessageEmbed();
	embed.setTitle("Cookie | Credits")
		.setDescription("By Sam.#8235")
		.addField("EC#1720", "Helped with the ping command and other shit.")
		.addField("SunburntRock89#6617", "Basically rewrote the bot.")
		.addField("Dan.#2518", "Helped out with a lot of stuff.")
		.addField("Da532#0080", "Giving constructive critism that helped this bot!")
		.addField("Mason#5628", "Helping out with commands!")
		.setColor("#1d54f9")
		.setFooter("v2.0 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
	message.channel.send(embed);
};