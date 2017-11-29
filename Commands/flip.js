module.exports = async(client, message, suffix, serverDocument) => {
    const RichEmbed = require("discord.js").MessageEmbed;
  
    var answers = [
      "Heads :thumbsup:",
      "Tails :thumbsup:",
    ];

    let embed = new RichEmbed();
    embed.setTitle("💰 Heads Or Tails? ")
        .setColor("#1E90FF")
        .setDescription('You got.. ' +answers[Math.floor(Math.random() * answers.length)])
    message.channel.send({embed});
    }
