const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument, winston) => {
	let role = message.guild.roles.find("name", "Member");
	let member = message.member;
	member.addRole(role).catch(winston.error);
};
