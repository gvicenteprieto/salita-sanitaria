import express from "express";
import {
  createTurno,
  getAllTurnos,
  getTurno,
  updateTurno,
  deleteTurno,
} from "../controllers/turnosController.js";

const routeTurnos = express.Router();

routeTurnos.get("/", getAllTurnos);
routeTurnos.get("/:id", getTurno);
routeTurnos.post("/", createTurno);
routeTurnos.put("/:id", updateTurno);
routeTurnos.delete("/:id", deleteTurno);

export default routeTurnos;
