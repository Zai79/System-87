import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('sendmessage')
    .setDescription('إرسال رسالة باسم البوت')
    .addChannelOption(opt => opt.setName('channel').setDescription('الروم').setRequired(true))
    .addStringOption(opt => opt.setName('text').setDescription('النص').setRequired(true))
    .addBooleanOption(opt => opt.setName('embed').setDescription('هل تريد Embed'));

export async function execute(interaction) {
    const channel = interaction.options.getChannel('channel');
    const text = interaction.options.getString('text');
    const embed = interaction.options.getBoolean('embed');

    if(embed){
        await channel.send({embeds:[{description:text,color:0xff00ff}]});
    } else {
        await channel.send(text);
    }

    await interaction.reply({content:'تم إرسال الرسالة ✅', ephemeral:true});
}
