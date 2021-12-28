const { Client } = require("discord.js")

Client
module.exports = {
    name: "ready" ,
    once: true,
    /**
     * @param {Client} client 
     */
    execute(client) {
        console.log("The client is now ready!")
        client.user.setActivity("MUSIC!", {type: "WATCHING"})
    }
}