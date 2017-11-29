module.exports = async(client, message, suffix, serverDocument) => {
  const Discord = require('discord.js')
  const embed = new Discord.MessageEmbed();
  const embed1 = new Discord.MessageEmbed();
  const logs = client.channels.get("381762241931771904");
  
    embed.setTitle("❌ Permission Error")
        .setColor("#F20000")
        .setDescription("It seems you have got something wrong... ```You do not have high enough permissions to do this.```")
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed});
    let messagecount = parseInt(args.join(' '));
    message.channel.fetchMessages({
      limit: messagecount
    }).then(messages => message.channel.bulkDelete(messages));
  
    embed1.setTitle("✅ Messages purged.")
      .setColor("#7CFC00")
      .setDescription("The following ammount of messages have been purged: ```" +  messagecount + "```")
    message.channel.send({embed: embed1});
  
    embed.setTitle("Messages Purged")
    .setColor("#7CFC00")
    .setDescription(messagecount + ` messages were purged in ${message.channel}`)
    logs.send({embed});
  }
  