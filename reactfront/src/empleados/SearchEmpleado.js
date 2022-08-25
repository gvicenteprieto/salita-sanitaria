import axios from "axios";
import { useEffect, useState } from "react";
import { EmpleadosProvider } from "../context/empleadosContext";

const URI = "http://localhost:8000/empleados";

const SearchEmpleado = async () => {
  const [empleados, setEmpleados] = useState([]);
  useEffect(() => {
    getAllEmpleados();
  }
  , []);

  const getAllEmpleados = async () => {
    const response = await axios.get(URI);
    setEmpleados(response.data);
  }
  
  return (
    <div className="container">
      <h1>Empleado</h1>
      </div>
  );
};

export default SearchEmpleado;
