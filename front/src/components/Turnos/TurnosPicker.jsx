import { useState, useEffects, useRef } from "react";
import { Calendar} from "react-date-range"

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import moment from "moment";

import { Component } from "react";
import es from "date-fns/locale/es";
registerLocale("es", es);


const TurnosPicker = () => {

    const [calendar, setCalendar] = useState("");

    const handleSelect = (date) => {
        console.log(date)
    }
  return (
    <div>TurnosPicker</div>
  )
}

export default TurnosPicker