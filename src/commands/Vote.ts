import type { Message } from 'discord.js';

class Vote {
    public exec(message: Message) {
        if(message.channel.id === "863977071268462624") {
            message.react('✅');
            message.react('❌');
        }
    }
}

export default Vote;