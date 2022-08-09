import {Sequelize} from 'sequelize';

const empleadosDB = new Sequelize('consultorio', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default empleadosDB;
