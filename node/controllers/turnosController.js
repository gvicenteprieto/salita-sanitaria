import TurnosModel from "../models/TurnosModel.js";
//import moment from "moment";

export const getAllTurnos = async (req, res) => {
  try {
    const turnos = await TurnosModel.findAll();
    // const turnos = await TurnosModel.findAll({
    //   fecha: { $gte: moment(req.query.fecha).toDate() },
    //   hora: { $lte: moment(req.query.hora).toDate() },
    // });
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTurno = async (req, res) => {
  try {
    const turno = await TurnosModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(turno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTurno = async (req, res) => {
  try {
    const turno = await TurnosModel.create({
      dni: req.body.dni,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      fecha: req.body.fecha,
      //hora: req.body.hora,
    });
    res.json({ turno });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateTurno = async (req, res) => {
  try {
    const turno = await TurnosModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Turno actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTurno = async (req, res) => {
  try {
    const turno = await TurnosModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Turno eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
