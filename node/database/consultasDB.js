// import {Sequelize} from 'sequelize';

// const consultasDB = new Sequelize('consultas', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
// });

// export default consultasDB;




import {Sequelize} from 'sequelize';

const consultasDB = new Sequelize('consultorio', 'root','', {
    host: 'localhost',
    dialect: 'mysql',
});

export default consultasDB;
