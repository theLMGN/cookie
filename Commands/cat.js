var unirest = require("unirest")
const Discord = require("discord.js");

module.exports = async(client, message, suffix, serverDocument) => {
    unirest.get("http://random.cat/meow").end(res => {
        let image = "http://i.imgur.com/Bai6JTL.jpg";
        if (res.status == 200 && res.body.file) image = res.body.file;
        message.channel.send({
            embed: {
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                description: `Here's your cat picture:`,
                image: {
                    url: image
                },
                footer: {
                    icon_url: image,
                    text: `v2.1`
                }
            },
            disableEveryone: true
        });
    });

}
