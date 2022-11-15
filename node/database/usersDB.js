import {Sequelize} from 'sequelize';

const usersDB = new Sequelize('login_node_jwt', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default usersDB;

/*
//TRABAJANDO CON EL MODULO MYSQL

import pkg from 'mysql';
const {mysql} = pkg;

const conexion = mysql.createConnection(
    {
        host: process.env.DB_HOST, 
        user: process.env.DB_USER, 
        password : process.env.DB_PASS,
        database : process.env.DB_DATABASE,
    }
);

conexion.connect((error) =>{
    if (error) {
        console.log('el error de conexión es: ' + error)
        return
    }
    console.log('conectado a la base de datos de usuarios')
})

export default usersDB;

*/