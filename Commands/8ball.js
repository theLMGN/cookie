module.exports = async(client, message, suffix, serverDocument) => {
    const RichEmbed = require("discord.js").MessageEmbed;
  
    var answers = [
      "Yes :thumbsup:",
      "No :thumbsdown:",
      "Maybe :wink:",
      "Sure :thumbsup:",
      "Ask again later. :confused:",
    ];
  if (message.content.length >7) {
    let embed = new RichEmbed();
    embed.setTitle("8 Ball 🎱")
        .setColor("#1E90FF")
        .setDescription('8 Ball says: ' +answers[Math.floor(Math.random() * answers.length)])
    message.channel.send({embed});
    }
    else {
      let embed = new RichEmbed();
      embed.setTitle("8 Ball 🎱")
          .setColor("#1E90FF")
          .setDescription('8 Ball says: Remember to ask a question.')
      message.channel.send({embed});
    }
    }