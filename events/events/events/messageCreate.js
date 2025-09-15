export const name = 'messageCreate';
export const once = false;
export async function execute(message, client) {
    if (message.author.bot) return;
    if (!message.content.startsWith('!')) return;

    const args = message.content.slice(1).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);
    if (command) {
        try {
            await command.execute(message, client, args);
        } catch (err) {
            console.error(err);
            message.reply('حدث خطأ أثناء تنفيذ الأمر!');
        }
    }
}
