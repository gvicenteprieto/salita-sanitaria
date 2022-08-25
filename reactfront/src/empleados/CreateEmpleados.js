import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/empleados";

const CreateEmpleados = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  //     const [dni, setDni] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  //const [fecha_contratacion, setFecha_contratacion] = useState("");
  const [sector, setSector] = useState("");
  const [cargo, setCargo] = useState("");
  const [art, setArt] = useState("");
  const [enfermedades, setEnfermedades] = useState("");
  const [alergias, setAlergias] = useState("");
  const [consulta, setConsulta] = useState("");

  const navigate = useNavigate();

  const crear = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre,
      apellido,
      direccion,
      telefono,
      mail,
      nacimiento,
      sector, 
      cargo,
      art,
      enfermedades,
      alergias,
      consulta,
    });
    navigate("/");
  };

  return (
    <div className="container">
      <h4> Crear un nuevo registro</h4>
      <form onSubmit={crear}>
        <div className="form-group mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
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
          <label className="form-label">Direccion</label>
          <input
            type="text"
            className="form-control"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Telefono</label>
          <input
            type={telefono}
            className="form-control"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Correo</label>
          <input
            type={mail}
            className="form-control"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Fecha de nacimiento</label>
          <input
            type={nacimiento}
            className="form-control"
            value={nacimiento}
            onChange={(e) => setNacimiento(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Sector</label>
          <input
            type={sector}
            className="form-control"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          />
        </div>


        <div className="form-group mb-3">
          <label className="form-label">Cargo</label>
          <input
            type={cargo}
            className="form-control"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">ART</label>
          <input
            type={art}
            className="form-control"
            value={art}
            onChange={(e) => setArt(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Enfermedades</label>
          <input
            type={enfermedades}
            className="form-control"
            value={enfermedades}
            onChange={(e) => setEnfermedades(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Alergias</label>
          <input
            type={alergias}
            className="form-control"
            value={alergias}
            onChange={(e) => setAlergias(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Consulta</label>
          <input
            type={consulta}
            className="form-control"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
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

export default CreateEmpleados;
