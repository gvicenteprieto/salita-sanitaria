import express from "express";
import {
  createMedico,
  getAllMedicos,
  getMedico,
  updateMedico,
  deleteMedico,
} from "../controllers/medicosController.js";

const routeMedicos = express.Router();

routeMedicos.get("/", getAllMedicos);
routeMedicos.get("/:id", getMedico);
routeMedicos.post("/", createMedico);
routeMedicos.put("/:id", updateMedico);
routeMedicos.delete("/:id", deleteMedico);

export default routeMedicos;
