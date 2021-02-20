const Discord = require('discord.js');

module.exports = {
    name: "strike",
    usage: "{prefix}strike [ @user ]",
    description: "",
    permsneeded: "MANAGE_MESSAGES",
    run: async(bot, message, args) => {
        
        let user = message.mentions.users.first();

        if(!user) {
            return message.channel.send(`${message.author} striked himself.`);
        }

        let strikemessages = [`Strike: ${user}
Reason : Too sexy`, `Strike: ${user}
Reason : Too Funny to be alive`, 
        `Strike: ${user}
Reason : Not sexing me`,`Strike: ${user}
Reason : Being Professional in tickets(illegal)`];
        

        message.channel.send(strikemessages[Math.floor(Math.random() * strikemessages.length)]);

    }
}