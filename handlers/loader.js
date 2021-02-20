const express = require("express")
const app = express()

app.get("/", (req, res) => {
})

app.listen(3000, () =>  {
console.log("Project is ready!")
})

const Discord = require("discord.js");
const config = require("../configuration/conf.json");

module.exports = (bot) => {
    
    bot.on("message", async message => {
        const prefix = config.bot.prefix;
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return;
        if (!message.member) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        if (cmd.length === 0) return;
        let command = bot.commands.get(cmd);
        if (!command) command = bot.commands.get(bot.aliases.get(cmd));
        if (command) {
            if(command.permsneeded != "none" && !message.member.hasPermission(`${command.permsneeded}`)) {
                message.delete();
                return message.channel.send("You don't have permission to use this command!").then(msg => msg.delete(5000));
            }
            command.run(bot, message, args);
        } 
    });

     bot.on("ready", () => {
    console.log("lardon is Online.");
    bot.user.setActivity("Striking Staff for fun", { type: "PLAYING", status: "idle" })
  })
}