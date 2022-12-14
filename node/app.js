import dotenv from "dotenv";
dotenv.config();
import express from "express";
import session from "express-session";
import cors from "cors";
const app = express();

//a index
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import Sockets from "./sockets.js";
const port = process.env.PORT || 8000;
import { connectDB } from "./database/chatDB.js";
connectDB();

const server = http.createServer(app);
const httpServer = server.listen(port);
const io = new WebSocketServer(httpServer);
Sockets(io);
//

import routeMedicos from "./routes/routeMedicos.js";
import routeTurnos from "./routes/routeTurnos.js";
import routeConsultas from "./routes/routeConsultas.js";
import routePacientes from "./routes/routePacientes.js";

import routeCalendar from "./routes/routeCalendar.js";
import router from "./routes/routes.js";

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static("public"));
app.use("/medicos", routeMedicos);
app.use("/turnos", routeTurnos);
app.use("/consultas", routeConsultas);
app.use("/pacientes", routePacientes);

app.use("/calendario", routeCalendar);

app.use("/", router)

// seteo motor de plantilla EJS
app.set("view engine", "ejs");

// variables de session
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.get("/saludo", (req, res) => {
  res.send("hola mundo");
});

app.get("/copy", (req, res) => {
  res.render('copy', {msg:'Pepe, conectando desde node!'});
});



console.log(`Server running on port ${port} at http://localhost:${port}/`);

















//definiendo la conexión de pruebas
/*
try {
  await consultasDB.authenticate();
  console.log('Conexión a la base de datos de prueba consultasDB: exitosa');
} catch (error) {
    console.log('Error al conectar');
}
*/

//MONGODB
//listar todos los pacientes
/*
app.get("/api/pacientes", (req, res) => {
  salita.find({}, (err, pacientes) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(pacientes);
    }
  });
}),
  //listar un paciente por id
  app.get("/api/pacientes/:id", (req, res) => {
    salita.findById(req.params.id, (err, paciente) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(paciente);
      }
    });
  });

//insertar un paciente
app.post("/api/pacientes", (req, res) => {
  const pacienteSalita = req.body;
  let mongodbSalita = [];
  mongodbSalita.push({
    name: pacienteSalita.name,
    lastName: pacienteSalita.lastName,
    address: pacienteSalita.address,
    age: pacienteSalita.age,
    phone: pacienteSalita.phone,
    username: pacienteSalita.username,
    email: pacienteSalita.email,
    password: pacienteSalita.password,
  });
  // salita.insertMany(mongodbSalita, (err, docs) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.send(docs);
  //   }
  // });

  salita.create(mongodbSalita, (err, paciente) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(paciente);
    }
  });
});

//eliminar un paciente
app.delete("/api/pacientes/:id", (req, res) => {
  const id = req.params.id;
  salita.findByIdAndDelete(id, (err, paciente) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(paciente);
    }
  });
});
*/
// server.listen(port, () => {
//   console.log(`Server running on port ${port} at http://localhost:${port}/`);
// });
//console.log(`Server running on port ${port} at http://localhost:${port}/`);
