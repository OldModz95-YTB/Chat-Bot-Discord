//here the event starts
const config = require("../../botconfig/config.json")
module.exports = client => {
  try{
    const stringlength = 69;
    console.log("\n")
    console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + `Discord Bot is online!`.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length-`Discord Bot is online!`.length)+ "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + ` /--/ ${client.user.tag} /--/ `.bold.brightGreen+ " ".repeat(-1+stringlength-` ┃ `.length-` /--/ ${client.user.tag} /--/ `.length)+ "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.brightGreen)
    console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
  }catch{ /* */ }
  let satutsswitch = false;
  try{
    client.user.setActivity(`,help | ${client.guilds.cache.size} Guilds`, { type: "WATCHING" });
  }catch (e) {
      console.log(String(e.stack).red);
  }
  //Change status each 10 minutes
  setInterval(()=>{
    try{
      if(satutsswitch){
        satutsswitch = !satutsswitch;
        let channelsize = 0;
        for(const gid of client.guilds.cache.map(g => g.id))
          channelsize += client.chatbot.get(gid, "channels").length;
        client.user.setActivity(`,help | ${channelsize} Channels | shop.protondev.eu`, { type: "WATCHING" });
      }
      else{
        satutsswitch = !satutsswitch;
        client.user.setActivity(`,help | ${client.guilds.cache.size} Guilds`, { type: "WATCHING" });
      }
    }catch (e) {
        console.log(String(e.stack).red);
    }
  }, 12*1000)
}
