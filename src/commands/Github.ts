import { MessageEmbed } from 'discord.js';
import type { Message } from 'discord.js';
import config from "../config";

const { prefix } = config;

class Github {
    public exec(message: Message) {
        if (message.content == prefix + 'github') {
            const embed = new MessageEmbed();
            embed.setTitle('Github');
            embed.setDescription('Github do collab bot: https://github.com/llofyy/collab-bot');
            embed.setColor('#0000FF');
            embed.setThumbnail('https://cdn.discordapp.com/attachments/859924310835855381/859925407424053288/collab_meta_img_1.png');
            message.channel.send(embed);
        }
    } 
}

export default Github;