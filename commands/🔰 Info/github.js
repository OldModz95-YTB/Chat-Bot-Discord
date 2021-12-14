const {MessageEmbed} = require("discord.js")
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
module.exports = {
		name: "github",
		category: "🔰 Info",
		aliases: ["git", "source"],
		cooldown: 2,
		usage: "github",
		description: "Shows you the Github and Source Code Information about this Bot",
	  run: async (client, message, args, user, text, prefix) => {
		try{
        message.channel.send(new MessageEmbed()
        .setTitle(`This Bot is made by \`OldModz95#3105\` and **this** is the Source Code link to this Bot`)
        .setURL("https://github.com/OldModz95-YTB/Chat-Bot-Discord/")
        .addField("Discord.js: ", "[\`v12.5.1\`](https://discord.js.org)", true)
        .addField("Node.js: ", "[\`v16.6.1\`](https://nodejs.org/en/)", true)
        .setColor(ee.color)
		.setFooter(ee.footertext, ee.footericon)
			);
		} catch (e) {
				console.log(String(e.stack).bgRed)
				return message.channel.send(new MessageEmbed()
						.setColor(ee.wrongcolor)
						.setFooter(ee.footertext, ee.footericon)
						.setTitle(`❌ ERROR | An error occurred`)
						.setDescription(`\`\`\`${e.stack}\`\`\``)
				);
		}
	}
}