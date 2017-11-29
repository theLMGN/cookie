<<<<<<< HEAD
const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	if (suffix) {
		// const member = suffix.toLowerCase() == "me" ? msg.member : client.memberSearch(suffix, msg.guild);
		let member;
		member = await client.memberSearch(suffix, message.guild).catch(() => {
			member = null;
		});
		const embed = new Discord.MessageEmbed();
		embed.setTitle("Information About You!")
			.addField(`Username:`, `${member.toString().tag}`)
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
	} else {
		const embed = new Discord.MessageEmbed();
		embed.setTitle("❌ Error!");
		embed.setDescription("Could not detect a member.");
		embed.addField("Syntax", `\`${await Servers.findOne({ _id: message.guild.id }).Config.command_prefix}userinfo @user\``);
		message.channel.send(embed);
	}
};
=======
const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
		const Discord = require('discord.js');
		const embed = new Discord.MessageEmbed();
			if(message.mentions.users.first()) {
				  let user = message.mentions.users.first();
				  embed.setTitle(`User info for ${user.username}`)
					  .setColor("#1E90FF")
					  .setThumbnail(user.avatarURL({ format: "png" }))
					  .setDescription(`Here is some user information I found for ${user.username}`)
					  .addField("Name", `${user.username} #${user.discriminator}`)
					  .addField("ID", `${user.id}`)
					  .addField("Time Created", `${user.createdAt}`)
					  .addField("Bot?", `${user.bot}`)
					 message.channel.send({embed});
			} else {
			  embed.setTitle("❌ Error")
				  .setColor("#F20000")
				  .setDescription("It seems you have got something wrong... ```Please mention a user to get the info of.```")
				  message.channel.send({embed})
			}
		}
>>>>>>> e28b977b05e788db439545287e0df56b6b1e30f4
