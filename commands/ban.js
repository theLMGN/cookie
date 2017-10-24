const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
 	let modRole = message.guild.roles.find("name", "Staff");
  	if(message.member.roles.has(modRole.id)) {
	    if(message.member.roles.has(modRole.id)) {
			if (!message.mentions.users.first()) {
	embed.setTitle("❌ Error!")
	.setDescription("Provide a user and a reason!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
				return
			}
    let banMember = message.guild.member(message.mentions.users.first());
    message.guild.member(banMember).ban();
	embed.setTitle("✅ Success!")
	.setDescription("User was successfully banned!")
	.setColor("#3dff3d")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
    } else {
	embed.setTitle("❌ Error!")
	.setDescription("You do not have permissions to kick!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
}