const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone : true});
const conf = require("./config.json")





bot.log(conf.token)