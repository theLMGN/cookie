const Discord = require('discord.js');
const embed = new Discord.RichEmbed();
exports.run = function(client, message, args, db){
	let issued = db.get('warnings').value();
	for (var i = 0; i < issued.length; i++) {
   	if(issued[i].id === args[0] && issued[i].deleted === false){
      db.get(`warnings[${i}]`).assign({deleted: true}).write()
      if(!message.mentions.members.first()) {
        embed.setTitle("✅ Success!")
          .setDescription("Strike Deleted!")
          .setColor("#008000")
          .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA");
        message.channel.send({embed});
      }
	 };
  };
};