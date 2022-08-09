import express from "express";
import {
  getAllEmpleados,
  getEmpleado,
    createEmpleado, 
    updateEmpleado,
    deleteEmpleado,
} from "../controllers/empleadosController.js";
const routerEmpleados = express.Router();

routerEmpleados.get("/", getAllEmpleados);
routerEmpleados.get("/:id", getEmpleado);
routerEmpleados.post("/", createEmpleado);
routerEmpleados.put("/:id", updateEmpleado);
routerEmpleados.delete("/:id", deleteEmpleado);

export default routerEmpleados;
