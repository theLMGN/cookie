var unirest = require("unirest")
const settings = require("../settings.json");
const Discord = require("discord.js");
const winston = require("winston");

module.exports = async(client, message, suffix, serverDocument) => {
    if (settings.maintainers.includes(message.author.id)) {
        let server;
        if(suffix) {
          server = client.guilds.find("name", suffix)
          if(!server) {
            server = client.guilds.get(suffix)
              if(server) {
                winston.info(`Leaving server ${server.name}...`)
                server.leave().then(g => {
                  message.channel.send(`Left the server **${g.name}**`)
                }).catch(err => {
                  winston.error(`Failed to leave server ${server.name}`, {serverid: server.id}, err)
                  message.channel.send({
                    embed: {
                      author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                      },
                      title: `I couldn't leave the server.`
                    }
                  })
                })
              } else {
                message.channel.send(`I couldn't find that server.`)
              }
          }
        } else {
          message.channel.send(`Should I leave this server?`)
        }
    }
}
