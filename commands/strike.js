const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
  	let modRole = message.guild.roles.find("name", "Staff");
  	if(message.member.roles.has(modRole.id)) {
			if (!message.mentions.users.first()) {
	embed.setTitle("❌ Error!")
	.setDescription("Provide a user and a reason!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});

    mutedUser = message.mentions.users.first()
			console.log(mutedUser)
			if (mutedUser == "<@370633770409263106>") {
				embed.setTitle("❌ Error!")
	.setDescription("You Can't Strike Me!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
			}
				embed.setTitle("✅ Success!")
	.setDescription("The Strike Has Been Added!")
	.setColor("#3dff3d")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	message.channel.sendMessage({embed});
			muteUser(mutedUser)

		} else {
	embed.setTitle("❌ Error!")
	.setDescription("You haven't got Staff silly!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	message.channel.sendMessage({embed});
		}
}