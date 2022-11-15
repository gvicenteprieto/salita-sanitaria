import usersDB from '../database/usersDB.js';
import  DataType  from 'sequelize';

const UsersModel = usersDB.define('users', {
    name: {type: DataType.STRING},
    user: {type: DataType.STRING},
    rol: {type: DataType.STRING},
    pass: {type: DataType.STRING},
    
});

export default UsersModel;
