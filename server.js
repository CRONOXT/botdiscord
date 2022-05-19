const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("ping")) {
     message.channel.send("pong!");
   }
 
 });
 
 client.login("OTc2NjA3NDM4MTM4NjM4Mzc2.G6RNe2.MdKuQxdAIYeXnpy9BMQEVAdCdEpmGlSB91DCR0");