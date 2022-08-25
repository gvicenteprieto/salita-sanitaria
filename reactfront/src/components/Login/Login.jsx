import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";

const Login = () => {
  const [login, setLogin] = useState("false")
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function inicioSesion(e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    if (user.length === 0 || email.length === 0 || pass.length === 0) {
      alert("Complete sus datos por favor");
    } else {
      if (user === "admin" && email === "123@123.net" && pass === "123") {
        setLogin("true")
        document.getElementById("formLogin").style.display="none"
      } else {
        setLogin("false")
        alert("Error de usuario, correo  o contraseña")
        document.getElementById("user").value = ""
        document.getElementById("email").value = ""
        document.getElementById("pass").value = ""
        document.getElementById("user").focus();
      }
    }
  }

  return (
    <div
      className="container fondo-argentina" 
      style={{ marginTop: 20, padding: 20, borderRadius: 20 }}
    >
      <div className="p-1">
        <div className="p-1">
          <div className="container mt-3 col-sm-8 col-lg-4 col-md-6" id="formLogin">
            <h3 className="text-center text-light">LOGIN</h3>
            <div className="p-1 ">
              <form action="/login" method="POST" id="form_login">
              {/* <form  id="form_login"> */}
                <div className="form-group m-2">
                  <label className="m-1" for="nombre">
                    Nombre
                  </label>
                  <input
                    type="username"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Ingrese su nombre de Usuario"
                    onChange={(e) => setUser(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="form-group m-2">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Ingrese su email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group m-2">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Ingrese su password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                <div className="container text-center">
                {/* <button type="submit" className="btn btn-success mt-3 p-2">
                    Ingresar
                  </button> */}
                  <button type="submit" className="btn btn-success mt-3 p-2" onClick={inicioSesion}>
                    Ingresar
                  </button>
                </div>
              </form>
            </div>
            <hr />
            <div className="container text-center">
              <h6 className="text-center">
                Debe registrarse para poder acceder
              </h6>
              <Link to={`/registro`}>
                <button className="btn btn-primary m-1">Ir al Registro</button>
              </Link>
            </div>
          </div>
            {
              //si login true: se muestra menú y con la prop user para usar en Menú
              login ==="true" && <Menu user={user}/>
            }
        </div>
      </div>
    </div>
  );
};

export default Login;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Box } from "@mui/material";

// const URI = "http://localhost:8000/empleados";

// const Login = () => {
//     const [empleados, setEmpleados] = useState([]);

//     //const navigate = useNavigate();
//     const navigate = useNavigate();
//     useEffect(() => {
//       //función que crearé a continuación
//       getAllEmpleados();
//     }, []);

//     //procedimiento para mostrar todos los empleados
//     const getAllEmpleados = async () => {
//       const response = await axios.get(URI);
//       setEmpleados(response.data);
//     };

//     const search = (e) => {
//       e.preventDefault();
//       const busqueda = e.target.value;
//       const resultado = empleados.filter((empleado) => {
//         return empleado.apellido.toLowerCase().includes(busqueda.toLowerCase());
//       });
//       if (
//         busqueda === "" ||
//         resultado === "" ||
//         resultado.length === 0 ||
//         resultado === null
//       ) {
//         setEmpleados(empleados);
//       } else if (resultado.length > 0) {
//         setEmpleados(resultado);
//       }
//     };

//     const sector = (e) => {
//       const sector = e.target.value;
//       const resultado = empleados.filter((empleado) => {
//         return empleado.sector.toLowerCase().includes(sector.toLowerCase());
//       });
//       if (resultado.length > 0 || sector !== "") {
//         setEmpleados(resultado);
//       }
//     };

//     return (
//       <div className="container mt-3">
//         <div className="row">
//           <div className="col-md-12">
//             {/* <h4>Nómina empleados</h4> */}
//             <Box>
//               <form onSubmit={search}>
//                 <div className="form-group mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Buscar por apellido"
//                     autoFocus
//                     onChange={(e) => search(e)}
//                   />
//                 </div>
//               </form>
//             </Box>
//             <Box>
//               <form onSubmit={sector}>
//                 <div className="form-group mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Buscar por sector"
//                     onChange={(e) => sector(e)}
//                   />
//                 </div>
//               </form>
//             </Box>

//             {/* <hr /> */}
//             <div className="col">
//               <button className="btn btn-warning m-2" onClick={getAllEmpleados}>
//                 <i className="fas fa-sync"></i>
//               </button>
//               <button
//                 className="btn btn-primary m-2 p-2"
//                 onClick={() => navigate("/crear")}
//               >
//                 Agregar
//               </button>
//             </div>
//             <table className="table table-striped img-fluid">
//               <thead className="table-primary">
//                 <tr>
//                   {/* <th>ID</th> */}
//                   <th>Nombre</th>
//                   <th>Apellido</th>
//                   <th>Sector</th>
//                   <th>Cargo</th>
//                   <th>Editar</th>
//                   <th>Ficha</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {empleados.map((empleado) => (
//                   <tr key={empleado.id}>
//                     {/* <td>{empleado.id}</td> */}
//                     <td>{empleado.nombre}</td>
//                     <td>{empleado.apellido}</td>
//                     <td>{empleado.sector}</td>
//                     <td>{empleado.cargo}</td>
//                     <td>
//                       <Link to={`/editar/${empleado.id}`}>
//                         <button className="btn btn-info m-1">
//                           <i className="fas fa-edit"></i>
//                         </button>
//                       </Link>
//                     </td>
//                     {/* <button
//                         className="btn btn-danger m-2"
//                         onClick={() => deleteEmpleado(empleado.id)}
//                       >
//                         <i className="fas fa-trash-alt"></i>
//                       </button> */}
//                     <td>
//                       <Link to={`/ver/${empleado.id}`}>
//                         <button className="btn btn-success m-1">
//                           <i className="fas fa-eye"></i>
//                         </button>
//                       </Link>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//               {/* <div>
//                 <ul className="pagination">
//                   <li className="page-item">
//                     <a className="page-link" href="#">
//                       <i className="fas fa-chevron-left"></i>
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a className="page-link" href="#">
//                       1
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a className="page-link" href="#">
//                       2
//                     </a>
//                   </li>
//                 </ul>
//               </div> */}
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   };

// export default Login;
