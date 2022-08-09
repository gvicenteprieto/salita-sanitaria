//importando conexión a la base de datos
import empleadosDB from '../database/empleadosDB.js';
//importando sequelize
import  DataType  from 'sequelize';

//defino el modelo y lo asigno a una variable

const EmpleadosModel = empleadosDB.define('empleados', {
    nombre: {type: DataType.STRING},
    apellido: {type: DataType.STRING},
    nacimiento: {type: DataType.DATE},
    direccion: {type: DataType.STRING},
    telefono: {type: DataType.STRING},
    mail: {type: DataType.STRING},
    cargo: {type: DataType.STRING},
    sector: {type: DataType.STRING},
    art: {type: DataType.STRING},
    enfermedades: {type: DataType.STRING},
    alergias: {type: DataType.STRING},
    consulta: {type: DataType.STRING},
});

export default EmpleadosModel;