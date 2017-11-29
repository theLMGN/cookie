module.exports = async(client, message, suffix, serverDocument) => {
const Discord = require("discord.js");
const embed = new Discord.MessageEmbed();

    embed.setTitle("About Cookie")
    .setColor("#1E90FF")
    .setThumbnail("https://i.novuscommunity.co/6fwgBP.png")
    .addField("General", "Cookie is a new Discord Bot for the future!")
    .addField("About the Bot", "Cookie is a Discord.JS bot created by Sam.#8235 and SunburntRock89#6617")
    .addField("Support Server", "[Get Support for the Bot here!](https://discord.gg/Td3Pvt5)")
    .addField("Credits", "I took some inspiration from a bot called Poni, check it out [here!](https://ponibot.xyz)")
    .setFooter(`Cookie | v2.1 | by Sam.#8235`,`https://i.novuscommunity.co/6fwgBP.png`)
    message.channel.send({embed});
  }