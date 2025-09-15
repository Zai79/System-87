import 'dotenv/config';
import { Client, GatewayIntentBits, Collection } from 'discord.js';
import fs from 'fs';

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers]
});

// تحميل الأوامر
client.commands = new Collection();
const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(f => f.endsWith('.js'));
    for (const file of commandFiles) {
        const command = await import(`./commands/${folder}/${file}`);
        client.commands.set(command.data?.name || file.replace('.js',''), command);
    }
}

// تحميل الأحداث
const eventFiles = fs.readdirSync('./events').filter(f => f.endsWith('.js'));
for (const file of eventFiles) {
    const event = await import(`./events/${file}`);
    if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
    else client.on(event.name, (...args) => event.execute(...args, client));
}

client.login(process.env.TOKEN);
