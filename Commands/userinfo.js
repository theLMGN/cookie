const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	const embed = new Discord.MessageEmbed();
	embed.setTitle("Information About You!")
		.addField(`Username:`, `${message.author.username}#${message.author.discriminator}`)
		.addField(`Status:`, `${message.author.presence.status}`)
		.addField(`ID:`, `${message.author.id}`)
		.addField(`Joined At:`, `${message.member.joinedAt}`)
		.addField(`Created At:`, `${message.author.createdAt}`)
		.addField(`Highest Role:`, `${message.member.highestRole.name}`)
		.addField(`Kickable?:`, `${message.member.kickable}`)
		.addField(`User Avatar:`, `${message.author.avatarURL({ format: "png" })}`)
		.setColor("#3dff3d")
		.setFooter("v2.0 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
	message.channel.send(embed);
};
