const settings = require("../settings.json");

module.exports = async(client, msg, suffix, serverDocument) => {
	if (serverDocument.Config.admins.some(admin => admin._id === msg.author.id && admin.level === 3) || settings.maintainers.includes(msg.author.id)) {
		let member, reason;
		if (suffix.indexOf("|") > -1 && suffix.length > 3) {
			member = await client.memberSearch(suffix.substring(0, suffix.indexOf("|")).trim(), msg.guild).catch(() => {
				member = null;
			});
			reason = suffix.substring(suffix.indexOf("|") + 1).trim();
		} else {
			member = await client.memberSearch(suffix, msg.guild).catch(() => {
				member = null;
			});
		}
		if (member) {
			msg.guild.kick(member.id, reason).then(() => {
				msg.channel.send({
					embed: {
						color: 0x00FF00,
						title: "✅ Success!",
						description: `${member.username}#${member.discriminator} has been kicked.`,
						footer: {
							text: `v2.1 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA`,
						},
					},
				});
				member.send({
					embed: {
						color: 0xFF0000,
						title: "❗ Success!",
						description: `Looks like you've been kicked from ${msg.guild.name} for: ${reason}`,
						footer: {
							text: `v2.1 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA`,
						},
					},
				});
			}).catch(err => {
				msg.channel.send({
					embed: {
						color: 0xFF0000,
						title: "❌ Error!",
						description: err.message,
						footer: {
							text: `v2.1 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA`,
						},
					},
				});
			});
		} else {
			msg.channel.send({
				embed: {
					color: 0xFF0000,
					title: "❌ Error!",
					description: `Could not detect a member.`,
					fields: [{
						name: "Syntax",
						value: `\`${serverDocument.Config.command_prefix}ban @member | reason\``,
					},
					],
					footer: {
						text: `Mention a member you nonce.`,
					},
				},
			});
		}
	} else {
		msg.channel.send({
			embed: {
				color: 0xFF0000,
				title: "❌ Error!",
				description: `You do not have permission to execute this command.`,
				footer: {
					text: `v2.1 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA`,
				},
			},
		});
	}
};
