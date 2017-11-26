
const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();

module.exports = async(client, message, suffix, serverDocument) => {
      if(message.mentions.users.first()) {
         let user = message.mentions.users.first();
               embed.setTitle(`Avatar of ${user.username}`)
                    .setColor("#1E90FF")
                    .setImage(`${message.author.avatarURL({ format: "png" })}`)
               message.channel.send({embed});
      } else {
        embed.setTitle(`Avatar of ${message.author.username}`)
             .setColor("#1E90FF")
             .setImage(`${message.author.avatarURL({ format: "png" })}`)
       message.channel.send({embed});
      }
    }
    