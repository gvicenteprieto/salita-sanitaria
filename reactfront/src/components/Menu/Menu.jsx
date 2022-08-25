// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import { useState } from "react";
import  Registro  from "../Registro/Registro.jsx";
import  Listar  from "../Listar/Listar.jsx";
import  Estadistica  from "../Estadistica/Estadistica.jsx";

const Menu = (props) => {

  
  const [registro, setRegistro] = useState("");
  const [listar, setListar] = useState("");
  const [estadistica, setEstadistica] = useState("");

  function cerrarSesion() {
    document.getElementById("caja_menu").style.display = "none";
    document.getElementById("formLogin").style.display = "block";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("username").focus();
  }

  function f_registrar() {
    setRegistro = 1;
    setListar = 0;
    setEstadistica = 0;
  }

  function f_listar() {
    setRegistro = 0;
    setListar = 1;
    setEstadistica = 0;
  }

  function f_estadistica() {
    setRegistro = 0;
    setListar = 0;
    setEstadistica = 1;
  }
  return (
    <div>
      {/* Menu */}
      <div id="caja_menu" style={{ textAlign: "left" }}>
        <h3 className="container h3">user: {props.user.toUpperCase()}</h3>

        <nav
          className="navbar navbar-expand-lg navbar-light fondo-argentina"
          // style={{ marginTop: 20 }}
        >
          <div className="container">
            <label className="navbar-brand h5 text-light">
              {" "}
              App Consultorio{" "}
            </label>

            <button
              className="navbar-toggler text-primary bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              arial-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link
                  to="/login"
                  className="nav-link h5 text-center text-light"
                >
                  Login
                </Link>

                <Link
                  to="/registro"
                  className="nav-link h5 text-center text-light"
                  onClick={f_registrar}
                >
                  Registro
                </Link>

                <Link
                  to="/listar"
                  className="nav-link h5 text-center text-light"
                  onClick={f_listar}
                >
                  Listar
                </Link>

                <Link
                  to="/estadistica"
                  className="nav-link h5 text-center text-light"
                  onClick={f_estadistica}
                >
                  Estadística
                </Link>
                <Link
                  to="/login"
                  className="nav-link h5 text-center text-light"
                  // style={{ color: "blue" }}
                  onClick={cerrarSesion}
                >
                  Cerrar sesión
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {registro === 1 && <Registro />}
      {listar === 1 && <Listar />}
      {estadistica === 1 && <Estadistica />}
    </div>
  );
};

export default Menu;
