const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	const embed = new Discord.MessageEmbed();
	embed.setTitle("Information About This Server!")
		.setDescription(`Owner: ${message.guild.owner.user.username}\nGuild ID: ${message.guild.id}\nRegion: ${message.guild.region}\nMember Count: ${message.guild.memberCount}\nGuild Creation Date: ${message.guild.createdAt}\nVerification Level: ${message.guild.verificationLevel}\nGuild Icon: ${message.guild.iconURL}`)
		.setColor("#3dff3d")
		.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
	message.channel.send({ embed });
}
;
