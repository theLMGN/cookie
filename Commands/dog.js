var randomPuppy = require("random-puppy");
const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
    randomPuppy().then(url => {
        message.channel.send({
            embed: {
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                description: `Here's your dog picture:`,
                image: {
                    url: url
                },
                footer: {
                    icon_url: url,
                    text: `v2.1`
                }
            }
        })
    }).catch(err => {
        winston.error(`Failed to get dog image`, {
            svrid: message.guild.id,
            usrid: message.author.id
        }, err)
        message.channel.send({
            embed: {
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                color: 0x00FF00,
                description: `Woof woof! Oops, something went wrong. Maybe try again?`
            }
        })
    })
}
