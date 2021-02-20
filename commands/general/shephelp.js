const Discord = require('discord.js');


module.exports = {
    name: "help",
    usage: "{prefix}help",
    description: "Help command for Monke",
    permsneeded: "SEND_MESSAGES",
    run: async(bot, message, args) => {

   const embed = new Discord.RichEmbed()
   .setTitle('The Lardon Bot')
   .setDescription('Coming Soon.')
   .setColor('RANDOM')
   .setFooter('Prefix is l!')
   message.channel.send(embed);
   
    }
}  