var unirest = require("unirest")
const Discord = require("discord.js");
const embed = new Discord.MessageEmbed;

module.exports = async(client, message, suffix, serverDocument) => {
	console.log("Loading module: unirest")
	var unirest = require('unirest');
	if (!suffix) return message.channel.send(":x: Please give me a city to get IP infomation from!")
	unirest.get(`https://ipinfo.io/${encodeURIComponent(suffix)}/json`).headers({'Accept': 'application/json'}).end(res=>{
		console.log(JSON.stringify(res, null, 2))
		if(res.body.error) {
			return message.channel.send("", {embed: {
		      color: 0xFF0000,
		      title: res.body.error.title,
		description: res.body.error.message
	}, disableEveryone:true});
		}
		embed.setTitle('IP Address Information')
		embed.setColor(0x00AE86)
		embed.setDescription('IP address info for ' + res.body.ip)
		embed.setFooter('v2.1', 'https://goo.gl/hkFYh0')
		embed.addField('Hostname:', res.body.hostname)
		embed.addField('City:', res.body.city)
embed.addField('Region:', res.body.region)
embed.addField('Country:', res.body.country)
embed.addField(`Location:`,res.body.loc)
embed.addField(`ISP:`,res.body.org)
embed.addField(`Postal:`,res.body.postal)
		message.channel.send({
			embed,
			disableEveryone: true
		}).catch(e=>{
			message.channel.send(e,{disableEveryone:true})
		})
})
}