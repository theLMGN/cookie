module.exports = async(client, message, suffix, serverDocument) => {
	const Discord = require("discord.js");
	const embed = new Discord.MessageEmbed();

	embed.setTitle("❌ Permission Error")
		.setColor("#F20000")
		.setDescription("It seems you have got something wrong... ```You do not have high enough permissions to do this.```");
	if (!message.member.hasPermission("MENTION_EVERYONE")) {
		message.channel.send({
			embed: {
				color: 0xFF0000,
				title: "❌ Error",
				description: `You do not have permission to execute this command`,
				footer: {
					text: "v2.1 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3",
				},
			},
		});
	} else {
		embed.setTitle(``)
			.setAuthor(`${message.author.tag}`)
			.setThumbnail(`${message.author.avatarURL({ format: "png" })}`)
			.setColor("#1E90FF")
			.setDescription(`\n${suffix}`);
		message.channel.send(embed);
		message.delete();
	}
};
