const shortid = require('shortid');
const Discord = require('discord.js');
exports.run = function(client, message, args, db) {
	const embed = new Discord.RichEmbed();
  let modRole = message.guild.roles.find("name", "Cookie Developers");
  if(!message.member.roles.has(modRole.id)){
  	embed.setTitle("❌ Error!")
			.setDescription("You haven't got Staff silly!")
			.setColor("#ff0000")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA");
		message.channel.send({embed});
	}
  if(message.mentions.members.first() === "370633770409263106") {
  	embed.setTitle("❌ Error!")
  		.setDescription("You Can't Strike Me!")
			.setColor("#ff0000")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA");
  	message.channel.send({embed});
	}
	if(!message.mentions.members.first() || args.slice(1).join(' ') === ''){
		embed.setTitle("❌ Error!")
			.setDescription("Provide a user and a reason!")
			.setColor("#ff0000")
			.setFooter("v2.6.5 | Cookie, By Sam .#8235 | https://discord.gg/7vbPubA");
		message.channel.send({embed});
	} else {
		embed.setTitle("✅ Success!")
			.setDescription("The Strike Has Been Added!")
			.setColor("#008000")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA");
		message.channel.send({embed});
		
		let memberId = message.mentions.members.first().id;
		let memberName = message.mentions.members.first().user.tag;
		let serverName = message.guild.name;
		let serverId = message.guild.id;
		let reasonCode = args.slice(1).join(' ');
		let date = new Date()

		db
			.get('warnings')
			.push({id: shortid.generate(), server_name: serverName, server_id: serverId, member_name: memberName, member_id: memberId, reason: reasonCode, date: date, deleted: false})
			.write()

		};
};