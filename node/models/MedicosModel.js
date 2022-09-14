import medicosDB from '../database/medicosDB.js';
import  DataType  from 'sequelize';

const MedicosModel = medicosDB.define('medicos', {
    dni: {type: DataType.STRING},
    nombre: {type: DataType.STRING},
    apellido: {type: DataType.STRING},
    direccion: {type: DataType.STRING},
    telefono: {type: DataType.STRING},
    email: {type: DataType.STRING},
    especialidad: {type: DataType.STRING},
});

export default MedicosModel;