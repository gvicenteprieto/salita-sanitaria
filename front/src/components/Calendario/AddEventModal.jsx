import React from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import { useState } from "react";

export default function ({ isOpen, onClose, onEventAdded }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  //const [end, setEnd] = useState(new Date());

  //const [dni, setDNI] = useState("");
  //const [nombre, setNombre] = useState("");
  //const [apellido, setApellido] = useState("");
  //const [fecha, setFecha] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
    onEventAdded({
      //dni,
      //nombre,
      //apellido,
      //fecha,
      //id,
      title,
      start
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Apellido"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* <div>
          <label>id</label>
          <Number value={id} onChange={(id) => setID(id)} />
        </div> */}

        {/* <input value={id} onChange={(e) => setID(e.target.value)} /> */}

        <div>
          <label>Fecha y Hora</label>
          <Datetime
            locale="es"
            value={start}
            onChange={date => setStart(date)}
          />
        </div>

        {/* <div>
          <label>end</label>
          <Datetime locale="es" value={end} onChange={date => setEnd(date)} />
        </div> */}

        <button className="btn btn-success mt-1">Agregar turno</button>
      </form>
    </Modal>
  );
}
