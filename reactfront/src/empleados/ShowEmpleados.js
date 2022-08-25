import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const URI = "http://localhost:8000/empleados";

//componente funcional + hooks
const ShowEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);

  //const navigate = useNavigate();
  const navigate = useNavigate();
  useEffect(() => {
    //función que crearé a continuación
    getAllEmpleados();
  }, []);

  //procedimiento para mostrar todos los empleados
  const getAllEmpleados = async () => {
    const response = await axios.get(URI);
    setEmpleados(response.data);
  };

  const search = (e) => {
    e.preventDefault();
    const busqueda = e.target.value;
    const resultado = empleados.filter((empleado) => {
      return empleado.apellido.toLowerCase().includes(busqueda.toLowerCase());
    });
    if (
      busqueda === "" ||
      resultado === "" ||
      resultado.length === 0 ||
      resultado === null
    ) {
      setEmpleados(empleados);
    } else if (resultado.length > 0) {
      setEmpleados(resultado);
    }
  };

  const sector = (e) => {
    const sector = e.target.value;
    const resultado = empleados.filter((empleado) => {
      return empleado.sector.toLowerCase().includes(sector.toLowerCase());
    });
    if (resultado.length > 0 || sector !== "") {
      setEmpleados(resultado);
    }
  };

  //procedimiento para eliminar un blog
  const deleteEmpleado = async (id) => {
    await axios.delete(`${URI}/${id}`);
    getAllEmpleados();
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          {/* <h4>Nómina empleados</h4> */}
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
          <Box>
            <form onSubmit={sector}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar por sector"
                  onChange={(e) => sector(e)}
                />
              </div>
            </form>
          </Box>

          {/* <hr /> */}
          <div className="col">
            <button className="btn btn-warning m-2" onClick={getAllEmpleados}>
              <i className="fas fa-sync"></i>
            </button>
            <button
              className="btn btn-primary m-2 p-2"
              onClick={() => navigate("/crear")}
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
                <th>Cargo</th>
                <th>Ficha | Editar |  Baja </th>
                {/* <th>Ficha</th> */}
                {/* <th>Eliminar</th> */}
              </tr>
            </thead>
            <tbody>
              {empleados.map((empleado) => (
                <tr key={empleado.id}>
                  {/* <td>{empleado.id}</td> */}
                  <td>{empleado.nombre}</td>
                  <td>{empleado.apellido}</td>
                  <td>{empleado.sector}</td>
                  <td>{empleado.cargo}</td>
                  <td className="text-center">
                  <Link to={`/ver/${empleado.id}`}>
                      <button className="btn btn-success m-1">
                        <i className="fas fa-eye"></i>
                      </button>
                    </Link>
                    <Link to={`/editar/${empleado.id}`}>
                      <button className="btn btn-info m-1">
                        <i className="fas fa-edit"></i>
                      </button>
                    </Link>
                    {/* </td>
                  <td> */}
                    {/* <Link to={`/ver/${empleado.id}`}>
                      <button className="btn btn-success m-1">
                        <i className="fas fa-eye"></i>
                      </button>
                    </Link> */}
                  {/* </td>
                  <td> */}
                    <button
                      className="btn btn-danger m-2"
                      onClick={() => deleteEmpleado(empleado.id)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* <div>
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fas fa-chevron-left"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
              </ul>
            </div> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowEmpleados;
