import consultasDB from '../database/consultasDB.js';
import  DataType  from 'sequelize';

const ConsultasModel = consultasDB.define('consultas', {
    dni: {type: DataType.STRING},
    title: {type: DataType.STRING},
    content: {type: DataType.STRING},
});

export default ConsultasModel;