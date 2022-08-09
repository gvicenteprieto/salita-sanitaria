import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import empleadosDB from './database/empleadosDB.js';
import blogRoutes from './routes/routes.js';
import routerEmpleados from './routes/routeEmpleados.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);
app.use('/empleados', routerEmpleados);

//definiendo la conexión de pruebas
try {
  await db.authenticate();
  console.log('Conexión a la base de datos de prueba db: exitosa');
} catch (error) {
    console.log('Error al conectar');
}

//conexión a base de datos empleadosDB
try {
  await empleadosDB.authenticate();
    console.log('Conexión a la base de datos empleadosDB: exitosa');
} catch (error) {
    console.log('Error en la conexión: ' + error);
}

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.listen(8000, () => {
    console.log('Server running on port 8000 at http://localhost:8000/');
});