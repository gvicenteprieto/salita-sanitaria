import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/consultas";

//componente funcional
const MostrarConsultas = () => {
  const [consultas, setConsultas] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getConsultas();
  }, []);

  //procedimiento para mostrar todas las consultas
  const getConsultas = async () => {
    const response = await axios.get(URI);
    setConsultas(response.data);
  };

  //procedimiento para eliminar una consulta, necesita id como parámetro
  const removeConsulta = async (id) => {
    await axios.delete(`${URI}/${id}`);
    getConsultas();
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h5>Listado de Consultas</h5>
          <Link to="/crear-consulta" className="btn btn-success m-2 p-2">Agregar consulta
          </Link>

          <table className="table table-striped img-fluid">
            <thead className="table-primary">
              <tr>
                <th>DNI</th>
                <th>Título</th>
                <th>Consulta</th>
                <th>Ficha | Editar | Baja </th>
              </tr>
            </thead>
            <tbody>
              {consultas.map((consulta) => {
                return (
                  <tr key={consulta.id}>
                    <td>{consulta.dni}</td>
                    <td>{consulta.title}</td>
                    <td>{consulta.content}</td>
                    <td className="text-center">
                      <Link to={`/ver-consulta/${consulta.id}`}>
                        <button className="btn btn-success m-1">
                          <i className="fas fa-eye fa-xs"></i>
                        </button>
                      </Link>
                      <Link to={`/editar-consulta/${consulta.id}`}>
                        <button className="btn btn-info m-1">
                          <i className="fas fa-edit fa-xs"></i>
                        </button>
                      </Link>

                      <button
                        className="btn btn-danger m-1"
                        onClick={() => removeConsulta(consulta.id)}
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

export default MostrarConsultas;
