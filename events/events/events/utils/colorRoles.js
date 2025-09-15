import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import config from '../config.json' assert { type: "json" };

export function createColorButtons() {
    const row = new ActionRowBuilder();
    for (const color of config.colorRoles) {
        row.addComponents(
            new ButtonBuilder()
                .setCustomId(color.roleId)
                .setLabel(color.label)
                .setEmoji(color.emoji)
                .setStyle(ButtonStyle.Secondary)
        );
    }
    return [row];
}
