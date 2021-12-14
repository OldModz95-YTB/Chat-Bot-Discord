const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "djmode",
    category: "🔰 Info",
    aliases: ["djonlymode"],
    cooldown: 5,
    usage: "djmode",
    description: "Shows if there is a DJ-Only Mode / not and all Dj Settings..",
    run: async (client, message, args, user, text, prefix) => {
    try{
      //create the string of all djs and if he is a dj then set it to true
      

      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setTitle("💢 Dj Mode")
        .setDescription("Commands Desabled !")
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

