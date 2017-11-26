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
