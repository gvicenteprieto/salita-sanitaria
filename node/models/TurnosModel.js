import turnosDB from '../database/turnosDB.js';
import  DataType  from 'sequelize';

const TurnosModel = turnosDB.define('turnos', {
    dni: {type: DataType.STRING},
    nombre: {type: DataType.STRING},
    apellido: {type: DataType.STRING},
    fecha: {type: DataType.DATE},
    //hora: {type: DataType.DATE},
});

export default TurnosModel;