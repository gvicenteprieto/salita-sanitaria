import React from "react";
import { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react/";
import dayGridPlugin from "@fullcalendar/daygrid";
import AgregarTurno from "./AgregarTurno";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";

const URI = "http://localhost:8000/turnos";

const Turnos = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
   
    calendarApi.addEvent({
      fecha: moment(event.fecha).toDate(),
      hora: moment(event.hora).toDate(),
      apellido: event.apellido,
      dni: event.dni,
    });
  };

  async function handleEventAdd(data) {
    await axios.post("/createTurno", data.event);
    //await axios.post(URI, data.event);
  }

  async function handleDatesSet(data) {
    const response = await axios.get(
      URI 
      // moment(data.start).toISOString() + "&end=" + moment(data.end).toISOString()
    );
    setEvents(response.data);
  }




  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h5>Listado de Turnos!</h5>

          <button
            className="btn btn-success mt-3"
            onClick={() => setModalOpen(true)}
          >
            Agregar turno
          </button>

          <div style={{ position: "relative", zIndex: 0 }}>
            <FullCalendar
              locale={"es"}
              ref={calendarRef}
               events={events}
              plugins={[dayGridPlugin]}
              editable={true}
              initialView="dayGridMonth"
              eventAdd={(event) => handleEventAdd(event)}
             datesSet={(date) => handleDatesSet(date)}
            />

            <AgregarTurno
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              onEventAdded={event => {
                onEventAdded(event);
              }}
            />

            {/* <AddEventModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              onEventAdded={(event) => {
                onEventAdded(event);
              }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turnos;
