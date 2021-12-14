const Discord = require("discord.js")
const {MessageEmbed} =require("discord.js")
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
module.exports = {
		name: "sponsor",
		category: "🔰 Info",
	  aliases: [""],
	  description: "Shows the sponsor of this BoT",
	  useage: "sponsor",
	  run: async (client, message, args) => {
		try{
		  message.channel.send(new MessageEmbed()
				.setColor(ee.color)
			 	.setTimestamp()
			  .setFooter("Proposed By ProtonDev | Dev By OldModz95", "https://imgur.com/PgSJJWn.png")
			  .setImage("https://imgur.com/PgSJJWn.png")
			  .setTitle("ProtonDev | Service")
			  .setURL("https://shop.protondev.eu")
			  .setDescription(`
				> [Contact Here](https://discord.gg/MS6TMgRfqB)`)
			).catch(e => console.log(String(e.stack).yellow));
	  	message.channel.send(new Discord.MessageEmbed()
		    .setColor(ee.color)
		    .setTitle("Auth.gg | Service License")
		    .setURL("https://auth.gg")
		    .setDescription(`
		    **Identity made simple for developers**

			> Whether you’re a developer looking to innovate or a security professional looking to mitigate, we make identity work for everyone.
			> Protect your software from malicious users.

			
			> **>>** **SERVER SIDED**
			
			> Every element is checked by several private security methods on our servers using industry's standard cryptographic techniques.


			> **>>** **INTEGRATED DASHBOARD**

			> Easy to use and intuitive dashboard that allows you to monitor your users, licenses, and activity that takes place in your software.


			> **>>** **99.9% UPTIME**

			> Our servers have advanced mitigation and resources that gives us almost no down time and ensure the best performance.


			> **>>** **Built for your workflow**

			> Our authentication is a fully multilingual system that allows you to license your software in nearly any coding language within minutes with our pre-made examples and documentation!

			> We also have a fully trained team ready to assist you in case you have special requirements or just need help implementing our service.


			> **>>** **Add multiple team members**

			> Our system allows you to add other developers, resellers, administrators, and moderators to help manage your software and split the payload!

		    [**Discord Server:**](https://discord.gg/YXpjC6TPxq)
		    [**Website:**](https://auth.gg)
		    [**__Github__**](https://github.com/Auth-gg-Community)
		    `)
		    .setImage("https://cdn.auth.gg/signature.gif")
		    .setFooter("Auth.gg & PorotnDev")
			).catch(e => console.log(String(e.stack).yellow));
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
