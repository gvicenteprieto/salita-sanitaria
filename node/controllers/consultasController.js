import ConsultasModel from "../models/ConsultasModel.js";

export const getAllConsultas = async (req, res) => {
  try {
    const consultas = await ConsultasModel.findAll();
    res.json(consultas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getConsulta = async (req, res) => {
  try {
    const consulta = await ConsultasModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(consulta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createConsulta = async (req, res) => {
  try {
    const consulta = await ConsultasModel.create({
      dni: req.body.dni,
      title: req.body.title,
      content: req.body.content,
    });
    res.json({ consulta });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateConsulta = async (req, res) => {
  try {
    const consulta = await ConsultasModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "consulta actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteConsulta = async (req, res) => {
  try {
    const consulta = await ConsultasModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "consulta eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
