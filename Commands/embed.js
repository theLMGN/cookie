module.exports = async(client, message, suffix, serverDocument) => {
const Discord = require("discord.js");
const embed = new Discord.MessageEmbed();
const embed1 = new Discord.MessageEmbed();

  embed.setTitle("❌ Permission Error")
      .setColor("#F20000")
      .setDescription("It seems you have got something wrong... ```You do not have high enough permissions to do this.```")
  if (!message.member.hasPermission("MENTION_EVERYONE"))
  return message.channel.send({embed});

  let text = message.content.split(/\s+/g).slice(1).join(" ");
  console.log(text);
  embed1.setTitle(``)
    .setAuthor(`${message.author.tag}`)
    .setThumbnail(`${message.author.avatarURL({ format: "png" })}`)
    .setColor("#1E90FF")
    .setDescription("\n" + text)
  message.channel.send({embed: embed1});
  message.delete()
}