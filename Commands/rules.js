const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send(`${message.author} Bad perms, git gud skrub`).catch(console.error);
	const embed = new Discord.MessageEmbed();
	message.delete();
	embed.setTitle("Rules")
		.setDescription("Every server needs Rules! Right?")
		.setThumbnail("https://cdn.discordapp.com/attachments/369522450502909954/371804672362676229/download_1.jpg")
		.setColor("#3dff3d")
		.addField("Rule 1:", "Follow the Discord TOS (https://discordapp.com/tos)")
		.addField("Rule 2:", "Be Respectful to other members of the community")
		.addField("Rule 3:", "No Drama, if things get heated take it to the DMs")
		.addField("Rule 4:", "No Doxing, people like private information to stay private")
		.addField("Rule 5:", "Harrasment is not allowed, this will be enforced heavily within this community")
		.addField("Rule 6:", "Promotion is not allowed, Yes... I know you have 10 amazing subs, but no need to show off!")
		.addField("Rule 7:", "No Spamming, no-one likes a spammer... NO-ONE")
		.addField("Rule 8:", "No NSFW, yes... Everyone likes a little bit of it, but not here. Keep it clean!")
		.addField("Rule 9:", "Reading is exhausting... Well at least you've finished the rules!")
		.setFooter("v2.0 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
	message.channel.send(embed);
};
