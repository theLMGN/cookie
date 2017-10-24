const Discord = require("discord.js");
const client = new Discord.Client();
client.login('TOKEN HERE');
let prefix = "--";
var mutedUsers = [];
var upSecs = 16;
var upMins = 18;
var upHours = 6;
var upDays = 40;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setPresence({ game: { name: "In Beta | --help", type: 0 } });
});


function muteUser(user) {
	mutedUsers.push(user.id)
}

function unmuteUser(user) {
	for (var i = mutedUsers.length; i--;) {
		if (mutedUsers[i] === user.id) mutedUsers.splice(i, 1);
	}
}

function removeTimeout(timeoutUser,timeoutChannel,theRole) {
	timeoutUser.removeRole(theRole).then(timeoutChannel.sendMessage(timeoutUser.user.username+"'s timeout has been lifted!"))
	console.log(timeoutUser.user.username+"'s mute has been lifted!")
}

client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);	


    if(!message.guild) {
  	message.reply("Hey, I don't work using DMs, Join Sam's Lounge! https://discord.gg/7vbPubA")
    return
  	}

 if (command === "ping") {
	const embed = new Discord.RichEmbed();
	embed.setTitle("")
	.addField("Pong! :ping_pong:", `${Math.floor(client.ping)}ms`)
	.setColor("#3dff3d")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	message.channel.send({embed});
	return
}

 if (command === "membercount") {
	 const embed = new Discord.RichEmbed();
	 embed.setTitle("Member Count")
	 .setDescription("You Currently Have " + message.guild.memberCount + " Members!")
	 .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	 .setColor("#3dff3d")
	 message.channel.sendMessage({embed});
	 return
 }

	
  if (command === "mute") {
const embed = new Discord.RichEmbed();
  let modRole = message.guild.roles.find("name", "Staff");
  if(message.member.roles.has(modRole.id)) {
			if (!message.mentions.users.first()) {
	embed.setTitle("❌ Error!")
	.setDescription("Missing User!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
				return
			}
				
			mutedUser = message.mentions.users.first()
			console.log(mutedUser)
			if (mutedUser == "<@370633770409263106>") {
				embed.setTitle("❌ Error!")
	.setDescription("You Can't Mute Me!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
				return
			}
				embed.setTitle("✅ Success!")
	.setDescription("Successfully Muted!")
	.setColor("#3dff3d")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	message.channel.sendMessage({embed});
			muteUser(mutedUser)

		} else {
				embed.setTitle("❌ Error!")
	.setDescription("You haven't got Staff silly!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	message.channel.sendMessage({embed});
		return
		}
  }
  
  if (command === "strike") {
const embed = new Discord.RichEmbed();
  let modRole = message.guild.roles.find("name", "Staff");
  if(message.member.roles.has(modRole.id)) {
			if (!message.mentions.users.first()) {
	embed.setTitle("❌ Error!")
	.setDescription("Provide a user and a reason!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
				return
			}
				
			mutedUser = message.mentions.users.first()
			console.log(mutedUser)
			if (mutedUser == "<@370633770409263106>") {
				embed.setTitle("❌ Error!")
	.setDescription("You Can't Strike Me!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
				return
			}
				embed.setTitle("✅ Success!")
	.setDescription("The Strike Has Been Added!")
	.setColor("#3dff3d")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	message.channel.sendMessage({embed});
	return
			muteUser(mutedUser)

		} else {
				embed.setTitle("❌ Error!")
	.setDescription("You haven't got Staff silly!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	message.channel.sendMessage({embed});
		return
		}
  } 
  
  if (command === "rules") { 
  if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send(`${message.author} Bad perms, git gud skrub`)  
    const embed = new Discord.RichEmbed();
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
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	message.channel.send({embed})
	return
  }
  
 if (command === "unmute") {
const embed = new Discord.RichEmbed();
  let modRole = message.guild.roles.find("name", "Staff");
  if(message.member.roles.has(modRole.id)) {
			if (!message.mentions.users.first()) {
	embed.setTitle("❌ Error!")
	.setDescription("Missing User!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
				return
			}
				
			unmutedUser = message.mentions.users.first()
			console.log(unmutedUser)
			if (unmutedUser == "<@370633770409263106>") {
				embed.setTitle("❌ Error!")
	.setDescription("You Can't Unmute Me, I can't be muted!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
				return
			}
				embed.setTitle("✅ Success!")
	.setDescription("Successfully Unmuted!")
	.setColor("#3dff3d")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	message.channel.sendMessage({embed});
			unmuteUser(unmutedUser)

		} else {
				embed.setTitle("❌ Error!")
	.setDescription("You haven't got Staff silly!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	message.channel.sendMessage({embed});
		return
		}
 }

 if (command === "serverinfo") {
	 const embed = new Discord.RichEmbed();
	embed.setTitle("Information About This Server!")
	.setDescription("Owner: " + message.guild.owner.user.username + "\nGuild ID: " + message.guild.id + "\nRegion: " + message.guild.region + "\nMember Count: " + message.guild.memberCount + "\nGuild Creation Date: " + message.guild.createdAt + "\nVerification Level: " + message.guild.verificationLevel + "\nGuild Icon: " + message.guild.iconURL)
	.setColor("#3dff3d")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	message.channel.send({embed});
	return
 }
	
if (command === "userinfo") {
	const embed = new Discord.RichEmbed();
	embed.setTitle("Information About You!")
	.setDescription("Username: " + message.author.username + "#" + message.author.discriminator + "\nStatus: " + message.author.presence.status + "\nID: " + message.author.id + "\nJoined At: " + message.member.joinedAt + "\nCreated At: " + message.author.createdAt + "\nHighest Role: " + message.member.highestRole.name + "\nKickable? " + message.member.kickable + "\nUser Avatar \n" + message.author.avatarURL)	
  		.setColor("#3dff3d")
		.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
		message.channel.send({embed});
		return
	}

		 if (command === "discord") {
	 message.react("✅")
	 const embed = new Discord.RichEmbed();
	 message.delete();
	 embed.setTitle("✅ Link Sent In DM!")
	 .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	 .setColor("#3dff3d")
	 message.channel.sendMessage({embed}); 
	 }
  
     if (command === "discord") {
	 const embed = new Discord.RichEmbed();
	 message.delete();
	 embed.setTitle("Discord Server!")
	 .setDescription("Join My Discord Server! https://discord.gg/7vbPubA")
	 .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	 .setColor("#3dff3d")
	 message.author.sendMessage({embed}); 
	 return
   }	
   
    if (command === "invite") {
	 message.react("✅")
	 const embed = new Discord.RichEmbed();
	 message.delete();
	 embed.setTitle("✅ Link Sent In DM!")
	 .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	 .setColor("#3dff3d")
	 message.channel.sendMessage({embed}); 
	 }
  
     if (command === "invite") {
	 const embed = new Discord.RichEmbed();
	 message.delete();
	 embed.setTitle("Bot Invite!")
	 .setDescription("This Bot Is Currently Private!")
	 .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	 .setColor("#3dff3d")
	 message.author.sendMessage({embed}); 
	 return
   }	   
  
   if (command === "help") {
	 message.react("✅")
	 const embed = new Discord.RichEmbed();
	 message.delete();
	 embed.setTitle("✅ Help Sent In DM!")
	 .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	 .setColor("#3dff3d")
	 message.channel.sendMessage({embed});  
   }
 
   if (command === "help") {
	 const embed = new Discord.RichEmbed();
	 message.delete();
	 embed.setTitle("Cookie Help!")
	 .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	 .setColor("#3dff3d")
	 message.author.sendMessage({embed}); 
   }	 
 
  if (command === "help") {
const embed = new Discord.RichEmbed();	 
  embed.setTitle("Cookie Help")
	 embed.setTitle("Information Commands!")
	 .addField("--help", "Displays the help for this bot!")
	 .addField("--membercount", "Displays the member count for your server!")
	 .addField("--userinfo", "Displays your information!")
	 .addField("--serverinfo", "Displays information about the current server!")
	 .addField("--discord", "Sends an invite to my discord server!")
	 .addField("--invite", "Displays an invite for this bot!")
	 .setColor("#3dff3d")
	 .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	 message.author.sendMessage({embed});  
  }
  
 if (command === "help") {
	 const embed = new Discord.RichEmbed();
	 embed.setTitle("Fun Commands!")
	 .addField("--jeff", "my name jeff")
	 .addField("--devon", "gay?!")
	 .addField("--js", "Better then py :)")
	 .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	 .setColor("#3dff3d")
	 message.author.sendMessage({embed});
 }
 
 if (command === "help") {
	 const embed = new Discord.RichEmbed();
	 message.delete();
 	 embed.setTitle("Staff Commands!")
	 .addField("--ban {user}", "Bans a user")
	 .addField("--kick {user}", "Kicks a user")
	 .addField("--prune {user} {amount}", "Prunes the users messages by a certain amount")
	 .addField("--mute {user}", "Stops the user from typing in that chat!")
	 .addField("--unmute {user}", "Unmutes the user!")
	 .addField("--timeout {user} {time}", "Timesout the user for a specified time!")
	 .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	 .setColor("#3dff3d")
	 message.author.sendMessage({embed}); 
	 return
 }

if (command === "js") {
	 const embed = new Discord.RichEmbed();
	 message.delete();
	 embed.setTitle("The Truth")
	 .setDescription("JS > PY")
	 .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	 .setColor("#3dff3d")
	 message.channel.sendMessage({embed});
	 return
}

if (command === "info") {
	const embed = new Discord.RichEmbed();
	embed.setTitle("Cookie")
	.setDescription("By Sam.#8235")
	.setThumbnail("https://cdn.discordapp.com/attachments/369522450502909954/371804672362676229/download_1.jpg")
	.addField("Discord Server:", "https://discord.gg/7vbPubA")
	.addField("Current Version:", "2.6.5")
	.addField("Ping: ", `${Math.floor(client.ping)}ms`)
	.setColor("#1d54f9")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	message.channel.send({embed});
	return
  }
  
if (command === "devonisapiddo") {
	message.channel.send("https://cdn.discordapp.com/attachments/343901736706113537/371805835333992448/Screen_Shot_2017-10-23_at_00.43.02.png")
	return
  }

if (command === "devon") {
	 const embed = new Discord.RichEmbed();
	 message.delete();
	 embed.setTitle("The Truth")
	 .setDescription("DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY DEVON IS GAY ")
	 .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	 .setColor("#3dff3d")
	 message.channel.sendMessage({embed});
	 return
}

if (command === "jeff") {
	message.channel.sendMessage("http://knowyourmeme.com/memes/my-name-is-jeff")
	return
}
	
if (command === "kick") {
const embed = new Discord.RichEmbed();
  let modRole = message.guild.roles.find("name", "Staff");
  if(message.member.roles.has(modRole.id)) {
	    if(message.member.roles.has(modRole.id)) {
			if (!message.mentions.users.first()) {
	embed.setTitle("❌ Error!")
	.setDescription("Provide a user and a reason!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
				return
			}
    let kickMember = message.guild.member(message.mentions.users.first());
    message.guild.member(kickMember).kick();
	embed.setTitle("✅ Success!")
	.setDescription("User was successfully kicked!")
	.setColor("#3dff3d")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
    } else {
	embed.setTitle("❌ Error!")
	.setDescription("You do not have permissions to kick!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
    }
  }
  return
}

if (command === "ban") {
const embed = new Discord.RichEmbed();
  let modRole = message.guild.roles.find("name", "Staff");
  if(message.member.roles.has(modRole.id)) {
	    if(message.member.roles.has(modRole.id)) {
			if (!message.mentions.users.first()) {
	embed.setTitle("❌ Error!")
	.setDescription("Provide a user and a reason!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
				return
			}
    let banMember = message.guild.member(message.mentions.users.first());
    message.guild.member(banMember).ban();
	embed.setTitle("✅ Success!")
	.setDescription("User was successfully banned!")
	.setColor("#3dff3d")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
    } else {
	embed.setTitle("❌ Error!")
	.setDescription("You do not have permissions to kick!")
	.setColor("#ff0000")
	.setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
    message.channel.sendMessage({embed});
	return
    }
  }
}
else {
	 const embed = new Discord.RichEmbed();
	 embed.setTitle("❌ Error!")
	 .setDescription("Invalid Command!")
	 .setFooter("v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA")
	 .setColor("#ff0000")
	 message.channel.sendMessage({embed});
	 return
}
})