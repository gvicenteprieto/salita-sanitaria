import pacientesDB from '../database/pacientesDB.js';
import  DataType  from 'sequelize';

//const PacientesModel = pacientesDB.define('pacientes', {
const PacientesModel = pacientesDB.define('paciente', {
    nombre: {type: DataType.STRING},
    apellido: {type: DataType.STRING},
    dni: {type: DataType.STRING},
    // nacimiento: {type: DataType.DATE},
    // direccion: {type: DataType.STRING},
    // telefono: {type: DataType.STRING},
    // mail: {type: DataType.STRING},
    // cargo: {type: DataType.STRING},
    // barrio: {type: DataType.STRING},
    // art: {type: DataType.STRING},
    // enfermedades: {type: DataType.STRING},
    // alergias: {type: DataType.STRING},
    // consulta: {type: DataType.STRING},
});

export default PacientesModel;