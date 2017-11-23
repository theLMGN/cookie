const shortid = require("shortid");
const Discord = require("discord.js");
exports.run = function(client, message, suffix, db) {
	const embed = new Discord.MessageEmbed();
	const embed2 = new Discord.MessageEmbed();
	let modRole = message.guild.roles.find("name", "Cookie Developers");
	if (!message.member.roles.has(modRole.id)) {
  	embed.setTitle("❌ Error!")
			.setDescription("You haven't got Staff silly!")
			.setColor("#ff0000")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
		message.channel.send({ embed });
	}
	if (message.mentions.members.first() === "370633770409263106") {
  	embed.setTitle("❌ Error!")
  		.setDescription("You Can't Strike Me!")
			.setColor("#ff0000")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
  	message.channel.send({ embed });
	}
	if (!message.mentions.members.first() || suffix.slice(1).join(" ") === "") {
		embed.setTitle("❌ Error!")
			.setDescription("Provide a user and a reason!")
			.setColor("#ff0000")
			.setFooter("v2.6.5 | Cookie, By Sam .#8235 | https://discord.gg/tuaVr3");
		message.channel.send({ embed });
	} else {
		embed.setTitle("✅ Success!")
			.setDescription("The Strike Has Been Added!")
			.setColor("#008000")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
		message.channel.send({ embed });

		let memberId = message.mentions.members.first().id;
		let memberName = message.mentions.members.first().user.tag;
		var striken = message.mentions.members.first();
		let serverName = message.guild.name;
		let serverId = message.guild.id;
		let reasonCode = suffix.slice(1).join(" ");
		let date = new Date();

		embed2.setTitle("‼ You were striked!")
			.addField("Server:", serverName, true)
			.addField("Reason:", reasonCode, true)
			.addField("By:", message.author.tag, true)
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
		striken.send({ embed: embed2 });

		db
			.get("warnings")
			.push({ id: shortid.generate(), server_name: serverName, server_id: serverId, member_name: memberName, member_id: memberId, reason: reasonCode, date: date, deleted: false })
			.write();
	}
};
