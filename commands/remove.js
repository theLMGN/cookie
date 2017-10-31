const Discord = require('discord.js');
exports.run = function(client, message, args, db){
	let issued = db.get('warnings').value();
	for (var i = 0; i < issued.length; i++) {
   	if(issued[i].id === args[0] && issued[i].deleted === false){
      db.get(`warnings[${i}]`).assign({deleted: true}).write()
      console.log('Successfully removed entry')
    }
	};
};