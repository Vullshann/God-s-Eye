const Discord = require("discord.js")
const fs = require("fs");
const bot = new Discord.Client({disableEveryone : true});
const conf = require("./config.json");

bot.on("ready", async () => {

    let statues = [
        `serveur : ${bot.guilds.size}`,
        `channel : ${bot.channels.size}`,
        `version : V1.0`,
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
    
})



bot.login(conf.token)