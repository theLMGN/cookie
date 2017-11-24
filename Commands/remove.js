const Discord = require("discord.js");
const embed = new Discord.MessageEmbed();
exports.run = function(client, message, args, db) {
	let issued = db.get("warnings").value();
	for (var i = 0; i < issued.length; i++) {
   	if (issued[i].id === args[0] && issued[i].deleted === false) {
			db.get(`warnings[${i}]`).assign({ deleted: true }).write();
			if (!message.mentions.members.first()) {
				embed.setTitle("✅ Success!")
					.setDescription("Strike Deleted!")
					.setColor("#008000")
					.setFooter("v2.0 | Cookie, By Sam.#8235 | https://discord.gg/tuaVr3");
				message.channel.send({ embed });
			}
	 }
	}
};
