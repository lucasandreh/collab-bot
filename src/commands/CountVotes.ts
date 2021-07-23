import {Client, MessageReaction, PartialUser, User } from 'discord.js';
import config from '../config';

const { votesLimit } = config;

class CountVotes {
    public async exec(reaction: MessageReaction, user: User | PartialUser) {
            if(reaction.partial) {
                try {
                    await reaction.fetch()
                }catch(err) {
                    console.log(err)
                }
            }

            if(reaction.message.channel.id === "863977071268462624"){
                if(reaction.emoji.name === "❌" && reaction.count === votesLimit) {
                    reaction.message.delete();
                    return reaction.message.channel.send(`----------------------------
Sugestão: **${reaction.message.content}**
Autor: **${reaction.message.author.username}**
Status: ${reaction.emoji.name}`);
                }else if(reaction.emoji.name === "✅" && reaction.count === votesLimit){
                    reaction.message.delete();
                    return reaction.message.channel.send(`----------------------------
Sugestão: **${reaction.message.content}**
Autor: **${reaction.message.author.username}**
Status: ${reaction.emoji.name}`);
                }
            }

        }

}

export default CountVotes;