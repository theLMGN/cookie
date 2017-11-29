var unirest = require("unirest");
const Discord = require("discord.js");
const winston = require("winston");
const parse = require("parse-duration");
const moment = require("moment");
const embed = new Discord.MessageEmbed;

module.exports = async(client, message, suffix, serverDocument) => {
    if (suffix) {
        let text = suffix.split("|")
        if (text.length > 1) {
            let question = text[0];
            let expiresAt = text[1]
            const time = parse(expiresAt)
            message.channel.send({
                embed: {
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    title: `Poll created by ${message.author.username}`,
                    description: `\`\`\`${question}\`\`\``,
                    footer: {
                        icon_url: message.guild.iconURL,
                        text: `This poll expires ${moment.duration(time).humanize(true)}`
                    }
                }
            }).then(m => {
                m.react(`👍`).then(() => {
                    m.react("👎").then(() => {
                        client.setTimeout(() => {
                            m.channel.fetchMessage(m.id).then(message => {
                                if (message.reactions.has("%F0%9F%91%8D") && message.reactions.has("%F0%9F%91%8E")) {
                                    let upvotes = message.reactions.get("%F0%9F%91%8D")
                                    let downvotes = message.reactions.get("%F0%9F%91%8E")
                                    message.channel.send({
                                        embed: {
                                            author: {
                                                name: client.user.username,
                                                icon_url: client.user.avatarURL
                                            },
                                            color: client.roleColor(message.channel),
                                            title: `Poll Results:`,
                                            description: `${upvotes.count - 1} user${upvotes.count - 1 === 1 ? "" : "s"} upvoted. \n${downvotes.count - 1} user${downvotes.count - 1 === 1 ? "" : "s"} downvoted.\n**${upvotes.count - 1 > downvotes.count - 1 ? "Thumbs up" : "Thumbs down"} wins!**`,
                                            footer: {
                                                text: `Poll created by ${message.author.tag}`,
                                                icon_url: message.author.avatarURL
                                            }
                                        }
                                    }).catch(winston.error)
                                }
                            }).catch(winston.error)
                        }, time)
                    }).catch(winston.error)
                }).catch(winston.error)
            }).catch(winston.error)

}
    }
}