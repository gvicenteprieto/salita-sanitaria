import DatePicker, { registerLocale } from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import { Component } from "react";
import es from "date-fns/locale/es";
registerLocale("es", es);

/*
class Fechas extends Component {
  state = {
    fecha: new Date(new Date(moment.now())),
  };

  onChange = (fecha) => {
    this.setState({ fecha: fecha });
  };
  agregarFecha = (fecha) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    alert(fecha.toLocaleDateString("es-ES", options));
  };

  render() {
    return (
      <div className="container">
        <h5 className="card-title m-3">Fechas Turnos</h5>
        <div className="center">
          <DatePicker
            locale="es"
            selected={this.state.fecha}
            onChange={this.onChange}
            className="pickers"
            dateFormat="dd 'de' MMMM 'de' yyyy"
          />
        </div>
        <br />
        <input
          type="button"
          value="agregar Fecha"
          className="btn btn-primary"
          onClick={() => this.agregarFecha(this.state.fecha)}
        />
        
      </div>
    );
  }
}

export default Fechas;


*/

const Fechas = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(new Date(moment.now())));

  const verFecha=(selectedDate) => {
    setSelectedDate(selectedDate)
  }

  const agregarFecha = (selectedDate) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    alert(selectedDate.toLocaleDateString("es-ES", options));
  };

  return (
    <div>
      <div className="container">
        <h5 className="card-title m-3">Elegir Fecha</h5>
        <div className="center">
          <DatePicker
            locale="es"
            selected={selectedDate}
            onChange={verFecha}
            className="pickers"
            dateFormat="dd 'de' MMMM 'de' yyyy"
            showYearDropdown
            scrollableMonthYearDropdown
          />
        </div>
        <br />
        <input
          type="button"
          value="agregar Fecha"
          className="btn btn-primary"
          onClick={() => agregarFecha(selectedDate)}
        />
      </div>
    </div>
  );
};

export default Fechas;
