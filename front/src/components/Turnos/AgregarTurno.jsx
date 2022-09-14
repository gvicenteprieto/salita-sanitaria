import React from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
// import moment from "moment";
// import "moment/locale/es";
import { useState } from "react";

export default function ({ isOpen, onClose, onEventAdded }) {
  const [dni, setDNI] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fecha, setFecha] = useState(new Date());
  //const [hora, setHora] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
    onEventAdded({
      dni,
      nombre,
      apellido,
      fecha,
      //hora,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
                <input
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
                <input
          placeholder="DNI"
          value={dni}
          onChange={(e) => setDNI(e.target.value)}
        />
        <div>
          <label>Fecha</label>
          <Datetime
            locale="es"
            value={fecha}
            onChange={(date) => setFecha(date)}
          />
        </div>

        {/* <div>
          <label>Hora</label>
          <Datetime value={hora} onChange={(date) => setHora(date)} />
        </div> */}

        <button className="btn btn-success mt-1">Agregar turno</button>
      </form>
    </Modal>
  );
}
