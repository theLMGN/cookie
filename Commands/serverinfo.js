const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	const embed = new Discord.MessageEmbed();
	embed.setTitle("Information About This Server!")
		.addField(`Owner:`, `${message.guild.owner.user.tag}`)
		.addField(`Guild ID:`, `${message.guild.id}`)
		.addField(`Region:`, `${message.guild.region}`)
		.addField(`Member Count:`, `${message.guild.memberCount}`)
		.addField(`Guild Creation Date:`, `${message.guild.createdAt}`)
		.addField(`Verification Level:`, `${message.guild.verificationLevel}`)
		.setThumbnail(`${message.guild.iconURL({ format: "png" })}`)
		.setColor("#3dff3d")
		.setFooter("v2.1 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
	message.channel.send(embed);
}
;
