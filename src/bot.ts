import { Client } from 'discord.js';
import config from './config';
import Cargos from './commands/cargos';

const { token } = config;

const client = new Client();


client.on('ready', () => {
    console.log(`Logged in ${client.user.username}`);
});

client.on('message', message => {
    

    // COMANDOS REFERENTES AOS CARGOS DO SERVIDOR
    const cargos = new Cargos();

    cargos.listarCargos(message);
    cargos.addCargo(message);
    cargos.removeCargo(message);
});



client.login(token);