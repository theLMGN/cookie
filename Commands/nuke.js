const settings = require("../settings.json");
const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	const embed = new Discord.MessageEmbed();
	const embed1 = new Discord.MessageEmbed();
	const logs = client.channels.get("385870073442598912");


	if (serverDocument.Config.admins.some(admin => admin._id === message.author.id && admin.level === 3 || settings.maintainers.includes(message.author.id))) {
		if (suffix) {
			message.channel.bulkDelete(suffix);

			embed1.setTitle("✅ Messages nuked.")
				.setColor("#7CFC00")
				.setDescription(`Removed ${suffix} messages.`)
				.setFooter(settings.version);
			message.channel.send(embed1);

			embed.setTitle("Nuke.")
				.setColor("#7CFC00")
				.setDescription(`${suffix} messages were purged in ${message.channel} by ${message.author}`)
				.setFooter(settings.version);
			logs.send(embed);
		} else {
			message.channel.send({
				embed: {
					color: 0xFF0000,
					title: "❌ Error",
					description: `You have not specified the number of messages to nuke.`,
					footer: {
						text: `v2.1 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA`,
					},
				},
			});
		}
	} else {
		message.channel.send({
			embed: {
				color: 0xFF0000,
				title: "❌ Error",
				description: `You do not have permission to execute this command`,
				footer: {
					text: `v2.1 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA`,
				},
			},
		});
	}
};

