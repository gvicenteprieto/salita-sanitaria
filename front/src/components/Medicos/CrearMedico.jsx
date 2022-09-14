import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/medicos";

const CrearMedico = () => {
  const [dni, setDNI] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const crearPaciente = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      dni,
      nombre,
      apellido,
      especialidad,
      direccion,
      telefono,
      email,
    });
    navigate("/medicos");
  };

  return (
    <div className="container">
      <h5 className="mt-3"> Crear un nuevo registro de Medico</h5>
      <form onSubmit={crearPaciente}>

      <div className="form-group mb-3">
          <label className="form-label">DNI</label>
          <input
            type="text"
            className="form-control"
            value={dni}
            onChange={(e) => setDNI(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            autoFocus
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Especialidad</label>
          <input
            type="text"
            className="form-control"
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Direccion</label>
          <input
            type="text"
            className="form-control"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="text"
            className="form-control"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Correo</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary m-3">
          Crear
        </button>
      </form>
      <Link to={`/`}>
        <button className="btn btn-success m-3">
          <i className="fas fa-home"></i>
        </button>
      </Link>
    </div>
  );
};

export default CrearMedico;
