const {MessageEmbed} =require("discord.js")
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
module.exports = {
		name: "developer",
		category: "🔰 Info",
	  aliases: ["dev", "oldmodz95", "protondev"],
	  description: "Shows Information about the Developer",
	  useage: "developer",
	  run: async (client, message, args) => {
		try{
			message.channel.send(new MessageEmbed()
			.setColor(ee.color)
			.setFooter(ee.footertext, ee.footericon)
		  .setTimestamp()
		  .setThumbnail("https://imgur.com/PgSJJWn.png")
		  .setTitle("OldModz95#3105 | Dev ProtonDev | Developer C#/NodeJS/PHP/SQL and Other")
		  .setURL("https://protondev.eu")
		  .setDescription(`
		  > [My Service](https://shop.protondev.eu)
		  
		  > [Service Streaming](https://streaming.protondev.eu)

		  > [Server Discord](https://discord.gg/MS6TMgRfqB)

		  > [ProtonDev](https://protondev.eu)
		  `)
		).catch(error => console.log(error));
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
