import { Client } from 'discord.js';
import config from './config';
import Cargos from './commands/Cargos';
import Commands from './commands/Commands';
import Convite from './commands/Convite';

const { token, dev_token } = config;

const client = new Client();


client.on('ready', () => {
    console.log(`Logged in ${client.user.username}`);
});

client.on('message', message => {
    
    // LISTA OS COMANDOS DISPONÍVEIS NO SERVIDOR.
    const comandos = new Commands();
    comandos.listarComandos(message);

    // COMANDOS REFERENTES AOS CARGOS DO SERVIDOR
    const cargos = new Cargos();
    cargos.listarCargos(message);
    cargos.addCargo(message);
    cargos.removeCargo(message);

    // GERAR CÓDIGO DE CONVITE
    const convite = new Convite();
    convite.create(message, client);
});



client.login(token);