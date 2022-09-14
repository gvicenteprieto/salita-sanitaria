import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/medicos";

const EditarMedico = () => {
  const { id } = useParams();
  const [dni, setDNI] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  //procedimiento actualizar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${URI}/${id}`, {
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

  useEffect(() => {
    getMedicobyId();
  }, []);

  const getMedicobyId = async () => {
    try {
      const response = await axios.get(`${URI}/${id}`);
      setDNI(response.data.dni);
      setNombre(response.data.nombre);
      setApellido(response.data.apellido);
      setEspecialidad(response.data.especialidad);
      setDireccion(response.data.direccion);
      setTelefono(response.data.telefono);
      setEmail(response.data.email);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h5> Editar datos de Médico</h5>

          <form onSubmit={update}>

            <div className="form-group mb-3">
              <label className="form-label">DNI</label>
              <input type="text" className="form-control" value={dni} />
            </div>

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
              <label className="form-label">Especialidad</label>
              <input
                type="text"
                className="form-control"
                value={especialidad}
                onChange={(e) => setEspecialidad(e.target.value)}
                autoFocus
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Dirección</label>
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
              Editar
            </button>
          </form>

          <Link to={`/medicos`}>
            <button className="btn btn-success m-3">
              {/* <i class="fa-solid fa-inbox"></i> */}
              Médicos
            </button>
          </Link>

          <Link to={`/`}>
            <button className="btn btn-success m-3">
              <i className="fas fa-home"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default EditarMedico;
