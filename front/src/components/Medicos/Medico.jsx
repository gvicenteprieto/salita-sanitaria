import axios from "axios";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/medicos";

const Medico = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get(`${URI}/${id}`).then((response) => {
      setNombre(response.data.nombre);
      setApellido(response.data.apellido);
      setEspecialidad(response.data.especialidad);
      setDireccion(response.data.direccion);
      setTelefono(response.data.telefono);
      setEmail(response.data.email);
    });
  }, [id]);

  return (
    <div style={{ marginTop: 20, padding: 20 }}>
      <div className="h5">Ficha Profesional</div>

      <div className="table-responsive">
        <div className="col-md-12" style={{ padding: 5 }}>
          <div className="col m-3">
            <div className="card">
              <div className="card-body bg-light">
                <h5 className="card-title">
                  {nombre.toUpperCase()} {apellido.toUpperCase()}{" "}
                </h5>
                <h4 className="card-title text-success">
                  {" "}
                  {especialidad.toUpperCase()}
                </h4>
                <div>
                <h6 className="card-text">Dirección: {direccion}</h6>
                  <h6 className="card-text">Teléfono: {telefono}</h6>
                  <h6 className="card-text">Email: {email}</h6>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col m-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Apellido</h5>
                <h6 className="card-text">Especialidad</h6>
                <p className="card-text">Teléfono</p>
                <p className="card-text">Email</p>
              </div>
            </div>
          </div>

          <div className="col m-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Apellido</h5>
                <h6 className="card-text">Especialidad</h6>
                <p className="card-text">Teléfono</p>
                <p className="card-text">Email</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Box>
        <Link to={`/editar-medico/${id}`}>
          <button className="btn btn-info mt-3">
            <i className="fas fa-edit"></i>
          </button>
        </Link>
      </Box>
      <hr />
      <Link to={`/`}>
        <button className="btn btn-success m-3">
          <i className="fas fa-home"></i>
        </button>
      </Link>
    </div>
  );
};

export default Medico;
