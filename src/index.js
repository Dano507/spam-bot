const env = require("./env.json")
const { Client, Intents } = require("discord.js")
const fs = require("fs")

const moduleFolder = "modules"

const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ]
})


// App start
client.once("ready", () => {
  // Start modules
  modules = fs.readdirSync(`${__dirname}/${moduleFolder}`)
  for (let i in modules) {
    require(`./${moduleFolder}/${modules[i]}`)({
      prefix: env.prefix,
      client: client,
    })
  }
  console.log(modules)

  // Indicate bot ready
  console.log("Bot is up and running")
})

client.login(env.appId)
