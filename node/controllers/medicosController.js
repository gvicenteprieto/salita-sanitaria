import MedicosModel from "../models/MedicosModel.js";

export const getAllMedicos = async (req, res) => {
  try {
    const medicos = await MedicosModel.findAll();
    res.json(medicos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMedico = async (req, res) => {
  try {
    const medico = await MedicosModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(medico);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMedico = async (req, res) => {
  try {
    const medico = await MedicosModel.create({
      dni: req.body.dni,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
      email: req.body.email,
      especialidad: req.body.especialidad,
    });
    res.json({ medico });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateMedico = async (req, res) => {
  try {
    const medico = await MedicosModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Medico actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMedico = async (req, res) => {
  try {
    const medico = await MedicosModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Medico eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
