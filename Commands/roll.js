module.exports = async(client, message, suffix, serverDocument) => {
    const RichEmbed = require("discord.js").MessageEmbed;
  
    var answers = [
      ":one: :thumbsup:",
      ":two: :thumbsup:",
      ":three: :thumbsup:",
      ":four: :thumbsup:",
      ":five: :thumbsup:",
      ":six: :thumbsup:",
    ];
    let embed = new RichEmbed();
    embed.setTitle("🎲 Dice")
        .setColor("#1E90FF")
        .setDescription('The dice rolled a.. ' +answers[Math.floor(Math.random() * answers.length)])
    message.channel.send({embed});
    }
