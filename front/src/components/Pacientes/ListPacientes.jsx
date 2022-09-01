import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const URI = "http://localhost:8000/pacientes";

const ListarPacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [dni, setDNI] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getAllPacientes();
  }, []);

  //procedimiento para mostrar todos los pacientes
  const getAllPacientes = async () => {
    const response = await axios.get(URI);
    setPacientes(response.data);
  };

  const search = (e) => {
    e.preventDefault();
    const busqueda = e.target.value;
    const resultado = pacientes.filter((paciente) => {
      return paciente.apellido.toLowerCase().includes(busqueda.toLowerCase());
    });
    if (busqueda === "" || resultado === "" || resultado.length === 0) {
      setPacientes(pacientes);
    } else {
      setPacientes(resultado);
    }
  };

  /*
  const searchDNI = (e) => {
    e.preventDefault();
    const busqueda = e.target.value;
    const resultado = dni.filter((paciente) => {
      return paciente.dni.includes(busqueda());
    // const resultado = dni.filter((paciente) => {
    //   return paciente.dni.includes(busqueda);
    });
    if (
      busqueda === "" ||
      resultado === "" ||
      resultado.length === 0 ||
      resultado === undefined
    ) {
      setPacientes(pacientes);
    } else if (resultado.length > 0) {
      setPacientes(resultado);
    }
  };
  */

  const deletePaciente = async (id) => {
    await axios.delete(`${URI}/${id}`);
    getAllPacientes();
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
           <h5>Listado de Pacientes</h5>
          <Box>
            <form onSubmit={search}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar por apellido"
                  autoFocus
                  onChange={(e) => search(e)}
                />
              </div>
            </form>
          </Box>
          {/* 
          
          BUSQUEDA POR DNI
          
          <Box>
            <form onSubmit={searchDNI}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar por DNI"
                  onChange={(e) => searchDNI(e)}
                />
              </div>
            </form>
          </Box> */}

          {/* <hr /> */}
          <div className="col">
            <button className="btn btn-warning m-2" onClick={getAllPacientes}>
              <i className="fas fa-sync"></i>
            </button>
            <button
              className="btn btn-primary m-2 p-2"
              onClick={() => navigate("/crear-paciente")}
            >
              Agregar
            </button>
          </div>
          <table className="table table-striped img-fluid">
            <thead className="table-primary">
              <tr>
                {/* <th>ID</th> */}
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Barrio</th>
                <th>Ficha | Editar | Baja </th>
                {/* <th>Ficha</th> */}
                {/* <th>Eliminar</th> */}
              </tr>
            </thead>
            <tbody>
              {pacientes.map((paciente) => (
                <tr key={paciente.id}>
                  {/* <td>{paciente.id}</td> */}
                  <td>{paciente.nombre}</td>
                  <td>{paciente.apellido}</td>
                  <td>{paciente.dni}</td>
                  <td>{paciente.barrio}</td>
                  <td className="text-center">
                    <Link to={`/ver-paciente/${paciente.id}`}>
                      <button className="btn btn-success m-1">
                        <i className="fas fa-eye fa-xs"></i>
                      </button>
                    </Link>
                    <Link to={`/editar-paciente/${paciente.id}`}>
                      <button className="btn btn-info m-1">
                        <i className="fas fa-edit fa-xs"></i>
                      </button>
                    </Link>
                    <button
                      className="btn btn-danger m-1"
                      onClick={() => deletePaciente(paciente.id)}
                    >
                      <i className="fas fa-trash-alt fa-xs"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListarPacientes;
