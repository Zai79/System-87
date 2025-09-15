import { scheduleJob } from 'node-schedule';
import config from '../config.json' assert { type: "json" };

export function startPrayers(client) {
    scheduleJob(`*/${config.prayers.interval/60000} * * * *`, async () => {
        try {
            const channel = await client.channels.fetch(config.prayers.channelId);
            if (channel) channel.send("✨ دعاء تلقائي من البوت 🌸");
        } catch (err) {
            console.error("خطأ في إرسال الأدعية:", err);
        }
    });
}
