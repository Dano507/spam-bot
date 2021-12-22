state = {
  spamming: false,
  channel: "",
}

main = (vars) => {
  vars.client.on("messageCreate", (m) => {
    if (m.content.toLowerCase().startsWith(`${vars.prefix}spam on`)) {
      state.spamming = true
      state.channel = m.channel.id

      console.log("Spammming")
      m.channel.send("Spamming")
    }
    if (m.content.toLowerCase().startsWith(`${vars.prefix}spam off`)) {
      state.spamming = false
      console.log("Stopped")
      m.channel.send("Stopped")
    }

    // Spam if true
    if (state.spamming && m.content !== "") {
      vars.client.channels.cache.get(state.channel).send("spam")
      console.log("spam")
    }
  })
}

module.exports = main
