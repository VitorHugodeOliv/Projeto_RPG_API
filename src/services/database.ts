import { Sequelize } from 'sequelize-typescript';
import { Armadura } from '../models/Itens/ArmaduraModels';
import { Armas } from '../models/Itens/ArmasModels';
import { Ferramenta } from '../models/Itens/FerramentasModels';
import { EquipamentoAventura } from '../models/Itens/EquipamentoModels';
import { Outros } from '../models/Itens/OutrosModels';

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    host: 'localhost',
    username: 'root',
    password: 'root123',
    database: 'dnd_database',
    models: [
        Armadura,
        Armas,
        Ferramenta,
        EquipamentoAventura,
        Outros
    ],
    logging: false,
});