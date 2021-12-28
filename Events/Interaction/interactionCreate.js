const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        if(interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            if(!command) return interaction.reply({embed: [
                new MessageEmbed()
                .setColor("DARK_PURPLE")
                .setDescription("❌ An Error occured while running this command.")
            ]}) && client.commands.delete(interaction.commandName);

            command.execute(interaction, client)
        }
    }
}
