const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./settings.json");
const database = require("./Schemas/Database.js");
const winston = require("winston");

Object.assign(String.prototype, {
	escapeRegex() {
		const matchOperators = /[|\\{}()[\]^$+*?.]/g;
		return this.replace(matchOperators, "\\$&");
	},
});

winston.add(winston.transports.File, {
	filename: "bot-out.log",
});

database.initialize(settings.mongoURL).then(db => {
	winston.info(`Database Loaded!`);
}).catch(err => {
	winston.error(`Failed to launch Database, this is probably your fault you Mongo`, err);
	process.exit(1);
});

client.on("message", async message => {
	let prefix = (await Servers.findOne({ _id: message.guild.id })).Config.command_prefix;
	if (message.author.bot) return null;
	if (!message.content.startsWith(prefix)) return null;
	if (!message.guild) return;
	const cmd = message.content.split(" ")[0].trim().toLowerCase().replace(prefix, "");
	const suffix = message.content.split(" ").splice(1).join(" ")
		.trim();
	let cmdFile;
	try {
		cmdFile = require(`./Commands/${cmd}.js`);
	} catch (err) {
		return winston.error(err);
	}
	if (cmdFile) {
		return cmdFile(client, message, suffix, await Servers.findOne({ _id: message.guild.id }), winston);
	}
});

client.memberSearch = (string, server) => new Promise((resolve, reject) => {
	let foundMember;
	string = string.trim();

	if (string.startsWith("<@!")) {
		foundMember = server.members.get(string.slice(3, -1));
	} else if (string.startsWith("<@")) {
		foundMember = server.members.get(string.slice(2, -1));
	} else if (!isNaN(string) && new RegExp(/^\d+$/).test(string)) {
		foundMember = server.members.get(string);
	} else if (string.startsWith("@")) {
		string = string.slice(1);
	}
	if (string.lastIndexOf("#") === string.length - 5 && !isNaN(string.substring(string.lastIndexOf("#") + 1))) {
		foundMember = server.members.filter(member => member.user.username === string.substring(0, string.lastIndexOf("#") + 1))
			.find(member => member.user.discriminator === string.substring(string.lastIndexOf("#") + 1));
	}
	if (!foundMember) {
		foundMember = server.members.find(member => member.user.username.toLowerCase() === string.toLowerCase());
	}
	if (!foundMember) {
		foundMember = server.members.find(member => member.nickname && member.nickname.toLowerCase() === string.toLowerCase());
	}
	if (foundMember) {
		resolve(foundMember);
	} else {
		reject(new Error(`Couldn't find a member in ${server} using string "${string}"`));
	}
});

client.on("guildMemberAdd", member => {
	const embed = new Discord.MessageEmbed();
	const channel = member.guild.channels.find("name", "mainchat");
	if (!channel) return;
	embed.setTitle(":wave: New member!")
		.setDescription(`Welcome ${member}, Read the rules and have fun!`)
		.setColor("#3dff3d")
		.setFooter(settings.version);
	channel.send({ embed });
});

client.on("guildMemberRemove", member => {
	const embed = new Discord.MessageEmbed();
	const channel = member.guild.channels.find("name", "mainchat");
	if (!channel) return;
	embed.setTitle("User Left!")
		.setDescription(`We hope to see you again ${member} .... :pensive:`)
		.setColor("#ff0000")
		.setFooter(settings.version);
	channel.send({ embed });
});

client.on("guildCreate", guild => {
	require("./Events/guildCreate")(client, winston, guild);
});

client.on("ready", () => {
	winston.info(`Logged in as ${client.user.username}#${client.user.discriminator}`);
	client.user.setStatus("dnd");
});

client.login(settings.token);
