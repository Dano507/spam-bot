const env = require("./env.json")
const { Client, Intents } = require("discord.js")

const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ]
})


// App start
client.once("ready", () => {
  console.log("Bot is up and running")
})

client.on("messageCreate", (m) => {
  
})

client.login(env.appId)
