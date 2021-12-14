const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "stats",
    category: "🔰 Info",
    aliases: [""],
    cooldown: 10,
    usage: "stats",
    description: "Shows Bot Stats",
    run: async (client, message, args, user, text, prefix) => {
    try{
      let channelsize = 0;
      for(const gid of client.guilds.cache.map(g => g.id))
        channelsize += client.chatbot.get(gid, "channels").length;
      let global = client.stats.get("global");
      let guild = client.stats.get(message.guild.id);
      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setFooter(ee.footertext, ee.footericon)
        .addField("⚙️ GLOBAL Commands used:", `>>> \`${global.commands} Commands\` used\nin **all** Servers`,true)
        .addField("💬 GLOBAL Chat messages:", `>>> \`${global.messages} Messages\` sent in\n**all** Servers`,true)
        .addField("📰 GLOBAL Setups created:", `>>> \`${channelsize} Setups\` created in\n**all** Servers`,true)
        .addField("\u200b", "\u200b")
        .addField("⚙️ SERVER Commands used:", `>>> \`${guild.commands} Commands\` used in\n**this** Server`,true)
        .addField("💬 SERVER Chat messages:", `>>> \`${guild.messages} Messages\` sent in\n**this** Server`,true)
        .addField("📰 SERVER Setups created:", `>>> \`${client.chatbot.get(message.guild.id, "channels").length} Setups\` created in\n**this** Servers`,true)
        .setTitle(`💿 The Stats of ${client.user.username}`)
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
