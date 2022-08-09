import EmpleadosModel from "../models/EmpleadosModel.js";

//métodos para CRUD

export const getAllEmpleados = async (req, res) => {
    try {
        const empleados = await EmpleadosModel.findAll();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getEmpleado = async (req, res) => {
    try {
        const empleado = await EmpleadosModel.findByPk(req.params.id);
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const createEmpleado = async (req, res) => {
    try {
        const empleado = await EmpleadosModel.create(req.body);
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export const updateEmpleado = async (req, res) => {
    try {
        const empleado = await EmpleadosModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({empleado});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteEmpleado = async (req, res) => {
    try {
        const empleado = await EmpleadosModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({empleado});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

