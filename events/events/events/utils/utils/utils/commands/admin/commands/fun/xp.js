import { getXP } from '../../utils/xpSystem.js';

export const data = {
    name: 'xp',
    description: 'عرض مستوى العضو'
};

export async function execute(message) {
    const xp = getXP(message.author.id);
    message.reply(`مستواك الحالي: ${xp} XP`);
}
