import type { Message } from "discord.js";
import config from "../config";

const { prefix } = config;

class Commands {
    public listarComandos(message: Message) {
        if(message.content === prefix + 'comandos') {
            message.channel.send(`**!cargos:** Lista todos os cargos que você pode receber no servidor.\n**!addCargo nomedocargo:** Usado para adicionar o cargo que você escolher da lista.\n**!removeCargo nomedocargo:** Usado para remover um cargo que você tenha.\n**!convite:** Usado para mostrar o link de convite para convidar novos membros.`);
        }
    }
}

export default Commands;