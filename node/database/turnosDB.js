import {Sequelize} from 'sequelize';

const turnosDB = new Sequelize('consultorio', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default turnosDB;
