const Discord = require("discord.js");

module.exports = (bot) => {
    
    bot.on("message", async message => {
        if (!message.member) return;
        if(message.content === "monke") {
            return message.channel.send("monke good shep sed");
        
        }
    });

}