import { Client } from 'discord.js';
import config from './config';
import Cargos from './commands/Cargos';
import Commands from './commands/Commands';
import Convite from './commands/Convite';
import Vote from './commands/Vote';
import Github from './commands/Github';

const { token, dev_token } = config;

const client = new Client();


client.on('ready', () => {
    console.log(`Logged in ${client.user.username}`);
    client.user.setActivity('Collab Developers', {
        name: 'Collab Developers', 
        type: 'PLAYING',
        url: 'https://discord.gg/CXFpDzqcGt'
    });
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

    // VOTAÇÁO NO CANAL DE SUGESTÕES
    const vote = new Vote();
    vote.exec(message);

    // MOSTRAR O GITHUB DO BOT
    const github = new Github();
    github.exec(message);
});

client.login(token);