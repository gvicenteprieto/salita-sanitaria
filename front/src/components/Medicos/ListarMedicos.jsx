import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/medicos";

//componente funcional
const ListarMedicos = () => {
  const [medicos, setMedicos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getMedicos();
  }, []);

  //procedimiento para mostrar todas las consultas
  const getMedicos = async () => {
    const response = await axios.get(URI);
    setMedicos(response.data);
  };

  //procedimiento para eliminar una consulta, necesita id como parámetro
  const removeMedico = async (id) => {
    await axios.delete(`${URI}/${id}`);
    getMedicos();
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h5>Listado de Médicos</h5>
          <Link to="/crear-medico" className="btn btn-warning m-2 p-2">Agregar médicos
          </Link>

          <table className="table table-striped img-fluid">
            <thead className="table-primary">
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Especialidad</th>
                <th>Ficha | Editar | Baja </th>
              </tr>
            </thead>
            <tbody>
              {medicos.map((medico) => {
                return (
                  <tr key={medico.id}>
                    <td>{medico.nombre}</td>
                    <td>{medico.apellido}</td>
                    <td>{medico.especialidad}</td>
                    <td className="text-center">
                      <Link to={`/ver-medico/${medico.id}`}>
                        <button className="btn btn-success m-1">
                          <i className="fas fa-eye fa-xs"></i>
                        </button>
                      </Link>
                      <Link to={`/editar-medico/${medico.id}`}>
                        <button className="btn btn-info m-1">
                          <i className="fas fa-edit fa-xs"></i>
                        </button>
                      </Link>

                      <button
                        className="btn btn-danger m-1"
                        onClick={() => removeMedico(medico.id)}
                      >
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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

export default ListarMedicos;
