const Discord = require("discord.js");

exports.run = function(client, meessage, args) {
	var mutedUsers = [];
	function muteUser(user) {
		mutedUsers.push(user.id);
	}

	function unmuteUser(user) {
		for (var i = mutedUsers.length; i--;) {
			if (mutedUsers[i] === user.id) mutedUsers.splice(i, 1);
		}
	}

	function removeTimeout(timeoutUser, timeoutChannel, theRole) {
		timeoutUser.removeRole(theRole).then(timeoutChannel.sendMessage(`${timeoutUser.user.username}'s timeout has been lifted!`));
		winston.info(`${timeoutUser.user.username}'s mute has been lifted!`);
	}
	const embed = new Discord.MessageEmbed();
  	let modRole = message.guild.roles.find("name", "Staff");
  	if (message.member.roles.has(modRole.id)) {
		if (!message.mentions.users.first()) {
			embed.setTitle("❌ Error!")
				.setDescription("Missing User!")
				.setColor("#ff0000")
				.setFooter("v2.0 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
			message.channel.send({ embed });

			unmutedUser = message.mentions.users.first();
			winston.info(unmutedUser);
			if (unmutedUser == "<@370633770409263106>") {
				embed.setTitle("❌ Error!")
					.setDescription("You Can't Unmute Me, I can't be muted!")
					.setColor("#ff0000")
					.setFooter("v2.0 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
				message.channel.send({ embed });
				return;
			}
			embed.setTitle("✅ Success!")
				.setDescription("Successfully Unmuted!")
				.setColor("#3dff3d")
				.setFooter("v2.0 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
			message.channel.send({ embed });
			unmuteUser(unmutedUser);
		} else {
			embed.setTitle("❌ Error!")
				.setDescription("You haven't got Staff silly!")
				.setColor("#ff0000")
				.setFooter("v2.0 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
			message.channel.send({ embed });
		}
	}
};
