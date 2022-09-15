import "./App.css";
import Modal from "react-modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import MenuVer from "./components/Menu/MenuVer";
import Login from "./components/Login/Login";
import Registro from "./components/Registro/Registro";

import ListarPacientes from "./components/Pacientes/ListarPacientes";
import CrearPacientes from "./components/Pacientes/CrearPaciente";
import EditarPaciente from "./components/Pacientes/EditarPaciente";
import Paciente from "./components/Pacientes/Paciente";

import ListarMedicos from "./components/Medicos/ListarMedicos";
import CrearMedico from "./components/Medicos/CrearMedico";
import EditarMedico from "./components/Medicos/EditarMedico";
import Medico from "./components/Medicos/Medico";

import Administrativos from "./components/Administrativos/Administrativos";
import Calendario from "./components/Calendario/Calendario";

import MostrarConsultas from "./components/Consultas/MostrarConsultas";
import CrearConsultas from "./components/Consultas/CrearConsulta";
import EditarConsulta from "./components/Consultas/EditarConsulta";
import Consulta from "./components/Consultas/Consulta";

import Turnos from "./components/Turnos/Turnos";
import BuscarTurno from "./components/Turnos/BuscarTurno";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <MenuVer />
        <Routes>
         
          <Route path="/" element={<ListarPacientes />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registro" element={<Registro />} />

          <Route path="/pacientes" element={<ListarPacientes />} />
          <Route path="/crear-paciente" element={<CrearPacientes />} />
          <Route path="/editar-paciente/:id" element={<EditarPaciente />} />
          <Route path="/ver-paciente/:id" element={<Paciente />} />
          {/* <Route path="/eliminar-paciente/:id" element={<Paciente />} /> */}

          <Route path="/consultas" element={<MostrarConsultas />} />
          <Route path="/crear-consulta" element={<CrearConsultas />} />
          <Route path="/editar-consulta/:id" element={<EditarConsulta />} />
          <Route path="/ver-consulta/:id" element={<Consulta />} />

          <Route path="/turnos" element={<Turnos />} />
          <Route path="/buscarTurno" element={<BuscarTurno />} />

          <Route path="/calendario" element={<Calendario />} />
          {/* <Route exact path="/estadistica" element={<Estadistica />} /> */}

          <Route exact path="/medicos" element={<ListarMedicos />} />
          <Route path="/crear-medico" element={<CrearMedico />} />
          <Route path="/editar-medico/:id" element={<EditarMedico />} />
          <Route exact path="/ver-medico/:id" element={<Medico />} />

          <Route exact path="/administrativos" element={<Administrativos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
