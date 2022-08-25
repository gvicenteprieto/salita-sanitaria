import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import sockets from "./sockets.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8000;

import { connectDB } from "./database/chatDB.js";
connectDB();
const server = http.createServer(app);
const httpServer = server.listen(port);
const io = new WebSocketServer(server);
sockets(io);

// import http from "http";
// const server = http.createServer(app)

//import db from './database/db.js';
/*
import empleadosDB from "./database/empleadosDB.js";
*/
//import blogRoutes from "./routes/routes.js";
import routePacientes from "./routes/routePacientes.js";
import routeCalendar from "./routes/routeCalendar.js";
import { Socket } from "socket.io";

//import routeUser from "./src/routes/routeUser.js";

// import mongoose from "mongoose";
// import salita from "./models/salita.js";
// const mongoURL = process.env.MONGO_URI;
// mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
//app.use("/blogs", blogRoutes);
app.use("/pacientes", routePacientes);
app.use("/calendario", routeCalendar);
//app.use("/users", routeUser);

//definiendo la conexión de pruebas
// try {
//   await db.authenticate();
//   console.log('Conexión a la base de datos de prueba db: exitosa');
// } catch (error) {
//     console.log('Error al conectar');
// }

/*
//conexión a base de datos empleadosDB
try {
  await empleadosDB.authenticate();
  console.log("Conexión a la base de datos empleadosDB: exitosa");
} catch (error) {
  console.log("Error en la conexión: " + error);
}
*/

//static files
//app.use(express.static("public"))

app.get("/", (req, res) => {
  res.send("hola mundo");
  //res.sendFile(`${__dirname}/cliente/index.html`)
});

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
console.log(`Server running on port ${port} at http://localhost:${port}/`);
