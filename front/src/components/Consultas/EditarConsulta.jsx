import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/consultas";

const EditarConsulta = () => {
  //const dni = useParams();
  const { id } = useParams();
  const [dni, setDNI] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  //procedimiento actualizar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${URI}/${id}`, {
      dni,
      title,
      content,
    });
    navigate("/consultas");
  };

  useEffect(() => {
    getConsultabyId();
  }, []);

  const getConsultabyId = async () => {
    try {
      const response = await axios.get(`${URI}/${id}`);
      setDNI(response.data.dni);
      setTitle(response.data.title);
      setContent(response.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h5> Editar datos de Consulta</h5>

          <form onSubmit={update}>

            <div className="form-group mb-3">
              <label className="form-label">DNI</label>
              <input type="text" className="form-control" value={dni} />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Título</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Consulta</label>
              <textarea
                type="text"
                className="form-control"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary m-3">
              Editar
            </button>
          </form>

          <Link to={`/consultas`}>
            <button className="btn btn-success m-3">
              {/* <i class="fa-solid fa-inbox"></i> */}
              Consultas
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
export default EditarConsulta;
