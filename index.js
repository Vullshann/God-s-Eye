const Discord = require("discord.js")
const fs = require("fs");
const bot = new Discord.Client({disableEveryone : true});
const conf = require("./config.json");

bot.on("ready", async () => {

    let statues = [
        `serveur : ${bot.guilds.size}`,
        `channel : ${bot.channels.size}`,
        `version : V.Proto`,
        `membre : ${bot.users.size}`
    ]
    setInterval(() => {
        let status = statues[Math.floor(Math.random() * statues.length)]
        bot.user.setActivity(status, {type: "WATCHING"});
    }, 9000);
    console.log("Bot connected...")
    console.log("___________________")
});

bot.on("message", async message => {
    const P1 = ["bonjour","holla","hey","wesh","koukou","coucou"];
    if(message.author.bot) return;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let Args = messageArray.slice(1)

    if(cmd === P1.some(word => message.content.includes(word))){
        const R1 = ["bonjour","holla","hey","wesh","koukou","coucou"];
        let r1 = R1[Math.floor(Math.random() * R1.length)]
        message.channel.send(r1 + " !")
    }
    
});



bot.login(conf.token);