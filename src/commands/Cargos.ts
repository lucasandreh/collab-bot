import { GuildMemberRoleManager, MessageEmbed } from 'discord.js';
import type { Message } from 'discord.js';
import config from '../config';

const { prefix } = config;

class Cargos {

    public async listarCargos(message: Message) {
        const roles = [];

        message.guild.roles.cache.forEach(role => {
            if(role.permissions.bitfield !== 2146959359 && role.permissions.bitfield !== 8) {
                roles.push(role.name);
            }
        });

        if(message.content === prefix + "cargos") {
            delete roles[0];
    
            const embed = new MessageEmbed();
    
            embed.setTitle('Use o comando !addCargo + nome do cargo que desejar:');
            embed.setColor('#6437C4');
            embed.setThumbnail('https://cdn.discordapp.com/attachments/859924310835855381/859925407424053288/collab_meta_img_1.png');
            embed.setDescription(`**${roles.join(`\n`)}**`);
    
            return await message.channel.send(embed);
        }
    }

    public addCargo(message: Message) {

        if(message.content.startsWith(prefix + 'addCargo')) {
            const roleManager = new GuildMemberRoleManager(message.member);
            const cargos = [];
            roleManager.guild.roles.cache.forEach(role => cargos.push(role));

            const [, needRole] = message.content.split(' ');

            const expecificRole = cargos.find(cargo => cargo.name === needRole);

            if(expecificRole) {
               return roleManager.add(expecificRole.id)
                .then(result => message.reply(`você recebeu o cargo **${expecificRole.name}**`))
                .catch(err => message.reply('esse cargo não está disponível.'));
            }else {
                return message.reply('Esse cargo não existe.');
            }

        }
    }

    public removeCargo(message: Message) {
        if(message.content.startsWith(prefix + 'removeCargo')) {
            const roleManager = new GuildMemberRoleManager(message.member);
            const cargos = [];
            roleManager.guild.roles.cache.forEach(role => cargos.push(role));

            const [, needRole] = message.content.split(' ');

            const expecificRole = cargos.find(cargo => cargo.name === needRole);

            if(expecificRole) {
                return roleManager.remove(expecificRole.id)
                .then(result => message.reply(`você removeu o cargo **${expecificRole.name}**`))
                .catch(err => message.reply('esse cargo não está disponível.'));
    
            }else {
                return message.reply('Esse cargo não existe.');
            }

        }
    }
}

export default Cargos;