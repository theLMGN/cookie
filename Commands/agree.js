const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
	message.reply(":white_check_mark:");
	message.member.addRole("name", "Member");
};
