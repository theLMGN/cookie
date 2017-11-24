const moment = require("moment");

module.exports = async(client, msg, suffix, serverDocument, winston) => {
	if (suffix) {
		// const member = suffix.toLowerCase() == "me" ? msg.member : client.memberSearch(suffix, msg.guild);
		let member;
		member = await client.memberSearch(suffix, msg.guild).catch(() => {
			member = null;
		});
		if (member) {
			var targetMemberDocument = serverDocument.members.id(member.id);
			// Create member data if not found
			if (!targetMemberDocument) {
				serverDocument.members.push({ _id: msg.author.id });
				targetMemberDocument = serverDocument.members.id(msg.author.id);
				targetMemberDocument.strikes = [];
			}
			let embed_fields = [];
			targetMemberDocument.strikes.map(strikeDocument => {
				// const creator = msg.guild.members.get(strikeDocument._id);
				const creator = client.memberSearch(strikeDocument._id, msg.guild);
				msg.reply(creator.tag)
				embed_fields.push({
					name: `Warning from ${creator.toString()}`,
					value: `${strikeDocument.reason} - ${moment(strikeDocument.timestamp).fromNow()}`,
					inline: true,
				});
			});
			if (targetMemberDocument.strikes.length == 0) {
				msg.channel.send({
					embed: {
						author: {
							name: client.user.username,
						},
						color: 0x00FF00,
						description: `✅ **${member.toString()}** doesn't have any strikes`,
						footer: {
							text: `They are a nice person`,
						},
					},
				});
			} else {
				msg.channel.send({
					embed: {
						author: {
							name: client.user.username,
						},
						color: 0x00FF00,
						title: `Here are the strikes for ${member.targetMemberDocument}`,
						fields: embed_fields,
					},
				});
			}
		} else {
			winston.warn(`Requested member does not exist so strikes cannot be shown`, { svrid: msg.guild.id, chid: msg.channel.id, usrid: msg.author.id });
			msg.channel.send(`I don't know who ${suffix} is! 😦`);
		}
	} else {
		msg.reply("Everyone on this server has no strikes!");
	}
};
