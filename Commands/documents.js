const config = require("../settings.json");

module.exports = async(client, message, suffix, serverDocument, winston) => {
	if (config.maintainers.includes(message.author.id)) {
		client.guilds.forEach(async g => {
			if (!serverDocument) {
				require("../events/guildCreate")(client, winston, g);
			}
			message.reply(`Done ${message.guild.name}`);
		});
	}
};
