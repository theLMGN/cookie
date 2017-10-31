const Discord = require('discord.js');
exports.run = function(client, message, args, db) {
	const embed = new Discord.RichEmbed();
  let modRole = message.guild.roles.find("name", "Cookie Developers");
  if(!message.member.roles.has(modRole.id)){
  	embed.setTitle("❌ Error!")
			.setDescription("You haven't got Staff silly!")
			.setColor("#ff0000")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA");
		message.channel.send({embed});
	}
  if(message.mentions.members.first() === "370633770409263106") {
  	embed.setTitle("❌ Error!")
  		.setDescription("You Can't Strike Me!")
			.setColor("#ff0000")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA");
  	message.channel.send({embed});
	}
	if(!message.mentions.members.first()) {
		embed.setTitle("❌ Error!")
			.setDescription("Provide a user")
			.setColor("#ff0000")
			.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA");
		message.channel.send({embed});
	}else {
		let memberID = message.mentions.members.first().id;
 		let issued = db.get('warnings').value();
 		var totes = ''
 		for (var i = 0; i < issued.length; i++) {
   		var strike = [issued[i].reason];
   		var member = [issued[i].member_id];
   		var id = [issued[i].id];
   		var servName = [issued[i].server_name];
   		var memName = [issued[i].member_name];
   		var servId = [issued[i].server_id];
   		var deletion = [issued[i].deleted]
   		var date = [issued[i].date]
   		if (issued[i].member_id === memberID && issued[i].deleted === false) {
     		totes += `\n┌───────────┐\n│  Strike ID│ ${id} \n├───────────┤\n│Server Name│ ${servName} \n├───────────┤\n│  Server ID│ ${servId} \n├───────────┤\n│Member Name│ ${memName} \n├───────────┤\n│  Member ID│ ${member} \n├───────────┤\n│     Reason│ ${strike} \n├───────────┤\n│       Date│ ${date} \n└───────────┘\n`;
   		};
 		};
 		if(totes === '') {
 			embed.setTitle("❌ Error!")
				.setDescription("No Strikes Found")
				.setColor("#ff0000")
				.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA");
			message.channel.send({embed});
		}else{
 			message.channel.send(totes, {
 			code:"diff",
 			split: true});
 		}
	};
};