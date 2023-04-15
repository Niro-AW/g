const {
    ApplicationCommandType,
    PermissionFlagsBits
} = require("discord.js");
module.exports = {
    name: "help",
    description: `For more information about the bot`,
    type: ApplicationCommandType.ChatInput,
    options: [],
    userPermissions: [PermissionFlagsBits.SendMessages],
    botPermissions: [PermissionFlagsBits.SendMessages],
    run: async (client, interaction) => {
        return interaction.reply({
            content: `Hi I'm Sunny ai I am programmed to chat with everyone (;, f you want to use me, use a command **/setchannel** for chat with me`
        })
    }
}