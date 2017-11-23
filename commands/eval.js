const settings = require("../settings.json");
const Discord = require("discord.js");

module.exports = async(client, message, suffix) => {
	if (settings.maintainers.includes(message.author.id)) {
		if (suffix) {
			suffix = suffix.join(" ");
			try {
				if (suffix.startsWith("```js") && suffix.endsWith("```")) suffix = suffix.substring(5, suffix.length - 3);
				const asyncify = code => `(async () => {\nreturn ${code.trim()}\n})()`;
				let result = await eval(asyncify(suffix));
				if (typeof result !== "string") result = require("util").inspect(result, false, 1);
				let array = [
					client.token.escapeRegex(),
					settings.token.escapeRegex(),
				];
				let regex = new RegExp(array.join("|"), "g");
				result = result.replace(regex, "Sam disapproves.");
				message.channel.send({
					embed: {
						color: 0x00FF00,
						description: `\`\`\`js\n${result}\`\`\``,
					},
				});
			} catch (err) {
				message.channel.send({
					embed: {
						color: 0xFF0000,
						description: `\`\`\`js\n${err.stack}\`\`\``,
					},
				});
			}
		}
	} else {
		message.channel.send({
			embed: {
				color: 0xff0000,
				title: `:no_entry: No Permissions`,
				description: `:raised_hand: Maintainers only. (AKA Sam and Dan)`,
				footer: {
					text: "v2.6.5 | Cookie, By Sam.#8235 | https://discord.gg/7vbPubA",
				},
			},
		});
	}
};
