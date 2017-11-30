const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	const embed2 = new Discord.MessageEmbed();
	embed2.setTitle("Discord Server!")
		.setDescription("[Ether Community](https://discord.gg/tuaVr3) Or join [Cookie Support](https://discord.gg/Td3Pvt5)")
		.setFooter("v2.1")
		.setColor("#3dff3d");
	message.channel.send(embed2);
};
