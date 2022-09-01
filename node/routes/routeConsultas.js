import express from "express";
import {
  createConsulta,
  getAllConsultas,
  getConsulta,
  updateConsulta,
  deleteConsulta,
} from "../controllers/consultasController.js";

const routeConsultas = express.Router();

routeConsultas.get("/", getAllConsultas);
routeConsultas.get("/:id", getConsulta);
routeConsultas.post("/", createConsulta);
routeConsultas.put("/:id", updateConsulta);
routeConsultas.delete("/:id", deleteConsulta);

export default routeConsultas;
