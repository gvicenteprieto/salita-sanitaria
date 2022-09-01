import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/consultas";

const CrearConsultas = () => {
  const [dni, setDNI] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const almacenarConsulta = async (e) => {
    e.preventDefault();
    await axios.post(URI, { dni: dni, title: title, content: content });
    //navigate para una vez guarda las consultas reenvía a nueva ruta
    navigate("/consultas");
  };

  return (
    <div className="container">
      <h5 className="mt-3">Crear nueva Consulta</h5>
      <form onSubmit={almacenarConsulta}>
        <div className="form-group mb-3">
          <label className="form-label">DNI</label>
          <input
            type="text"
            className="form-control"
            value={dni}
            onChange={(e) => setDNI(e.target.value)}
            autoFocus
          />
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
          <label className="form-label">Contenido</label>
          <textarea
            type="text"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            autoFocus
          />
        </div>

        <button type="submit" className="btn btn-primary m-3">
          Crear consulta
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

export default CrearConsultas;
