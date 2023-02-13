const {SlashCommandBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('weather')
    .setDescription('Returns weather')
    .addStringOption((option) =>
      option.setName('city').setDescription('City to get the weather for'),
    ),
  async execute(interaction) {
    const city = interaction.options.getString('city');
    await interaction.reply(city);
  },
};
