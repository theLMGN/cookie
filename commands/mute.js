const Discord = require('discord.js');

exports.run = function(client, message, args) {
	var mutedUsers = [];
	function muteUser(user) {
	mutedUsers.push(user.id)
}

function unmuteUser(user) {
	for (var i = mutedUsers.length; i--;) {
		if (mutedUsers[i] === user.id) mutedUsers.splice(i, 1);
	}
}

function removeTimeout(timeoutUser,timeoutChannel,theRole) {
	timeoutUser.removeRole(theRole).then(timeoutChannel.sendMessage(timeoutUser.user.username+"'s timeout has been lifted!"))
	console.log(timeoutUser.user.username+"'s mute has been lifted!")
}

	const embed = new Discord.RichEmbed();
  	let modRole = message.guild.roles.find("name", "Staff");
  	if(message.member.roles.has(modRole.id)) {
	if (!message.mentions.users.first()) {
	embed.setTitle("❌ Error!")
	.setDescription("Missing User!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});

    mutedUser = message.mentions.users.first()
			console.log(mutedUser)
			if (mutedUser == "<@370633770409263106>") {
				embed.setTitle("❌ Error!")
	.setDescription("You Can't Mute Me!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
				return
			}
				embed.setTitle("✅ Success!")
	.setDescription("Successfully Muted!")
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
