const Discord = require("discord.js");
const bot = new Discord.Client;

exports.run = async(client, message, args) => {
	var messageID = "";
	var embeds = [
		// embed 0
		new Discord.MessageEmbed()
			.setTitle("Cookie Help Menu!")
			.setDescription("Press ⏭ to goto the next page\nPress ⏮ to goto the previous page\nPress 🗑 to delete the help menu!")
			.addField("PAGE: ", "1/4")
			.setColor("#3dff3d")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3"),
		// embed 1
		new Discord.MessageEmbed()
			.setTitle("Cookie Help Menu!")
			.setTitle("Information Commands!")
			.addField("--help", "Displays the help for this bot!")
			.addField("--membercount", "Displays the member count for your server!")
			.addField("--userinfo", "Displays your information!")
			.addField("--serverinfo", "Displays information about the current server!")
			.addField("--discord", "Sends an invite to my discord server!")
			.addField("--invite", "Displays an invite for this bot!")
			.addField("PAGE:", "2/4")
			.setColor("#3dff3d")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3"),
		// embed 2
		new Discord.MessageEmbed()
			.setTitle("Cookie Help Menu!")
			.setTitle("Fun Commands!")
			.addField("--jeff", "my name jeff")
			.addField("--devon", "gay?!")
			.addField("--js", "Better then py :)")
			.addField("PAGE:", "3/4")
			.setColor("#3dff3d")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3"),
		// embed 3
		new Discord.MessageEmbed()
			.setTitle("Cookie Help Menu!")
			 	.setTitle("Staff Commands!")
			.addField("--ban {user}", "Bans a user")
			.addField("--kick {user}", "Kicks a user")
			.addField("--prune {user} {amount}", "Prunes the users messages by a certain amount")
			.addField("--mute {user}", "Stops the user from typing in that chat!")
			.addField("--unmute {user}", "Unmutes the user!")
			.addField("--timeout {user} {time}", "Timesout the user for a specified time!")
			.addField("PAGE:", "4/4")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3")
			.setColor("#3dff3d"),
	];

	// Menu Start
	message.react("✅");
	message.channel.send({ embed: embeds[0] }).then(asyncmessage => {
		await message.react("⏮");
		await message.react("⏭");
		await message.react("🗑");
		messageID += message.id;
	});
	var page = 0;

	// reading reactions
	client.on("messageReactionAdd", async(reaction, user) => {
		// make sure only reactions are read for the help message and determine which reaction is pressed
		if (user.id !== client.user.id && reaction.emoji.name !== ("⏮", "⏭", "🗑") && reaction.message.id === messageID) {
			reaction.remove(user);
		}
		if (user.id !== client.user.id && reaction.emoji.name === "⏭" && reaction.message.id === messageID && page === 0) {
			reaction.message.edit({ embed: embeds[1] }).then(asyncmessage => {
				page += 1;
			});

			if (reaction.count > 1 && user.id !== client.user.id) {
				reaction.remove(user);
			}
		}
		if (user.id !== client.user.id && reaction.emoji.name === "⏭" && reaction.message.id === messageID && page === 1) {
			reaction.message.edit({ embed: embeds[2] }).then(asyncmessage => {
				page += 1;
			});
			if (reaction.count > 1 && user.id !== client.user.id) {
				reaction.remove(user);
			}
		}
		if (user.id !== client.user.id && reaction.emoji.name === "⏭" && reaction.message.id === messageID && page === 2) {
			reaction.message.edit({ embed: embeds[3] }).then(asyncmessage => {
			});
			if (reaction.count > 1 && user.id !== client.user.id) {
				reaction.remove(user);
			}
		}
		if (user.id !== client.user.id && reaction.emoji.name === "⏮" && reaction.message.id === messageID && page === 2) {
			reaction.message.edit({ embed: embeds[2] }).then(asyncmessage => {
				page -= 1;
			});
			if (reaction.count > 1 && user.id !== client.user.id) {
				reaction.remove(user);
			}
		}
		if (user.id !== client.user.id && reaction.emoji.name === "⏮" && reaction.message.id === messageID && page === 1) {
			reaction.message.edit({ embed: embeds[1] }).then(asyncmessage => {
				page -= 1;
			});
			if (reaction.count > 1 && user.id !== client.user.id) {
				reaction.remove(user);
			}
		}
		if (user.id !== client.user.id && reaction.emoji.name === "⏮" && reaction.message.id === messageID && page === 0) {
			reaction.message.edit({ embed: embeds[0] });
			if (reaction.count > 1 && user.id !== client.user.id) {
				reaction.remove(user);
			}
		}
		// delete the message if the trashcan is clicked
  	if (user.id !== client.user.id && reaction.emoji.name === "🗑" && reaction.message.id === messageID) {
  		reaction.message.delete();
  		message.delete();
  	}
	});
};
