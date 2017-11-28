const settings = require("../settings.json");

module.exports = async(client, msg, suffix, serverDocument) => {
	if (serverDocument.Config.admins.id(msg.author.id).level >= 1 || settings.maintainers.includes(msg.author.id)) {
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
			let targetMemberDocument = serverDocument.members.id(member.id);
			if (!targetMemberDocument) {
				serverDocument.members.push({ _id: member.id });
				targetMemberDocument = serverDocument.members.id(member.id);
			}
			targetMemberDocument.strikes.push({
				_id: msg.author.id,
				reason: reason || "No reason",
			});
			await serverDocument.save().then(() => {
				if (reason) {
					msg.channel.send({
						embed: {
							color: 0x00FF00,
							author: {
								name: `${client.user.username}`,
							},
							description: `${member.user.username} has been striked for: ${reason}`,
							footer: {
								text: `They now have ${targetMemberDocument.strikes.length} strike(s).`,
							},
						},
					});
				} else {
					msg.channel.send({
						embed: {
							color: 0x00FF00,
							author: {
								name: `${client.user.username}`,
							},
							description: `${member.user.username} has been striked for: No Reason`,
							footer: {
								text: `They now have ${targetMemberDocument.strikes.length} strike(s).`,
							},
						},
					});
				}
			}).catch(err => {
				msg.channel.send({
					embed: {
						color: 0xFF0000,
						title: "❌ Error",
						description: `Could not add strike to member: ${err}`,
						footer: {
							text: `If you do not understand this error please DM a Cookie developer.`,
						},
					},
				});
			});
		} else {
			msg.channel.send({
				embed: {
					color: 0xFF0000,
					title: "❌ Error",
					description: `Could not detect a member.`,
					fields: [{
						name: "Syntax",
						value: `\`${serverDocument.Config.command_prefix}strike @member | reason\``,
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
				title: "❌ Error",
				description: `You do not have permission to execute this command`,
				footer: {
					text: `v2.1 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA`,
				},
			},
		});
	}
};
