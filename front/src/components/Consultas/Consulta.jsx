import axios from "axios";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/consultas";

const Consulta = () => {
  const { id } = useParams();
  const [dni, setDNI] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`${URI}/${id}`).then((response) => {
      setDNI(response.data.dni);
      setTitle(response.data.title);
      setContent(response.data.content);
    });
  }, [id]);

  return (
    <div style={{ marginTop: 20, padding: 20 }}>
      <div className="h5">Ficha Consulta</div>

      <div className="table-responsive">
        <div className="col-md-12" style={{ padding: 5 }}>
          <div className="col m-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{title.toUpperCase()} </h5>
                <h4 className="card-title text-success">
                  {" "}
                  {content.toUpperCase()}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Box>
        <Link to={`/editar-consulta/${id}`}>
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

export default Consulta;
