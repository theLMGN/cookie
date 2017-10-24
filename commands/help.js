const Discord = require('discord.js');

exports.run = function(client, message, args) {
	message.react("✅")
	const embed1 = new Discord.RichEmbed();
	message.delete();
	embed1.setTitle("✅ Help Sent In DM!")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	.setColor("#3dff3d")
	message.channel.sendMessage({embed: embed1});

	const embed2 = new Discord.RichEmbed();
	message.delete();
	embed2.setTitle("Cookie Help!")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	.setColor("#3dff3d")
	message.author.sendMessage({embed: embed2}); 

	const embed3 = new Discord.RichEmbed();	 
 	embed3.setTitle("Cookie Help")
	embed3.setTitle("Information Commands!")
	.addField("--help", "Displays the help for this bot!")
	.addField("--membercount", "Displays the member count for your server!")
	.addField("--userinfo", "Displays your information!")
	.addField("--serverinfo", "Displays information about the current server!")
	.addField("--discord", "Sends an invite to my discord server!")
	.addField("--invite", "Displays an invite for this bot!")
	.setColor("#3dff3d")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	message.author.sendMessage({embed: embed3});

	const embed4 = new Discord.RichEmbed();
	embed4.setTitle("Fun Commands!")
	.addField("--jeff", "my name jeff")
	.addField("--devon", "gay?!")
	.addField("--js", "Better then py :)")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	.setColor("#3dff3d")
	message.author.sendMessage({embed: embed4});

	const embed5 = new Discord.RichEmbed();
	message.delete();
 	embed5.setTitle("Staff Commands!")
	.addField("--ban {user}", "Bans a user")
	.addField("--kick {user}", "Kicks a user")
	.addField("--prune {user} {amount}", "Prunes the users messages by a certain amount")
	.addField("--mute {user}", "Stops the user from typing in that chat!")
	.addField("--unmute {user}", "Unmutes the user!")
	.addField("--timeout {user} {time}", "Timesout the user for a specified time!")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	.setColor("#3dff3d")
	 message.author.sendMessage({embed: embed5}); 
}