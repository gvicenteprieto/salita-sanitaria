import {Sequelize} from 'sequelize';

const medicosDB = new Sequelize('consultorio', 'root','', {
    host: 'localhost',
    dialect: 'mysql',
});

export default medicosDB;
